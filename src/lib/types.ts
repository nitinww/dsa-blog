export type Tags = "sveltekit" | "svelte";

export type Post = {
  title: string;
  slug: string;
  date: string;
  tags: Tags[];
};
