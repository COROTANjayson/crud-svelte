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
		// formButton.update((n) => (n = false));
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
	// $: loading = false
	onMount(async () => {
		nav.update((nav) => (nav = pathname));

		const getUser = await supabase.auth.getUser();
		// console.log('User',getUser)

		user.set(getUser);
		user_id = getUser.data.user.id;
	});
</script>

<main>
	<!-- <div class="h-full flex flex-col xl:flex-row h-screen ">
		<div class="flex-none md:flex-1 ">
			<ContactForm form={forms} {user_id} />
		</div>
		<div class="flex-none md:flex-1  "> -->
			<ContactList contacts={contactList} {user_id} form={forms}/>
		<!-- </div> -->
	<!-- </div> -->
</main>
