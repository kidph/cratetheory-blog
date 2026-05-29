import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import mdx from '@astrojs/mdx'

export default defineConfig({
  site: 'https://www.cratetheory.xyz',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    mdx(),
  ],
  markdown: {
    shikiConfig: { theme: 'one-dark-pro' },
  },
})
