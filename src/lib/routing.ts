import type { GetStaticPathsItem, Props } from 'astro';
import { getRelativeLocaleUrl } from 'astro:i18n';
import { getLocales } from '~/lib/i18n/utils';

export function isExternalLink(link: string) {
	// If a link starts with '/', we consider it as an internal link
	return !link.startsWith('/');
}

export function normalizeLink(locale: string, link: string) {
	return isExternalLink(link) ? link : getRelativeLocaleUrl(locale, link);
}

export function getLocalizedPathItems() {
	const locales = getLocales();

	return locales.map((locale) => ({
		params: { locale },
		props: {},
	})) satisfies GetStaticPathsItem[];
}

export function addParamForPathItem<
	TItem extends GetStaticPathsItem,
	TParams extends GetStaticPathsItem['params'],
>(item: TItem, paramsGenerator: (item: TItem) => TParams) {
	return {
		...item,
		params: { ...item.params, ...paramsGenerator(item) },
	} satisfies GetStaticPathsItem;
}

export function addPropForPathItem<
	TItem extends GetStaticPathsItem,
	TProps extends Props,
>(item: TItem, propsGenerator: (item: TItem) => TProps) {
	return {
		...item,
		props: { ...item.props, ...propsGenerator(item) },
	} satisfies GetStaticPathsItem;
}
