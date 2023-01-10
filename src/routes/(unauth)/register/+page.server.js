// @ts-nocheck
import { supabase } from "$lib/supabase.js";
import { nav } from '../../../lib/store/store'
// import { isUpdate, input } from "../../../lib/store/contactStore";
import { fail } from '@sveltejs/kit';
import { goto } from '$app/navigation';

/** @type {import('./$types').PageServerLoad} */

// export async function load({ params, url }) {
//     const { data, error } = await supabase.from('contact').select().order('created_at', { ascending: true });
//     if (error) {
//         return console.error(error);
//     }
//     return { contacts: data, pathname: url.pathname }
// }

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
            // 422 - Password should be at least 6 characters
            // 400 - Email already exists
            return {error: error.status, message: error.message}
        }
        register = true
        return { register}
        // if (data) {
        //     goto("/register");
        // } else {
        //     console.log(error);
        // }
        // console.log(data)

        // let letters = /^[A-Za-z]+$/;
        /**
         * @param {string} str
         */
        // const containsAnyLetters = (str) => {
        //     return /[a-zA-Z]/.test(str);
        // }


        // const { error } = await supabase.from('contact').insert([contact]);


    },

};