import { z } from 'astro/zod';

const configSchema = z.object({
	/**
	 * This will be used in Astro config.
	 */
	i18n: z.object({
		defaultLocale: z.string(),
		locales: z.array(
			z.union([
				z.string(),
				z.object({
					path: z.string(),
					codes: z.string().array(),
				}),
			]),
		),
		fallback: z.record(z.string()),
	}),
	titleSeparator: z.string(),
});

export type FlintConfig = z.infer<typeof configSchema>;

export function defineConfig<T = FlintConfig>(config: T) {
	return configSchema.parse(config) as T;
}
