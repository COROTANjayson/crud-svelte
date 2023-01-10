<script>
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';


	/** @type {import('./$types').ActionData} */

	export let form;

	let email = '';
	let password = '';
	let isError = false;
	$: isRegister = false;
	
	$: {
		if (form?.register) {
			isRegister = true;
			setTimeout(() => {
				goto('/login');
			}, 2000);
		}
	}
	$: {
		if (form?.error) {
			isError = true;
		}
	}
	$: {
		if(email && password) {
			isError = false;
		}
	}
</script>

<div class="bg-grey-lighter h-full flex flex-col">
	<form method="POST" use:enhance action="?/register">
		<div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
			<div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
				<h1 class="mb-8 text-3xl text-center">Sign up</h1>
				{#if isRegister}
					<div
						class="w-full bg-green-200 p-3 rounded-lg mb-3 flex flex-col justify-center items-center"
					>
						<p>Successfully registered</p>
						<p class="text-xs">redirecting...</p>
					</div>
				{/if}
				{#if isError}
					<div
						class="w-full bg-red-200 p-3 rounded-lg mb-3 flex flex-col justify-center items-center"
					>
						<p>{form?.message}</p>
					</div>
				{/if}

				<input
					type="text"
					class="input input-bordered w-full max-w-xs p-3 mb-4"
					name="email"
					placeholder="Email"
					bind:value={email}
				/>
				<input
					type="password"
					class="input input-bordered w-full max-w-xs p-3 mb-4"
					name="password"
					placeholder="Password"
					bind:value={password}
				/>
				<!-- <input
					type="password"
					class="block border border-grey-light w-full p-3 rounded mb-4"
					name="confirm_password"
					placeholder="Confirm Password"
				/> -->
				<button type="submit" class="w-full btn btn-primary">Create Account</button>
			</div>

			<div class="text-grey-dark mt-6">
				Already have an account?
				<a class="no-underline border-b border-blue text-blue" href="/login"> Log in </a>.
			</div>
		</div>
	</form>
</div>
