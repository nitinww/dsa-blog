<script lang="ts">
  import { formatDate } from "$lib/utils";

  export let data;
</script>

<article class="w-full">
  <ul class="space-x-2">
    {#each data.meta.tags as tag}
      <a href={`/tags/${tag}`} class="">&num;{tag}</a>
    {/each}
  </ul>

  <div class="prose-lg my-4">
    <h1>{data.meta.title}</h1>
    <p>Published at {formatDate(data.meta.date)}</p>
    <svelte:component this={data.content} />
  </div>
</article>
