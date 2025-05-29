// src/supabase/supabase.client.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://awfwaqdlmwfgnyfcxnqu.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3ZndhcWRsbXdmZ255ZmN4bnF1Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0ODM0NjIwNiwiZXhwIjoyMDYzOTIyMjA2fQ.VhoSRXhHQ0adErlObZgl_yLTjBa5mqfl1dkWqu77Bec';

export const supabase = createClient(supabaseUrl, supabaseKey);
