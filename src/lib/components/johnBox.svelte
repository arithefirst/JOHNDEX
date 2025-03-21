<script lang="ts">
  type Props = {
    name: string;
    item: string;
  };

  const { name, item }: Props = $props();
</script>

<div
  class="inset-shadow-johnbox flex h-[100px] w-full flex-col items-center justify-center rounded-xl bg-[#142E38]"
>
  <h2 class="text-4xl">John {name}</h2>
  <hr class="text-text border-text w-2/3 border" />
  <p class="text-2xl">Creator of {item}</p>
</div>
