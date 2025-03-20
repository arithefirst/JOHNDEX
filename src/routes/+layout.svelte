<script lang="ts">
  import '../app.css';
  import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from 'svelte-clerk';
  import { dark } from '@clerk/themes';
  let { children } = $props();
</script>

<ClerkProvider>
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
      <SignInButton
        mode="modal"
        appearance={{
          baseTheme: dark,
        }}
      >
        <div class="text-text font-primary text cursor-pointer rounded-md bg-[#137190] px-2">Sign In</div>
      </SignInButton>
    </SignedOut>
  </div>
</ClerkProvider>
