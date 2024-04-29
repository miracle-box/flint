import { defineCollection } from 'astro:content';
import { customI18nSchema } from '@custom/i18n';
import { getI18nSchema } from '../lib/i18n/schema';

const i18nCollection = defineCollection({
	type: 'data',
	schema: getI18nSchema(customI18nSchema),
});

export const collections = {
	i18n: i18nCollection,
};
