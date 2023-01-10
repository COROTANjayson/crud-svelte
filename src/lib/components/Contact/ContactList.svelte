<script>
	// @ts-nocheck
	import { enhance } from '$app/forms';
	import ContactForm from './ContactForm.svelte';
	import Contact from './Contact.svelte';
	/** @type {import('./$types').PageData} */
	export let contacts;
	export let form;

	export let user_id;
	let searchTerm = '';
	let searchedContacts = [];
	$: {
		let contactsByID = contacts.filter((con) => {
			return con.user_id === user_id;
		});
		let searchedFirstName = contactsByID.filter((contact) => {
			return contact.firstName.includes(searchTerm);
		});
		let searchedLastName = contactsByID.filter((contact) => {
			return contact.lastName.includes(searchTerm);
		});
		let contactList = [...searchedFirstName, ...searchedLastName];
		const ids = contactList.map((o) => o.id);
		searchedContacts = contactList.filter(({ id }, index) => !ids.includes(id, index + 1));
	}
</script>

<div class="w-6/6 my-6 flex flex-col items-center justify-center ">
	<div class="w-5/6 my-6 flex justify-between items-center">
		<div>
			<ContactForm user_id={user_id} form={form}/>
		</div>
		<div class="flex">
			<div class="text-sm">
				<input
					class="appearance-none shadow-sm border border-gray-200 p-2 focus:outline-none focus:border-gray-500 rounded-lg"
					type="text"
					placeholder="search"
					bind:value={searchTerm}
				/>
			</div>
			<div type="cc" class=" shadow-sm rounded text-white py-2 px-4 ml-2">
				<svg
					class="h-5 w-6 text-blue-500"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<circle cx="11" cy="11" r="8" /> <line x1="21" y1="21" x2="16.65" y2="16.65" /></svg
				>
			</div>
		</div>
	</div>
	<table class="table-autotext-sm w-5/6 text-left text-gray-500 rounded-lg">
		<thead class="text-xs uppercase bg-blue-500 text-white">
			<tr>
				<th scope="col" class="py-3 px-6">Name</th>
				<th scope="col" class="py-3 px-6">Number</th>
				<th scope="col" class="py-3 px-6">Age</th>
				<th scope="col" class="py-3 px-6">Birthdate</th>
				<th scope="col" class="py-3 px-6" />
				<th scope="col" class="py-3 px-6" />
			</tr>
		</thead>
		{#each searchedContacts as contact}
			<Contact {contact} />
		{/each}
	</table>
</div>
