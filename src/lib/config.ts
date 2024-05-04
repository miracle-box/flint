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
	navbarLinks: z
		.record(
			z
				.object({
					labelKey: z.string(),
					href: z.string(),
				})
				.array(),
		)
		.default({}),
});

export type FlintConfig = z.infer<typeof configSchema>;

export function defineConfig<T = FlintConfig>(config: T) {
	return configSchema.parse(config) as T;
}
