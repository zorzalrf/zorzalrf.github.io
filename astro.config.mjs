import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://zorzalrf.github.io',
  base: '/',
  trailingSlash: 'always',

  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex]
  },

  integrations: [sitemap()]
});