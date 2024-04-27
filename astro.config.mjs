import { defineConfig } from 'astro/config';
import solidJs from '@astrojs/solid-js';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	base: '/',
	trailingSlash: 'always',
	build: {
		format: 'directory',
	},
	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'zh'],
		fallback: {
			zh: 'en',
		},
		routing: {
			prefixDefaultLocale: true,
			redirectToDefaultLocale: true,
		},
	},
	integrations: [solidJs(), tailwind()],
});
