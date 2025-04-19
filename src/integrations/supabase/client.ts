
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://qgqugrdpytkjojyayknw.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFncXVncmRweXRram9qeWF5a253Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAwNDIyNjIsImV4cCI6MjA1NTYxODI2Mn0.nrqID8PTt6VjjLwgojPHKHO52hvIwbp56RegsSGSb1M";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
