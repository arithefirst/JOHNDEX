<script lang="ts">
  import { dark } from '@clerk/themes';
  import { SignedIn, SignedOut, SignInButton, UserButton } from 'svelte-clerk';
  import JohnBox from '$lib/components/johnBox.svelte';
  import SubmissionForm from '$lib/components/submissionForm.svelte';
  import { UserIcon } from 'lucide-svelte';
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
    <h1 class="the-freaky-ibm-font pt-20 text-center text-4xl md:text-7xl">
      JO<span class="flicker-slow">H</span>N<span class="flicker-fast">D</span>EX
    </h1>
    <hr class="title-hr border-text w-full border-t-2" />
  </div>
  <div class="mx-auto my-4 grid w-5/6 grid-cols-1 gap-2 md:mt-12 md:w-3/4 md:grid-cols-3">
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
      <div class="bg-primary relative size-8 overflow-hidden rounded-full">
        <UserIcon
          color="var(--color-text)"
          class="absolute top-1/2 left-1/2 size-8.5 -translate-x-1/2 -translate-y-1/2 "
        />
        <UserButton
          appearance={{
            baseTheme: dark,
            elements: {
              userButtonAvatarBox: {
                width: '100%',
                height: '100%',
              },
            },
          }}
        />
      </div>
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
