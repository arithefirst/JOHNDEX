<script lang="ts">
  import '../app.css';
  let { children } = $props();
</script>

<main class="font-primary text-text min-h-screen bg-[#081216]">
  {@render children()}
</main>
