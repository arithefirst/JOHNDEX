<script lang="ts">
  import * as Dialog from '$lib/components/ui/dialog/index.js';
  import { Input } from '$lib/components/ui/input/index.js';
  import { Label } from '$lib/components/ui/label/index.js';
  import { superForm } from 'sveltekit-superforms';

  let { data } = $props();

  let open = $state(false);

  const { form, errors, enhance } = superForm(data.form, {
    onResult: (e) => (open = false),
  });
</script>

<Dialog.Root bind:open>
  <Dialog.Trigger class="text-text font-primary bg-primary h-fit cursor-pointer rounded-md px-2"
    >Add new John</Dialog.Trigger
  >
  <Dialog.Content>
    <form method="POST" use:enhance>
      <Dialog.Header>
        <Dialog.Title>Add new John</Dialog.Title>
      </Dialog.Header>

      <div class="flex flex-col items-center justify-center gap-2">
        <!-- Name feild -->
        <div class="w-11/12">
          <Label for="name">Name</Label>
          <div
            class="border-input flex h-9 w-full items-center justify-start gap-1 rounded-md border bg-transparent px-3 py-1 text-base shadow-sm transition-colors md:text-sm"
          >
            <span class="text-muted-foreground">John</span>
            <input
              class="flex-grow ring-0 outline-0"
              type="text"
              name="name"
              id="name"
              aria-invalid={$errors.name ? 'true' : undefined}
              bind:value={$form.name}
            />
          </div>
        </div>
        <!-- Invention Field -->
        <div class="w-11/12">
          <Label for="item">Invention</Label>
          <Input
            type="text"
            name="item"
            id="item"
            aria-invalid={$errors.item ? 'true' : undefined}
            bind:value={$form.item}
          />
        </div>
        <Dialog.Footer class={$errors.name || $errors.item ? 'mt-3' : ''}>
          <div class="mr-auto flex w-full flex-col">
            {#if $errors.name}<span class="w-full text-center text-red-500 md:w-auto md:text-left"
                >Name: {$errors.name}</span
              >{/if}
            {#if $errors.item}<span class="w-full text-center text-red-500 md:w-auto md:text-left"
                >Invention: {$errors.item}</span
              >{/if}
          </div>
          <button
            type="submit"
            class="text-text font-primary bg-primary h-fit cursor-pointer rounded-md px-2 py-1"
          >
            Submit
          </button>
        </Dialog.Footer>
      </div>
    </form>
  </Dialog.Content>
</Dialog.Root>
