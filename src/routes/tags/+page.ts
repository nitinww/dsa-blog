export const prerender = true;
export const csr = false;

import type { Post } from "$lib/types";

export async function load({ fetch }: any) {
  const response = await fetch("/api/neetcode-150");
  const posts: Post[] = await response.json();

  const allCategories = posts.map((post) => post.categories);

  const categories = Array.from(new Set(allCategories.flat()));

  return {
    posts,
    categories,
  };
}
