
<script>
	import '../../app.css';
	import { supabase } from '../../supabase.js';
	import { user } from '../../store/authStore.js';
	import Navbar from '../../components/Navbar.svelte';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	
  $: loading = false;
  
	// @ts-ignore
  onMount(async () => {

		const getUser = await supabase.auth.getUser();
		console.log('User', getUser);
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
