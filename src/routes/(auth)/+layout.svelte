
<script>
// @ts-nocheck

	import '../../app.css';
	import { supabase } from '$lib/supabase.js';
	import { user } from '$lib/store/authStore.js';
	import Navbar from '$lib/components/Navbar.svelte';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	
  $: loading = false;
  
  onMount(async () => {

		const getUser = await supabase.auth.getUser();
		if (getUser.data.user === null) {
			goto('login');
		} else {
			loading = true;
		}
	});

</script>

<div>
	
	{#if !loading}
		<div></div>
	{:else}
		<Navbar />
		<div class="pt-20">
			<slot />
		</div>
	{/if}


</div>
