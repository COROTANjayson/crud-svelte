<script>
	// @ts-nocheck
	import { openModal } from '$lib/store/store.js';

	import { contactInput } from '$lib/store/contactStore';
	import { enhance } from '$app/forms';
	/**
	 * @type {{ firstName: any; lastName: any; age: any; birthdate: any; id: any; number: any}}
	 */
	export let contact;
	const handleInput = () => {
		// @ts-ignore
		contactInput(contact, contact.id);
		openModal();
	};
</script>

<tbody>
	<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
		<th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
			>{contact.firstName} {contact.lastName}</th
		>
		<td class="py-4 px-6">{contact.number}</td>
		<td class="py-4 px-6">{contact.age}</td>
		<td class="py-4 px-6">{contact.birthdate}</td>
		<td class="py-4 px-6 w-12">
			<button
				type="button"
				class="text-sm bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
				on:click={handleInput}
			>
				Update
			</button>
		</td>
		<td class="py-4 px-6 w-12">
			<form use:enhance method="POST" action="?/deleteContact&id={contact.id}" class="mod-options">
				<button
					class="text-sm bg-red-500 hover:bg-red-600 text-white py-1 px-2 ml-3 rounded focus:outline-none focus:shadow-outline"
					aria-label="Delete comment"
				>
					Delete
				</button>
			</form>
		</td></tr
	>
</tbody>
