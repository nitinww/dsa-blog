<script lang="ts">
  export let data;
  const categories: string[] = data.categories;
</script>

<section>
  <ul class="">
    {#each categories as category}
      <li class="flex justify-between">
        <a href={`/tags/${category}`} class="text-teal-700">{category}</a>
      </li>
    {/each}
  </ul>
</section>
