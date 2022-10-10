const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ addComponents }) => {
	addComponents({
		'.btn-base': {
			'@apply h-input inline-flex items-center justify-center gap-3': {},
			'@apply border-2 border-transparent border-opacity-80 rounded': {},
			'@apply duration-150 ease-in-out': {},
			'@apply whitespace-nowrap select-none text-sm': {},
		},
		'.btn': {
			'@apply btn-base px-4': {},
			'@apply duration-150 ease-in-out': {},
			'@apply active:scale-x-95 hover:border-opacity-100 focus:border-opacity-100': {},
		},
		'.btn-brand:not(.btn-outline)': {
			'@apply bg-brand text-white hover:bg-brand focus:bg-brand': {},
		},
		'.btn-brand.btn-outline': {
			'@apply text-brand border-brand hover:text-white hover:bg-brand focus:text-white focus:bg-brand': {},
		},
		'.btn[disabled]': {
			'@apply pointer-events-none opacity-50': {},
		},
	})
})
