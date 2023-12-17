<script>
  import "../app.css";
  import Header from "./header.svelte";
</script>

<!-- <main class="min-h-screen mx-auto">
  <div class="mx-auto max-w-6xl">
    <Header />
  </div>
  <div class="border-b border-purple-200 my-4" />
  <div class="max-w-6xl mx-auto">
    <slot />
  </div>
</main> -->

<main class="min-h-screen mx-auto max-w-6xl">
  <Header />
  <div class="border-b border-teal-500 my-4" />
  <slot />
</main>
