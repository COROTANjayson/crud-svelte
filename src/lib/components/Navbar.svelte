<script>
	import { supabase } from '../supabase.js';
	import { nav } from '../store/store';
	import { goto } from '$app/navigation';

	const logout = () => {
		console.log('logging out');
		supabase.auth.signOut();
		goto('/login')
	};

	let selectNav = $nav;
	$: {
		selectNav = $nav;
	}
</script>


	<nav
		class="fixed w-full flex flex-wrap items-center justify-between py-4 bg-blue-800 text-white hover:text-gray-700 focus:text-gray-700 shadow-lg"
	>
		<div class="container-fluid w-full flex flex-wrap items-center justify-between px-6">
			<div class="container-fluid">
				<a
					class="flex items-center text-gray-900 hover:text-gray-900 focus:text-gray-900 mt-2 lg:mt-0 mr-1"
					href="/contact"
				>
					<span class="font-medium text-white">Hello World</span>
				</a>
			</div>
			<button
				type="submit"
				class="btn btn-accent py-2 px-4 text-white"
				on:click={logout}
			>
				Log Out
			</button>
		</div>
	</nav>


