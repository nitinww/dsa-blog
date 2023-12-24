<script lang="ts">
  export let data;
  const tags: string[] = data.tags;
</script>

<section>
  <ul class="">
    {#each tags as tag}
      <li class="flex justify-between">
        <a href={`/tags/${tag}`} class="text-teal-700">{tag}</a>
      </li>
    {/each}
  </ul>
</section>
