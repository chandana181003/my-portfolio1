import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://noiiibnztpqmmmrnjcmi.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5vaWlpYm56dHBxbW1tcm5qY21pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg2MjM1MDUsImV4cCI6MjA2NDE5OTUwNX0.S66bvsqldANVzpvdLnhFgDWIdtF5YXrX3yURQsaEwW8'

export const supabase = createClient(supabaseUrl, supabaseKey)
