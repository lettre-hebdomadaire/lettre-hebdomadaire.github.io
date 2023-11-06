import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
    integrations: [mdx()],
    site: "https://lh.rezel.net",
    redirects: {
        "/fr/": "/",
    },
    markdown: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeKatex]
	}
});
