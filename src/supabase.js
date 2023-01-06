import { createClient } from '@supabase/supabase-js'


const supabaseUrl = import.meta.env.VITE_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY;

// export const supabase = createClient(supabaseUrl, supabaseAnonKey)
export const supabase = createClient(supabaseUrl, supabaseAnonKey
//     , {
//     db: {
//       schema: 'public',
//     },
//     auth: {
//       persistSession: true,
//     },
//   }
  
  )
  