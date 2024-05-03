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
	icon: {
		type: 'image/svg+xml',
		href: '/favicon.svg',
	},
	navbarLinks: {
		landing: [
			{ labelKey: 'custom.navbar.docs', href: '/docs' },
			{ labelKey: 'custom.navbar.flint', href: '/' },
			{ labelKey: 'custom.navbar.github', href: 'https://github.com' },
		],
	},
} as const satisfies FlintConfig);
