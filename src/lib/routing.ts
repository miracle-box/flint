import type { GetStaticPaths, Props } from 'astro';
import { getLocales, type Locale } from '~/lib/i18n/utils';

export function getLocalizedRoutes(
	// Receive an function for generating props
	propsGenerator: (locale: Locale) => Props = () => ({}),
) {
	return (() => {
		const locales = getLocales();
		return locales.map((locale) => ({
			params: { locale },
			props: propsGenerator(locale),
		}));
	}) satisfies GetStaticPaths;
}
