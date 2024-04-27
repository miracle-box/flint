// Astro config does not support path aliases: https://github.com/withastro/astro/issues/9782
import type { FlintConfig } from './lib/config';
import { defineConfig } from './lib/config';

export const Config = defineConfig({
	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'zh', { path: 'french', codes: ['fr'] }],
		fallback: {
			zh: 'en',
		},
	},
} as const satisfies FlintConfig);
