import { z } from 'astro/zod';
import type { CustomI18nSchema } from '~/lib/i18n/schema';

export const customI18nSchema: CustomI18nSchema = {
	'custom.custom': z.string(),
};
