// @ts-nocheck
import { supabase } from "$lib/supabase.js";

/** @type {import('./$types').PageServerLoad} */



/** @type {import('./$types').Actions} */
export const actions = {
    register: async ({ request }) => {
        // if (!locals.user) throw error(401);
        const formData = await request.formData();

        const email = formData.get('email')
        const password = formData.get('password')

        const contact = {
            email,
            password,
        }
        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password,
        });
        
        let register = false
        if (error) {
            let message = ''
            console.log('error',error)
            if (error.status === 400) {
                message = 'Email already exists'
            } 
            if (error.status === 422) {
                message = 'Password should be at least 6 characters'
            }
  
            return {error: error.status, message: error.message}
        }
        register = true
        return { register}
    },

};