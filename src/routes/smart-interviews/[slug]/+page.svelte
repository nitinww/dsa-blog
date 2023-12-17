<script lang="ts">
  import { formatDate } from "$lib/utils";

  export let data;
</script>

<article class="w-full">
  <div class="prose-lg my-4">
    <h1>{data.meta.title}</h1>
    <p>Published at {formatDate(data.meta.date)}</p>
    <svelte:component this={data.content} />
  </div>
</article>
