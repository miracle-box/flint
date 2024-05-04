import type { GetStaticPaths, Props } from 'astro';
import { getRelativeLocaleUrl } from 'astro:i18n';
import { getLocales } from '~/lib/i18n/utils';

export function isExternalLink(link: string) {
	// If a link starts with '/', we consider it as an internal link
	return !link.startsWith('/');
}

export function normalizeLink(locale: string, link: string) {
	return isExternalLink(link) ? link : getRelativeLocaleUrl(locale, link);
}

export function getLocalizedRoutes(
	// Receive an function for generating props
	propsGenerator: (locale: string) => Props = () => ({}),
) {
	return (() => {
		const locales = getLocales();
		return locales.map((locale) => ({
			params: { locale },
			props: propsGenerator(locale),
		}));
	}) satisfies GetStaticPaths;
}
