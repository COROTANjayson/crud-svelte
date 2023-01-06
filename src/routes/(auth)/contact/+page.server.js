// @ts-nocheck
import { supabase } from "../../../supabase.js";
// import { nav } from '../../../store'
import { isUpdate, input } from "../../../store/contactStore";
import { fail } from '@sveltejs/kit';
// import { user } from "../../..authStore";
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
        
        const user_id = url.searchParams.get('id');
     
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
            user_id

        }
        // console.log('hh',contact)
    
        // let letters = /^[A-Za-z]+$/;
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

    },
    updateContact: async ({ url, request }) => {
        const data = await request.formData();

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

        isUpdate.update((n) => (n = false));
        const { error } = await supabase.from('contact').update(contact).match({ id })
        if (error) {
            return console.error(error);
        }


    },
    deleteContact: async ({ url }) => {
      
        const id = url.searchParams.get('id');

        const { error } = await supabase.from('contact').delete().match({ id });

        if (error) {
            return console.error(error);
        }
    },
 
};