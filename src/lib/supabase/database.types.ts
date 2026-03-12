export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      attendance: {
        Row: {
          id: string
          registration_id: string
          recorded_by: string
          timestamp: string | null
          type: string
        }
        Insert: {
          id?: string
          registration_id: string
          recorded_by: string
          timestamp?: string | null
          type: string
        }
        Update: {
          id?: string
          registration_id?: string
          recorded_by?: string
          timestamp?: string | null
          type?: string
        }
        Relationships: [
          {
            foreignKeyName: "attendance_recorded_by_fkey"
            columns: ["recorded_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "attendance_registration_id_fkey"
            columns: ["registration_id"]
            isOneToOne: false
            referencedRelation: "registrations"
            referencedColumns: ["id"]
          }
        ]
      }
      profiles: {
        Row: {
          created_at: string | null
          email: string
          full_name: string | null
          id: string
          role: string | null
        }
        Insert: {
          created_at?: string | null
          email: string
          full_name?: string | null
          id: string
          role?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string
          full_name?: string | null
          id?: string
          role?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      registrations: {
        Row: {
          camp_name: string
          child_name: string
          created_at: string | null
          end_date: string
          id: string
          order_number: string | null
          parent_email: string
          parent_phone: string | null
          qr_id: string
          start_date: string
        }
        Insert: {
          camp_name: string
          child_name: string
          created_at?: string | null
          end_date: string
          id?: string
          order_number?: string | null
          parent_email: string
          parent_phone?: string | null
          qr_id: string
          start_date: string
        }
        Update: {
          camp_name?: string
          child_name?: string
          created_at?: string | null
          end_date?: string
          id?: string
          order_number?: string | null
          parent_email?: string
          parent_phone?: string | null
          qr_id?: string
          start_date?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Registration = Database['public']['Tables']['registrations']['Row'];
export type Profile = Database['public']['Tables']['profiles']['Row'];
export type Attendance = Database['public']['Tables']['attendance']['Row'];
