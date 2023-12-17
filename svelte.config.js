import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { escapeSvelte, mdsvex } from "mdsvex";
import shiki from "shiki";

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
  extensions: [".svelte.md", ".md", ".svx"],
  highlight: {
    highlighter: async (code, lang = "text") => {
      const highlighter = await shiki.getHighlighter({ theme: "dracula" });
      const html = escapeSvelte(highlighter.codeToHtml(code, { lang }));
      return `{@html \`${html}\` }`;
    },
  },
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ".md", ".svelte.md"],
  preprocess: [mdsvex(mdsvexOptions), vitePreprocess()],

  kit: {
    adapter: adapter({ precompress: true }),
  },
};

export default config;
