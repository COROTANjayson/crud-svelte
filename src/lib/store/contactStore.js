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
export const formButton= writable('add');
export const contactInput = async (/** @type {any} */ data, /** @type {any} */ idInput) => {
    input.update(n => n = data);
    formButton.update(n => n = 'update');

}



