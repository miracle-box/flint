import { getEntry } from 'astro:content';
import { getPathByLocale } from 'astro:i18n';
import { Config } from '~/config';
import { logger } from '../logger';

export function getLocales(): string[] {
	return Config.i18n.locales.map((locale) =>
		typeof locale === 'string' ? locale : locale.path,
	);
}

export function getLocaleByCode(code?: string): string {
	if (!code) return Config.i18n.defaultLocale;
	return getPathByLocale(code) as string;
}

export async function useTranslation(locale: string) {
	// Default locale
	const defaultTrans = await getEntry('i18n', Config.i18n.defaultLocale);
	if (!defaultTrans)
		throw new Error(
			`Translation dictionary not found for your default locale "${Config.i18n.defaultLocale}".`,
		);

	// Fallback locale
	const fallbackLocale = Object.entries(Config.i18n.fallback).find(
		([l]) => l === locale,
	)?.[1];
	const fallbackTrans = fallbackLocale
		? await getEntry('i18n', fallbackLocale)
		: null;

	if (fallbackLocale && !fallbackTrans)
		logger.warn(
			`Fallback locale for "${locale}" is "${fallbackLocale}", but its translation is not found, default locale will be used.`,
		);

	// Current locale
	const trans = await getEntry('i18n', locale);
	if (!trans)
		logger.warn(
			`Translation dictionary not found for locale "${locale}", default locale will be used.`,
		);

	const strings = {
		...defaultTrans.data,
		...fallbackTrans?.data,
		...trans?.data,
	};

	return function t(key: string) {
		if (!strings[key])
			throw new Error(
				`Translation not found for "${key}" in locale "${locale}"`,
			);

		// Already checked
		return strings[key]!;
	};
}
