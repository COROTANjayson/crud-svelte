import { supabase } from "../../../supabase.js";
import { nav } from '../../../store/store'
import { isUpdate, input } from "../../../store/contactStore";
import { fail } from '@sveltejs/kit';
import { goto } from '$app/navigation';

/** @type {import('./$types').Actions} */
// export const actions = {
//     login: async (event) => {
//         // if (!locals.user) throw error(401);
//         const formData = await event.request.formData();

//         const email = formData.get('email')
//         const password = formData.get('password')
       
//         const contact = {
//             email,
//             password,
//         }
//         console.log(contact)

//         const { data, error } = await supabase.auth.signInWithPassword({
//             email: email,
//             password: password,
//         });
//         console.log(data)
//         let login = true
//         if(data.session === null) {
//             login = true
//         }
//         return {login: login, authData: data}
//         // let letters = /^[A-Za-z]+$/;
//         /**
//          * @param {string} str
//          */
//         // const containsAnyLetters = (str) => {
//         //     return /[a-zA-Z]/.test(str);
//         // }
  

//         // const { error } = await supabase.from('contact').insert([contact]);
//         // if (error) {
//         //     return console.error(error);
//         // }

//     },
   
// };