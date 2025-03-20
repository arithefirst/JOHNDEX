<script lang="ts">
  import '../app.css';
  import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from 'svelte-clerk';
  import { dark } from '@clerk/themes';
  let { children } = $props();
</script>

<ClerkProvider
  appearance={{
    baseTheme: dark,
  }}
>
  <main class="font-primary text-text min-h-screen bg-[#081216]">
    {@render children()}
  </main>
  <div class="absolute top-4 left-4 flex">
    <SignedIn>
      <UserButton
        appearance={{
          baseTheme: dark,
          elements: {
            userButtonAvatarBox: {
              width: '3rem',
              height: '3rem',
            },
          },
        }}
      />
    </SignedIn>
    <SignedOut>
      <SignInButton></SignInButton>
    </SignedOut>
  </div>
</ClerkProvider>
