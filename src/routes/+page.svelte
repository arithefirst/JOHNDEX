<script lang="ts">
  import { dark } from '@clerk/themes';
  import { SignedIn, SignedOut, SignInButton, UserButton } from 'svelte-clerk';
  import SubmissionForm from '$lib/components/submissionForm.svelte';
  let { data } = $props();
</script>

<svelte:head>
  <title>The JOHNDEX | The John Database</title>
  <meta name="description" content="The greatest database of Johns in history" />
</svelte:head>

<main class="font-primary text-text min-h-screen bg-[#081216]">
  <div class="mx-auto w-fit">
    <h1 class="pt-10 text-center text-7xl">JOHNDEX</h1>
    <hr class="w-full border" />
  </div>
</main>

<div class="absolute top-4 left-4 flex">
  <SignedIn>
    <div class="flex items-center gap-2">
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
      <SubmissionForm {data} />
    </div>
  </SignedIn>
  <SignedOut>
    <SignInButton
      mode="modal"
      appearance={{
        baseTheme: dark,
      }}
    >
      <div class="text-text font-primary text bg-primary cursor-pointer rounded-md px-2 py-1">Sign In</div>
    </SignInButton>
  </SignedOut>
</div>
