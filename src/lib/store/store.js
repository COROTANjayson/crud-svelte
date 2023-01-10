import { writable } from 'svelte/store';
// import {supabase} from "../supabase.js";
export const nav = writable('/');
export const modal = writable(false);
export const windowStyle = writable({});

export const closeModal = () => {
    modal.update(n=>n=false)
};
export const openModal = () => {
    modal.update(n=>n=true)
};