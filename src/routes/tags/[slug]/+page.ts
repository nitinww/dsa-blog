export const prerender = true;
export const csr = false;

import type { Post } from "$lib/types";

export async function load({ params, fetch }: any) {
  const response = await fetch("/api/archive");
  const posts: Post[] = await response.json();

  const filteredPosts = posts.filter((post: Post) =>
    post.tags.includes(params.slug)
  );
  return { filteredPosts };
}
