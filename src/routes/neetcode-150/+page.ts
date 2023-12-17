export const prerender = true;
export const csr = false;

import type { Post } from "$lib/types";

export async function load({ fetch }: any) {
  const response = await fetch("/api/neetcode-150");
  const posts: Post[] = await response.json();
  return { posts };
}
