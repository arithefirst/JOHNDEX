<script lang="ts">
  import { dev } from '$app/environment';
  import { dark } from '@clerk/themes';
  import { injectAnalytics } from '@vercel/analytics/sveltekit';
  import { ClerkProvider } from 'svelte-clerk';
  import '../app.css';
  let { children } = $props();

  injectAnalytics({ mode: dev ? 'development' : 'production' });
</script>

<ClerkProvider
  appearance={{
    baseTheme: dark,
  }}
>
  {@render children()}
</ClerkProvider>
