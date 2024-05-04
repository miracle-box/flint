import { z } from 'astro/zod';

const i18nLangSchema = z.object({
	'lang.label': z.string(),
});

const i18nSiteSchema = z
	.object({
		'site.name': z.string(),
		'site.description': z.string(),
	})
	.partial();

const i18nNavbarSchema = z
	.object({
		'navbar.theme': z.string(),
		'navbar.language': z.string(),
		'navbar.menu': z.string(),
		'navbar.menu.close': z.string(),
	})
	.partial();

const i18nThemeSchema = z
	.object({
		'theme.light': z.string(),
		'theme.dark': z.string(),
		'theme.system': z.string(),
	})
	.partial();

export type CustomI18nSchema = Record<string, z.ZodString>;
export function getI18nSchema(customSchema: CustomI18nSchema) {
	const partialCustomSchema = z.object({}).extend(customSchema).partial();

	return z
		.object({})
		.merge(i18nLangSchema)
		.merge(i18nSiteSchema)
		.merge(i18nNavbarSchema)
		.merge(i18nThemeSchema)
		.merge(partialCustomSchema);
}
