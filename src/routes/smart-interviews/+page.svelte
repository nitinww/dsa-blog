<script lang="ts">
  import { formatDate } from "$lib/utils";
  export let data;
</script>

<section>
  <ul class="">
    {#each data.posts as post}
      <li class="flex justify-between">
        <a href={`/smart-interviews/${post.slug}`} class="text-teal-700"
          >{post.title}</a
        >
        <p class="text-teal-500">{formatDate(post.date)}</p>
      </li>
    {/each}
  </ul>
</section>
