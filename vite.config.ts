import { defineConfig } from 'vite'
import mdx from '@mdx-js/rollup'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  plugins: [
    mdx(),
    react(),
    tailwindcss(),
    viteStaticCopy({
      targets: [
        {
          src: 'node_modules/@gov-design-system-ce/icons/lib/components/*',
          dest: 'assets/icons/components',
          rename: { stripBase: true },
        },
        {
          src: 'node_modules/@gov-design-system-ce/icons/lib/complex/*',
          dest: 'assets/icons/complex',
          rename: { stripBase: true },
        },
        {
          src: 'node_modules/@gov-design-system-ce/icons/lib/colored/*',
          dest: 'assets/icons/colored',
          rename: { stripBase: true },
        },
        {
          src: 'node_modules/@gov-design-system-ce/fonts/lib/*.woff2',
          dest: 'assets/fonts',
          rename: { stripBase: true },
        },
      ],
    }),
  ],
})
