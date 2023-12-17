import { error } from "@sveltejs/kit";

export async function load({ params }: any) {
  try {
    const post = await import(`../../../posts/neetcode-150/${params.slug}.md`);

    return {
      content: post.default,
      meta: post.metadata,
    };
  } catch (e) {
    throw error(404, `Could not find ${params.slug}`);
  }
}
