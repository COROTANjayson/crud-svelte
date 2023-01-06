<script>
	// @ts-nocheck
	import { enhance } from '$app/forms';

	import Contact from './Contact.svelte';
	/** @type {import('./$types').PageData} */
	export let contacts;
	export let user_id
	let searchTerm = '';
	let searchedContacts = [];
	$: {
		let contactsByID = contacts.filter(con=> {return con.user_id === user_id})
		let searchedFirstName= contactsByID.filter((contact) => {
			return contact.firstName.includes(searchTerm);
		});
		let searchedLastName = contactsByID.filter((contact) => {
			return contact.lastName.includes(searchTerm);
		});
		let contactList = [...searchedFirstName, ...searchedLastName]
		const ids = contactList.map(o => o.id)
		searchedContacts = contactList.filter(({id}, index) => !ids.includes(id, index + 1))
		

	}
</script>

<div class="w-6/6 my-6 flex flex-col items-center justify-center ">
	<div class="w-full max-w-lg  div my-6 ">
		<div class="flex items-start justify-end max-w-lg">
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
	<table class="table-autotext-sm text-left text-gray-500 dark:text-gray-400">
		<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
			<tr>
				<th scope="col" class="py-3 px-6">Name</th>
				<th scope="col" class="py-3 px-6">Number</th>
				<th scope="col" class="py-3 px-6">Age</th>
				<th scope="col" class="py-3 px-6">Birthdate</th>
				<th scope="col" class="py-3 px-6">Update</th>
				<th scope="col" class="py-3 px-6">Delete</th>
			</tr>
		</thead>
		{#each searchedContacts as contact}
			<Contact {contact} />
		{/each}
	</table>
</div>
