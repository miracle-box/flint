/** @type {import("prettier").Config} */
export default {
	trailingComma: 'all',
	tabWidth: 4,
	semi: true,
	singleQuote: true,
	printWidth: 80,
	bracketSpacing: true,
	htmlWhitespaceSensitivity: 'ignore',
	plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro',
			},
		},
	],
};
