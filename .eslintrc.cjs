// Waiting for migrating to new flat config format...

module.exports = {
	extends: [
		'airbnb-base',
		'airbnb-typescript/base',
		'plugin:prettier/recommended',
	],
	parserOptions: {
		project: './tsconfig.json',
	},
	rules: {
		'import/prefer-default-export': 'off',
		// TypeScript handles this.
		'import/no-unresolved': 'off',
		'import/extensions': [
			'error',
			'never',
			{
				astro: 'always',
				css: 'always',
				json: 'always',
			},
		],
	},
	overrides: [
		{
			files: ['*.tsx'],
			extends: ['plugin:solid/typescript', 'plugin:jsx-a11y/recommended'],
		},
		{
			files: ['*.astro'],
			extends: [
				'plugin:astro/recommended',
				'plugin:astro/jsx-a11y-recommended',
			],
			parser: 'astro-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser',
				extraFileExtensions: ['.astro'],
			},
		},
	],
};
