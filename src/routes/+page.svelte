<script lang="ts">
  import { dark } from '@clerk/themes';
  import { SignedIn, SignedOut, SignInButton, UserButton } from 'svelte-clerk';
  import JohnBox from '$lib/components/johnBox.svelte';
  import SubmissionForm from '$lib/components/submissionForm.svelte';
  let { data } = $props();

  let windowWidth: number = $state(0);

  function generateAnimGroup(i: number) {
    if (windowWidth < 768) {
      return i + 1;
    }
    return Math.ceil((i + 1) / 3);
  }
</script>

<svelte:window bind:innerWidth={windowWidth} />

<svelte:head>
  <title>The JOHNDEX | The John Database</title>
  <meta name="description" content="The greatest database of Johns in history" />
</svelte:head>

<main class="font-primary text-text min-h-screen bg-[#081216]">
  <div class="mx-auto w-fit">
    <h1 class="the-freaky-ibm-font pt-20 text-center text-4xl md:text-7xl">JOHNDEX</h1>
    <hr class="w-full border-1 border-[#AFB8BB]" />
  </div>
  <div class="mx-auto mt-12 mb-4 grid w-3/4 grid-cols-1 gap-2 md:grid-cols-3">
    {#each data.johns as john, i}
      <JohnBox
        i={generateAnimGroup(i)}
        name={john.name}
        item={john.item}
        createdAt={john.createdAt}
        uploader={john.uploader}
      />
    {/each}
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
