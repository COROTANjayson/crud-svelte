<script>
	import { goto } from '$app/navigation';
	import { enhance } from '$app/forms';
	import { supabase } from '../../../supabase.js';
	import {user} from '../../../store/authStore'
	$: email = '';
	$: password = '';
	$: {
		if(password !==''){
			login = true
		}
	}
	$:login = true;
	async function handleLogin() {
		try {
			const { data, error } = await supabase.auth.signInWithPassword({
				email: email,
				password: password
			});
			if (data.user !== null) {
				login = true;
				// @ts-ignore
				
				goto('/contact');
			} else {
				login = false;
			}
		} catch (error) {
			console.log(error);
		}
	}
</script>

<form method="POST" on:submit|preventDefault={handleLogin}>
	<div class="bg-grey-lighter h-full flex flex-col">
		<div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
			<div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
				<h1 class="mb-8 text-3xl text-center">Login</h1>
				{#if !login}
					<div class="w-full bg-red-200 p-3 rounded-lg mb-3 flex justify-center">
						<p class="error">Invalid Credentials</p>
					</div>
				{/if}
				<input
					type="text"
					class="block border border-grey-light w-full p-3 rounded mb-4"
					name="email"
					placeholder="Email"
					bind:value={email}
				/>

				<input
					type="password"
					class="block border border-grey-light w-full p-3 rounded mb-4"
					name="password"
					placeholder="Password"
					bind:value={password}
				/>
				<button
					type="submit"
					class="w-full text-center py-3 rounded bg-blue-500  text-white hover:bg-green-dark focus:outline-none my-1"
					>Login</button
				>
			</div>

			<div class="text-grey-dark mt-6">
				Create account
				<a class="no-underline border-b border-blue text-blue" href="/register"> here </a>
			</div>
		</div>
	</div>
</form>
