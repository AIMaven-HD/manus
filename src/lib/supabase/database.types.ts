export type Profile = {
  id: string;
  email: string;
  role: 'admin' | 'staff';
  full_name?: string;
};

export type Registration = {
  id: string;
  qr_id: string; // Unique ID for the QR code
  child_name: string;
  parent_email: string;
  parent_phone?: string;
  camp_name: string;
  start_date: string;
  end_date: string;
  order_number?: string;
  created_at: string;
};

export type Attendance = {
  id: string;
  registration_id: string;
  type: 'drop-off' | 'pick-up';
  timestamp: string;
  recorded_by: string; // profile id
};

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: Profile;
        Insert: Omit<Profile, 'id'> & { id?: string };
        Update: Partial<Profile>;
      };
      registrations: {
        Row: Registration;
        Insert: Omit<Registration, 'id' | 'created_at'> & { id?: string; created_at?: string };
        Update: Partial<Registration>;
      };
      attendance: {
        Row: Attendance;
        Insert: Omit<Attendance, 'id' | 'timestamp'> & { id?: string; timestamp?: string };
        Update: Partial<Attendance>;
      };
    };
  };
};
