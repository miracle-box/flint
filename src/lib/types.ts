export type LayoutBaseProps = {
	title: string[];
	description: string;
	lightTheme?: string;
	darkTheme?: string;
};

export type BlankLayoutProps = LayoutBaseProps & {
	navConfigKey?: string;
};
