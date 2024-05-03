import { getEntry } from 'astro:content';
import { getPathByLocale } from 'astro:i18n';
import type { FlintConfig } from '~/lib/config';
import { Config } from '~/config';
import { logger } from '../logger';

type ExtractLocalesFromConfig<
	T extends FlintConfig['i18n']['locales'][number],
> = T extends string ? T : T extends { path: string } ? T['path'] : never;
type LocalesConfigLiteral = (typeof Config)['i18n']['locales'];

export type Locale = ExtractLocalesFromConfig<LocalesConfigLiteral[number]>;

export function getLocales(): Locale[] {
	return Config.i18n.locales.map((locale) =>
		typeof locale === 'string' ? locale : locale.path,
	);
}

export function getLocaleByCode(code?: string): Locale {
	if (!code) return Config.i18n.defaultLocale;
	return getPathByLocale(code) as Locale;
}

export async function useTranslation(locale: string) {
	const fallbackTrans = await getEntry('i18n', Config.i18n.defaultLocale);
	if (!fallbackTrans)
		throw new Error(
			`Translation dictionary not found for your default locale "${Config.i18n.defaultLocale}".`,
		);

	const trans = await getEntry('i18n', locale);
	if (!trans)
		logger.warn(
			`Translation dictionary not found for locale "${locale}", default locale will be used.`,
		);

	const strings = { ...trans?.data, ...fallbackTrans.data };

	return function t(key: string) {
		if (!strings[key])
			throw new Error(
				`Translation not found for "${key}" in locale "${locale}"`,
			);

		// Already checked
		return strings[key]!;
	};
}
