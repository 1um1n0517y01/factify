import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for interacting with your database
const supabase = createClient(
  'https://ryqnvwvxmbqyenkulifg.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ5cW52d3Z4bWJxeWVua3VsaWZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODAwMjU1NDMsImV4cCI6MTk5NTYwMTU0M30.yBq5yf4YQfB7MDaRHEawWW698yqCs8nhGl4nvOuMSsc'
);

export default supabase;
