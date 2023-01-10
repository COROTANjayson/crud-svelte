<script>
	// @ts-nocheck
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	import ContactForm from '$lib/components/Contact/ContactForm.svelte';
	import ContactList from '$lib/components/Contact/ContactList.svelte';
	import { nav } from '$lib/store/store';
	import { user } from '$lib/store/authStore';
	import { supabase } from '$lib/supabase';
	/** @type {import('./$types').PageData} */

	export let data;
	/** @type {import('./$types').ActionData} */
	export let form;

	import { formButton, input } from '$lib/store/contactStore';

	const { contacts, pathname } = data;
	let contactList = [];
	$: forms = form;
	$: {
		contactList = data.contacts;
		input.update(
			(n) =>
				(n = {
					firstName: '',
					lastName: '',
					birthdate: '',
					age: '',
					number: '',
					id: ''
				})
		);
	}
	$: user_id = '';
	onMount(async () => {
		nav.update((nav) => (nav = pathname));
		const getUser = await supabase.auth.getUser();
		user.set(getUser);
		user_id = getUser.data.user.id;
	});
</script>
<svelte:head>
	<title>Contact</title>
</svelte:head>
<main>
	<ContactList contacts={contactList} {user_id} form={forms}/>
	
</main>
