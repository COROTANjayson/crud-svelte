<script>
  import "../../app.css";
  import {supabase} from "../../supabase.js";
  import {user} from "../../store/authStore.js";

  user.set(supabase.auth.getUser())


</script>
<div >        
  <!-- {#if $user} -->
      <!-- <Navbar/> -->
     
      <div class="h-screen mt-36">
        <slot/>
      </div>
  <!-- {:else }
      <Auth/>
  {/if} -->
</div>