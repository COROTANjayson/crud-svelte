// @ts-nocheck
import { supabase } from "$lib/supabase.js";
import { fail } from '@sveltejs/kit';
/** @type {import('../$types').PageServerLoad} */

export async function load({ params, url }) {
    const { data, error } = await supabase.from('contact').select().order('created_at', { ascending: true });
    if (error) {
        return console.error(error);
    }

    return { contacts: data, pathname: url.pathname }
}

/** @type {import('../$types').Actions} */
export const actions = {
    addContact: async ({request, url}) => {
        const data = await request.formData();
        let isAdded = false;
        const user_id = url.searchParams.get('id');
     
        const firstName = data.get('firstName');
        const lastName = data.get('lastName');
        const age = data.get('age');
        const birthdate = data.get('birthdate');
        const number = data.get('number');
        const contact = {
            firstName,
            lastName,
            age,
            birthdate,
            number,
            user_id

        };
    
        /**
         * @param {string} str
         */
        const containsAnyLetters = (str) => {
            return /[a-zA-Z]/.test(str);
        }
        if (number !== null) {
            if (containsAnyLetters(number.toString())) {
                return fail(400, { number: true });
            }
        }

        const { error } = await supabase.from('contact').insert([contact]);
        if (error) {
            return console.error(error);
        }
        isAdded = true;
        return { isAdded: isAdded };

    },
    updateContact: async ({ url, request }) => {
        const data = await request.formData();
        let isAdded = false;
        const id = url.searchParams.get('id');

        const firstName = data.get('firstName')
        const lastName = data.get('lastName')
        const age = data.get('age')
        const birthdate = data.get('birthdate')
        const number = data.get('number')
        const contact = {
            firstName,
            lastName,
            age,
            birthdate,
            number,

        }
        const containsAnyLetters = (str) => {
            return /[a-zA-Z]/.test(str);
        }
        if (number !== null) {
            if (containsAnyLetters(number.toString())) {
                return fail(400, { number: true });
            }
        }

        const { error } = await supabase.from('contact').update(contact).match({ id })
        if (error) {
            return console.error(error);
        }
        isAdded = true;
        return { isAdded: isAdded };

    },
    deleteContact: async ({ url }) => {
      
        const id = url.searchParams.get('id');

        const { error } = await supabase.from('contact').delete().match({ id });

        if (error) {
            return console.error(error);
        }
    },
 
};