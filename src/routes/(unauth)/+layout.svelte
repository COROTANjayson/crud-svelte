<script>
	// @ts-nocheck

	import '../../app.css';
	import { supabase } from '$lib/supabase.js';
	import { user } from '$lib/store/authStore.js';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	user.set(supabase.auth.getUser());

	onMount(async () => {
		const getUser = await supabase.auth.getUser();
		if (getUser.data.user === null) {
			goto('login');
		} else {
      goto('contact');
			loading = true;
		}
	});
</script>

<div>
	<div class="h-screen mt-36">
		<slot />
	</div>
</div>
