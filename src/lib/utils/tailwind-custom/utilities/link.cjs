const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ addUtilities }) => {
	addUtilities({
		'.link': {
			'@apply text-brand underline': {},
			'@apply inline-block duration-150 ease-in-out origin-bottom-left hover:scale-[.97]': {},
			'@apply focus-visible:!outline-dotted focus-visible:!outline-1 focus-visible:!outline-brand': {},
		},
	})
})
