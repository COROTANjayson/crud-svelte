<script>
	// @ts-nocheck
	import { input, formButton } from '../../store/contactStore';
	import { enhance } from '$app/forms';
	import { modal, openModal, closeModal } from '$lib/store/store.js';
	export let form;
	export let user_id;

	let contact = {
		firstName: '',
		lastName: '',
		birthdate: '',
		age: '',
		number: '',
		id: ''
	};
	
	$: {
		contact = $input;
	}
	$: button = $formButton;
	$: {
		if (form?.isAdded) {
			modal.update((n) => (n = false));
		}
	}
	$: isOpen = $modal;
	
	$: {
		const birthdate = contact.birthdate;
		contact.age = calculateAge(birthdate);
	}
	const calculateAge = (birthdate) => {
		const dob = new Date(birthdate);
		const month_diff = Date.now() - dob.getTime();
		const age_dt = new Date(month_diff);
		const year = age_dt.getUTCFullYear();
		var age = Math.abs(year - 1970);
		return age;
	};
	const addHandle = () => {
		openModal();
		formButton.update((n) => (n = 'add'));
	};

</script>

<button class="btn btn-accent" on:click={addHandle}> Add Contact </button>

<input type="checkbox" id="my-modal" class="hidden" on:click={closeModal} />
<label for="my-modal" class={`modal cursor-pointer ${isOpen ? 'modal-open' : ''}`}>
	<label class="modal-box relative" for="">
		<div class="w-6/6 flex flex-col items-center justify-center ">
			<button
				for="my-modal"
				on:click={closeModal}
				class="btn btn-sm btn-circle absolute right-2 top-2">✕</button
			>
			<div class=" flex flex-wrap w-full text-2xl mb-3 -2 justify-center items-center">
				<span>Contact Form</span>
			</div>
			<form
				class="w-full max-w-lg  form my-6 "
				use:enhance
				method="POST"
				action={button === 'add'
					? `?/addContact&id=${user_id}`
					: `?/updateContact&id=${contact.id}`}
			>
				<!-- <div class="flex flex-col text-sm mb-2 ">
			<label for="avatar" class="mb-2 ml-1 text-gray-800 "> Upload Picture </label>
			<input
				accept="image/png, image/jpeg"
				bind:files
				id="avatar"
				name="avatar"
				type="file"
				class="appearance-none shadow-sm border border-gray-200 p-2 focus:outline-none focus:border-gray-500 rounded-lg "
			/>
		</div> -->
				<!-- svelte-ignore missing-declaration -->

				{#if form?.number}
					<div class="w-full bg-red-200 p-3 rounded-lg mb-3 flex justify-center">
						<p class="error">Please Enter a proper contact number</p>
					</div>
				{/if}

				<div class="grid grid-cols-2 gap-4  ">
					<div class="flex flex-col text-sm mb-2 ">
						<label for="todo" class="mb-2 ml-1 text-gray-800 "> First Name </label>
						<input
							type="text"
							required
							name="firstName"
							placeholder="First Name"
							bind:value={contact.firstName}
							class="appearance-none shadow-sm border border-gray-200 p-2 focus:outline-none focus:border-gray-500 rounded-lg "
						/>
					</div>
					<div class="flex flex-col text-sm mb-2">
						<label for="todo" class="mb-2 ml-1 text-gray-800 "> Last Name </label>
						<input
							type="text"
							required
							placeholder="First Name"
							name="lastName"
							bind:value={contact.lastName}
							class="appearance-none shadow-sm border border-gray-200 p-2 focus:outline-none focus:border-gray-500 rounded-lg "
						/>
					</div>
				</div>
				<div class="grid grid-cols-2 gap-4  ">
					<div class="flex flex-col text-sm mb-2">
						<label for="todo" class="mb-2 ml-1 text-gray-800 "> Birthday </label>
						<input
							bind:value={contact.birthdate}
							name="birthdate"
							required
							type="date"
							class="appearance-none shadow-sm border border-gray-200 p-2 focus:outline-none focus:border-gray-500 rounded-lg "
						/>
					</div>
					<div class="flex flex-col text-sm mb-2">
						<label for="todo" class="mb-2 ml-1 text-gray-800 "> Age </label>
						<input
							type="number"
							required
							name="age"
							min="0"
							bind:value={contact.age}
							class="appearance-none shadow-sm border border-gray-200 p-2 focus:outline-none focus:border-gray-500 rounded-lg "
						/>
					</div>
				</div>

				<div class="flex flex-col text-sm mb-2">
					<label for="todo" class="mb-2 ml-1 text-gray-800 "> Contact Number </label>
					<input
						type="text"
						required
						name="number"
						placeholder="Contact Number"
						bind:value={contact.number}
						class="appearance-none shadow-sm border border-gray-200 p-2 focus:outline-none focus:border-gray-500 rounded-lg "
					/>
				</div>
				{#if button === 'add'}
					<button class=" w-full btn btn-primary mt-4 py-2 px-4"> Add Contact </button>
				{:else}
					<button class=" w-full btn btn-primary mt-4 py-2 px-4"> Update </button>
				{/if}
			</form>
		</div>
	</label>
</label>
