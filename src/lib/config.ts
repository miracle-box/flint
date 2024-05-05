import { z } from 'astro/zod';

const i18nConfigSchema = z.object({
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
});
export type I18nConfig = z.infer<typeof i18nConfigSchema>;
export type UserI18nConfig = Partial<I18nConfig>;

const siteConfigSchema = z.object({
	titleSeparator: z.string().default(' | '),
	icon: z.object({
		type: z.string().default('image/svg+xml'),
		href: z.string().default('/favicon.svg'),
	}),
});
export type SiteConfig = z.infer<typeof siteConfigSchema>;
export type UserSiteConfig = Partial<SiteConfig>;

const navbarConfigSchema = z.object({
	titleI18nKey: z.string().optional(),
	showTitle: z.boolean().default(true),
	icon: z.string().optional(),
	showIcon: z.boolean().default(true),
	titleLink: z.string().optional(),
	links: z
		.object({
			labelI18nKey: z.string(),
			href: z.string(),
		})
		.array()
		.default([]),
});
export type NavbarConfig = z.infer<typeof navbarConfigSchema>;
export type UserNavbarConfig = Partial<NavbarConfig>;

const configSchema = z.object({
	/**
	 * This will be used in Astro config.
	 */
	i18n: i18nConfigSchema,
	site: siteConfigSchema,
	navbar: z.record(navbarConfigSchema).default({}),
});
export type FlintConfig = z.infer<typeof configSchema>;
export type UserFlintConfig = {
	i18n?: UserI18nConfig;
	site?: UserSiteConfig;
	navbar?: Record<string, UserNavbarConfig>;
};

export function defineConfig(config: UserFlintConfig): FlintConfig {
	return configSchema.parse(config);
}
