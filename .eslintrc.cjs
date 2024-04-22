// Waiting for migrating to new flat config format...

module.exports = {
	extends: [
		'airbnb-base',
		'airbnb-typescript/base',
		'plugin:astro/recommended',
		'plugin:astro/jsx-a11y-recommended',
		'plugin:prettier/recommended',
	],
	parserOptions: {
		project: './tsconfig.json',
	},
	overrides: [
		{
			files: ['*.astro'],
			parser: 'astro-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser',
				extraFileExtensions: ['.astro'],
			},
		},
	],
};
