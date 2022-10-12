const colors = require('tailwindcss/colors')
const addons = require('tailwindcss-addons')
const customAddons = require('./src/lib/utils/tailwind-custom/index.cjs')

/** @type {import('tailwindcss').Config} */
const config = {
	presets: [addons.presets],
	content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
			spacing: {
				26: '6.5rem',
				input: '2.5rem',
			},
			colors: {
				gray: colors.neutral,
				brand: {
					light: colors.cyan['500'],
					DEFAULT: colors.cyan['600'],
				},
			},
		},
		container: {
			center: true,
			padding: '1rem',
		},
		borderRadius: {
			none: '0',
			DEFAULT: '.5rem',
			full: '9999px',
		},
		fontFamily: {
			base: [ '"Inter"' ],
      code: [ '"Dank Mono", "MonoLisa", "Inter"' ],
		},
		fontWeight: {
      regular: 400,
      medium: 500,
      semibold: 600,
    },
  },
  plugins: [
		require('@tailwindcss/line-clamp'),
		...customAddons,
		addons.base,
		addons.utilities.dir,
		addons.utilities.drag,
		addons.utilities.flip,
		addons.utilities.hideShow,
		addons.utilities.inputResets,
		addons.utilities.insetCenter,
		addons.utilities.overflowUnset,
		addons.variants.notVariants,
	],
}

module.exports = config
