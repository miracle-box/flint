import { defineConfig } from 'astro/config';
import solidJs from '@astrojs/solid-js';
import tailwind from '@astrojs/tailwind';

// Astro config does not support path aliases: https://github.com/withastro/astro/issues/9782
import { Config } from './src/config';

// https://astro.build/config
export default defineConfig({
	base: '/',
	trailingSlash: 'always',
	build: {
		format: 'directory',
	},
	i18n: {
		routing: {
			prefixDefaultLocale: true,
			redirectToDefaultLocale: true,
		},
		...Config.i18n,
	},
	integrations: [solidJs(), tailwind()],
});
