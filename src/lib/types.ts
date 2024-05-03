import type { Config } from '~/config';

export type LayoutBaseProps = {
	title: string;
	description: string;
	lightTheme?: string;
	darkTheme?: string;
};

export type BlankLayoutProps = LayoutBaseProps & {
	navLinksKey: keyof typeof Config.navbarLinks;
};
