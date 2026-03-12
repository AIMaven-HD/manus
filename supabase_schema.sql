-- Create profiles table
CREATE TABLE profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  role TEXT CHECK (role IN ('admin', 'staff')) DEFAULT 'staff',
  full_name TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Function to handle new user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name, role)
  VALUES (
    new.id,
    new.email,
    new.raw_user_meta_data->>'full_name',
    'staff' -- Default role is staff
  );
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to call handle_new_user on signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Create registrations table
CREATE TABLE registrations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  qr_id TEXT UNIQUE NOT NULL,
  child_name TEXT NOT NULL,
  parent_email TEXT NOT NULL,
  parent_phone TEXT,
  camp_name TEXT NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  order_number TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Create attendance table
CREATE TABLE attendance (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  registration_id UUID REFERENCES registrations(id) ON DELETE CASCADE NOT NULL,
  type TEXT CHECK (type IN ('drop-off', 'pick-up')) NOT NULL,
  timestamp TIMESTAMPTZ DEFAULT now(),
  recorded_by UUID REFERENCES profiles(id) NOT NULL
);

-- Enable RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE attendance ENABLE ROW LEVEL SECURITY;

-- RLS Policies

-- Profiles: Users can read their own profile
CREATE POLICY "Users can read own profile" ON profiles
  FOR SELECT USING (auth.uid() = id);

-- Registrations: Staff and Admin can read all
CREATE POLICY "Staff and Admin can read registrations" ON registrations
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND (role = 'admin' OR role = 'staff')
    )
  );

-- Registrations: Only Admin can insert/update/delete
CREATE POLICY "Only admin can manage registrations" ON registrations
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND role = 'admin'
    )
  );

-- Attendance: Staff and Admin can read and insert
CREATE POLICY "Staff and Admin can manage attendance" ON attendance
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND (role = 'admin' OR role = 'staff')
    )
  );
