import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://fkrseenhsbgqpehudlji.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZrcnNlZW5oc2JncXBlaHVkbGppIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk3MTcwMDksImV4cCI6MjA2NTI5MzAwOX0.-hpzK41QrPVZ_nZwDOR-Pzq7h0s2VVjtx6RJk4TJS0I" 

export const supabase = createClient(supabaseUrl, supabaseKey)