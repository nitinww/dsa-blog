export const prerender = true;
export const csr = false;

import type { Post } from "$lib/types";

export async function load({ fetch }: any) {
  const response = await fetch("/api/archive");
  const posts: Post[] = await response.json();

  const allTags = posts.map((post) => post.tags);

  const tags = Array.from(new Set(allTags.flat()));

  return {
    posts,
    tags,
  };
}
