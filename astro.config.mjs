import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

import sitemap from '@astrojs/sitemap';

import pagefind from "astro-pagefind";

export default defineConfig({
  site: 'https://zorzalrf.com',
  base: '/',
  trailingSlash: 'always',

  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex]
  },

  integrations: [sitemap(), pagefind()]
});