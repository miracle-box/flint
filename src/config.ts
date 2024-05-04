// Astro config does not support path aliases: https://github.com/withastro/astro/issues/9782
import { defineConfig } from './lib/config';

export const Config = defineConfig({
	i18n: {
		defaultLocale: 'en',
		locales: ['en', { path: 'zh', codes: ['zh', 'zh-CN', 'zh-TW'] }],
		fallback: {
			zh: 'en',
		},
	},
	site: {
		titleSeparator: ' | ',
		icon: {
			type: 'image/svg+xml',
			href: '/favicon.svg',
		},
	},
	navbar: {
		landing: {
			titleI18nKey: 'site.name',
			icon: 'https://avatars.githubusercontent.com/u/29345827?v=4',
			links: [
				{ labelI18nKey: 'custom.navbar.docs', href: '/docs' },
				{ labelI18nKey: 'custom.navbar.flint', href: '/' },
				{
					labelI18nKey: 'custom.navbar.github',
					href: 'https://github.com',
				},
			],
		},
	},
});
