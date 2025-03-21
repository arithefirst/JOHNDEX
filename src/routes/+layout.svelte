<script lang="ts">
  import '../app.css';
  import { ClerkProvider } from 'svelte-clerk';
  let { children } = $props();
</script>

<ClerkProvider>
  {@render children()}
</ClerkProvider>
