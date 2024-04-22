/** @type {import("prettier").Config} */
export default {
	trailingComma: 'all',
	tabWidth: 4,
	semi: true,
	singleQuote: true,
	printWidth: 80,
	bracketSpacing: true,
	plugins: ['prettier-plugin-astro'],
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro',
			},
		},
	],
};