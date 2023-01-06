import { writable } from 'svelte/store';
import { supabase } from "../supabase.js";
export const contacts = writable([]);

export const input = writable({
    firstName: '',
    lastName: '',
    age: '',
    birthDate: '',
    number: '',
    id: ''
});
// export const id = writable('');

export const isUpdate= writable(false);

export const contactInput = async (/** @type {any} */ data, /** @type {any} */ idInput) => {
    // @ts-ignore
    input.update(n => n = data);
    isUpdate.update(n => n = true);

}
// export const loadContacts = async () => {
//     const { data, error } = await supabase.from('contact').select().order('created_at', { ascending: true });
//     if (error) {
//         return console.error(error);
//     }
//     console.log('hello')
//     // @ts-ignore
//     contacts.set(data);

// }
// loadContacts();

