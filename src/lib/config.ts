import { z } from 'astro/zod';

const configSchema = z.object({
	/**
	 * This will be used in Astro config.
	 */
	i18n: z.object({
		defaultLocale: z.string().default('en'),
		locales: z
			.array(
				z.union([
					z.string(),
					z.object({
						path: z.string(),
						codes: z.string().array(),
					}),
				]),
			)
			.default(['en']),
		fallback: z.record(z.string()).default({}),
	}),
	titleSeparator: z.string().default(' | '),
	icon: z
		.object({
			type: z.string(),
			href: z.string(),
		})
		.default({
			type: 'image/svg+xml',
			href: '/favicon.svg',
		}),
	navbar: z
		.record(
			z.object({
				titleI18nKey: z.optional(z.string().default('site.name')),
				showTitle: z.optional(z.boolean().default(true)),
				icon: z.optional(z.string().default('/favicon.svg')),
				showIcon: z.optional(z.boolean().default(true)),
				links: z
					.object({
						labelI18nKey: z.string(),
						href: z.string(),
					})
					.array()
					.default([]),
			}),
		)
		.default({}),
});

export type FlintConfig = z.infer<typeof configSchema>;

export function defineConfig(config: FlintConfig) {
	return configSchema.parse(config);
}
