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

export type CustomI18nSchema = Record<string, z.ZodString>;
export function getI18nSchema(customSchema: CustomI18nSchema) {
	return z
		.object({})
		.merge(i18nLangSchema)
		.merge(i18nSiteSchema)
		.extend(customSchema);
}
