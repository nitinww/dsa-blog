import type { Post } from "$lib/types";

export async function load({ params, fetch }: any) {
  const response = await fetch("/api/neetcode-150");
  const posts: Post[] = await response.json();

  const filteredPosts = posts.filter((post: Post) =>
    post.categories.includes(params.slug)
  );
  return { filteredPosts };
}
