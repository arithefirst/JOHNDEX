<script lang="ts">
  import { BadgeInfo } from 'lucide-svelte';
  import * as Tooltip from '$lib/components/ui/tooltip/index.js';

  type Props = {
    name: string;
    item: string;
    uploader: string;
    createdAt: Date;
  };

  const { name, item, uploader, createdAt }: Props = $props();
</script>

<div
  class="inset-shadow-johnbox relative flex h-fit min-h-[100px] w-full flex-col items-center justify-center rounded-xl bg-[#142E38]"
>
  <h2 class="text-center text-4xl">John {name}</h2>
  <hr class="text-text border-text w-2/3 border" />
  <p class="text-center text-2xl">Creator of {item}</p>

  <Tooltip.Provider>
    <Tooltip.Root>
      <Tooltip.Trigger class="absolute right-2 bottom-2 cursor-pointer"><BadgeInfo /></Tooltip.Trigger>
      <Tooltip.Content>
        <p>Created by <span class="font-bold">{uploader}</span></p>
        <p>
          At <span class="font-bold"
            >{createdAt.toLocaleDateString('en', {
              hour: '2-digit',
              minute: '2-digit',
            })}</span
          >
        </p>
      </Tooltip.Content>
    </Tooltip.Root>
  </Tooltip.Provider>
</div>
