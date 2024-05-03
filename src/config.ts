// Astro config does not support path aliases: https://github.com/withastro/astro/issues/9782
import type { FlintConfig } from './lib/config';
import { defineConfig } from './lib/config';

export const Config = defineConfig({
	i18n: {
		defaultLocale: 'en',
		locales: ['en', { path: 'zh', codes: ['zh', 'zh-CN', 'zh-TW'] }],
		fallback: {
			zh: 'en',
		},
	},
	titleSeparator: ' | ',
} as const satisfies FlintConfig);
