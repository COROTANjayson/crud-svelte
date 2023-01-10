// import { supabase } from "$lib/supabase.js";


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
//         // console.log(contact)

//         const { data, error } = await supabase.auth.signInWithPassword({
//             email: email,
//             password: password,
//         });


//         // console.log(data)
//         let login = false

//         if (error) {
//             console.log('error')
//             return { login: login, user: data, email: email }
//         } else {
//             login = true
//             return { login: login, user: data }

//         }

//     },

// };