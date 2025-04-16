<script lang="ts">
  import * as Popover from '$lib/components/ui/popover/index.js';
  import { BadgeInfo } from 'lucide-svelte';
  import { onMount } from 'svelte';
  import { blur } from 'svelte/transition';

  type Props = {
    name: string;
    item: string;
    uploader: string;
    createdAt: Date;
    i: number;
  };

  const { name, item, uploader, createdAt, i }: Props = $props();
  let loaded: boolean = $state(false);
  onMount(() => (loaded = true));
</script>

{#if loaded}
  <div
    class="inset-shadow-johnbox relative flex h-fit min-h-[100px] w-full flex-col items-center justify-center rounded-xl bg-[#142E38]"
    in:blur={{ delay: 150 * i }}
  >
    <h2 class="text-center text-4xl">John {name}</h2>
    <hr class="text-text border-text w-2/3 border" />
    <p class="text-center text-2xl">Creator of {item}</p>

    <Popover.Root>
      <Popover.Trigger class="absolute right-2 bottom-2 cursor-pointer"><BadgeInfo /></Popover.Trigger>
      <Popover.Content class="bg-primary font-primary h-fit w-fit border-0 p-2 leading-tight font-extralight">
        <p>Created by <span class="font-bold">{uploader}</span></p>
        <p>
          At <span class="font-bold"
            >{createdAt.toLocaleDateString('en', {
              hour: '2-digit',
              minute: '2-digit',
            })}</span
          >
        </p>
      </Popover.Content>
    </Popover.Root>
  </div>
{/if}
