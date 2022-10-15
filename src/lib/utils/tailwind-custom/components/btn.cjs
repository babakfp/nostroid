const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ addComponents }) => {
	addComponents({
		'.btn-base': {
			'@apply h-input inline-flex items-center justify-center gap-3': {},
			'@apply border-2 border-transparent rounded': {},
			'@apply duration-150 ease-in-out': {},
			'@apply whitespace-nowrap select-none text-sm': {},
		},
		'.btn': {
			'@apply btn-base px-4': {},
			'@apply active:scale-y-90 origin-bottom': {},
		},

		'.btn-brand:not(.btn-outline)': {
			'@apply bg-brand text-white/90': {},
			'@apply hover:bg-brand-light focus:bg-brand-light': {},
		},
		'.btn-brand.btn-outline': {
			'@apply text-brand-light border-brand': {},
			'@apply hover:bg-brand hover:text-white/90': {},
			'@apply focus:bg-brand focus:text-white/90': {},
		},

		'.btn-gray:not(.btn-outline)': {
			'@apply bg-gray-700': {},
			'@apply hover:bg-gray-600 focus:bg-gray-600': {},
		},
		'.btn-gray.btn-outline': {
			'@apply text-gray-400 border-gray-500': {},
			'@apply hover:bg-gray-700 hover:text-gray-300 hover:border-transparent': {},
			'@apply focus:bg-gray-700 focus:text-gray-300 focus:border-transparent': {},
		},

		'.btn[disabled]': {
			'@apply pointer-events-none opacity-50': {},
		},
	})
})
