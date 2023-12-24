<script lang="ts">
  import { formatDate } from "$lib/utils";
  export let data;
</script>

<section>
  <ul class="">
    {#each data.filteredPosts as post}
      <li class="flex justify-between">
        <a href={`/archive/${post.slug}`} class="text-teal-700">{post.title}</a>
        <p class="text-teal-500">{formatDate(post.date)}</p>
      </li>
    {/each}
  </ul>
</section>
