import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ekcvvvwfotgcgfrruopz.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVrY3Z2dndmb3RnY2dmcnJ1b3B6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY0ODAzNTUsImV4cCI6MjA5MjA1NjM1NX0._MH6s6CoTsfT0dY5EN7JWxl9ILW1L7pYhEdIgFV_kHc';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

