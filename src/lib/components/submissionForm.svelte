<script lang="ts">
  import * as Dialog from '$lib/components/ui/dialog/index.js';
  import { enhance } from '$app/forms';
  import { superForm } from 'sveltekit-superforms';

  let { data } = $props();
  const { form, errors } = superForm(data.form);
</script>

<Dialog.Root>
  <Dialog.Trigger class="text-text font-primary bg-primary h-fit cursor-pointer rounded-md px-2"
    >Add new John</Dialog.Trigger
  >
  <Dialog.Content>
    <form method="POST" use:enhance>
      <Dialog.Header>
        <Dialog.Title>Add new John</Dialog.Title>
      </Dialog.Header>
      <p>
        John
        <input
          class="border-text w-16 border-b outline-0"
          type="text"
          name="name"
          id="name"
          aria-invalid={$errors.name ? 'true' : undefined}
          bind:value={$form.name}
        />

        , inventor of
        <input
          class="border-text w-16 border-b outline-0"
          type="text"
          name="item"
          id="item"
          aria-invalid={$errors.item ? 'true' : undefined}
          bind:value={$form.item}
        />
      </p>
      <Dialog.Footer class={$errors.name || $errors.item ? 'mt-3' : ''}>
        <div class="mr-auto flex w-full flex-col">
          {#if $errors.name}<span class="w-full text-center text-red-500 md:w-auto md:text-left"
              >Name: {$errors.name}</span
            >{/if}
          {#if $errors.item}<span class="w-full text-center text-red-500 md:w-auto md:text-left"
              >Invention: {$errors.item}</span
            >{/if}
        </div>
        <button type="submit" class="text-text font-primary bg-primary h-fit cursor-pointer rounded-md px-2 py-1">
          Submit
        </button>
      </Dialog.Footer>
    </form>
  </Dialog.Content>
</Dialog.Root>
