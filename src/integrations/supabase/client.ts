// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://vhgmowebmdxcmbuqlfjo.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZoZ21vd2VibWR4Y21idXFsZmpvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEyNTIyMDQsImV4cCI6MjA1NjgyODIwNH0.d1PMn__JrDpCP5Iws8zIoQsxjxkOIyNSvUrLeXvx4hc";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);