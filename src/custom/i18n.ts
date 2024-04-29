import type { CustomI18nSchema } from '@lib/i18n/schema';
import { z } from 'astro/zod';

export const customI18nSchema: CustomI18nSchema = {
	'custom.custom': z.string(),
};
