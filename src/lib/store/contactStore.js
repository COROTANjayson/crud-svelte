import { writable } from 'svelte/store';
// @ts-ignore
export const contacts = writable([]);

export const input = writable({
    firstName: '',
    lastName: '',
    age: '',
    birthdate: '',
    number: '',
    id: ''
});
// export const id = writable('');

export const formButton= writable('add');

// @ts-ignore
export const contactInput = async (/** @type {any} */ data, /** @type {any} */ idInput) => {
    // @ts-ignore
    input.update(n => n = data);
    formButton.update(n => n = 'update');

}
// @ts-ignore
function containsAnyLetters(str) {
    return /[a-zA-Z]/.test(str);
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

