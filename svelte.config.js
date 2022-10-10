import preprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-auto'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
		alias: {
      $comps: 'src/lib/comps',
      $parts: 'src/lib/parts',
      $store: 'src/lib/store',
      $utils: 'src/lib/utils',
      $styles: 'src/lib/styles',
    },
  },
  preprocess: [
    preprocess({ postcss: true }),
  ],
}

export default config
