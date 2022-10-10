const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ addUtilities }) => {
	addUtilities({
		'.link': {
			'@apply text-brand underline': {},
			'@apply focus-visible:!outline-dotted focus-visible:!outline-1 focus-visible:!outline-brand': {},
		},
	})
})
