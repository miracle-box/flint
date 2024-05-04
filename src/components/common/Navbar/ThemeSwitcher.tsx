import { createEffect, createSignal, onMount } from 'solid-js';

type Props = {
	labelText: string;
	lightText: string;
	darkText: string;
	systemText: string;
};
export function ThemeSwitcher(props: Props) {
	const [colorScheme, setColorScheme] = createSignal<
		'light' | 'dark' | 'system'
	>('system');

	const [systemPrefersDark, setSystemPrefersDark] = createSignal(false);

	// Initialize on mount
	onMount(() => {
		// Get color scheme settings
		const storedColorScheme = localStorage.getItem('color-scheme');
		if (storedColorScheme === 'light' || storedColorScheme === 'dark')
			setColorScheme(storedColorScheme);
		else setColorScheme('system');

		// Get system color mode
		setSystemPrefersDark(
			window.matchMedia('(prefers-color-scheme: dark)').matches,
		);
	});

	// Update value in local storage and <html> props.
	createEffect(() => {
		localStorage.setItem('color-scheme', colorScheme());
		document.documentElement.setAttribute(
			'data-color-scheme',
			colorScheme(),
		);
	});

	return (
		<details class="dropdown dropdown-end">
			<summary class="btn btn-ghost font-normal" title={props.labelText}>
				{/* Forced color scheme have colored icons */}
				{colorScheme() === 'light' && (
					<span class="icon-[tabler--sun] h-6 w-6 text-primary" />
				)}
				{colorScheme() === 'dark' && (
					<span class="icon-[tabler--moon] h-6 w-6 text-primary" />
				)}

				{/* Icon is based on current theme */}
				{colorScheme() === 'system' &&
					(systemPrefersDark() ? (
						<span class="icon-[tabler--moon] h-6 w-6" />
					) : (
						<span class="icon-[tabler--sun] h-6 w-6" />
					))}

				<span class="icon-[tabler--chevron-down] h-4 w-4 opacity-60" />
			</summary>
			<ul class="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow">
				<li>
					<button
						classList={{ active: colorScheme() === 'light' }}
						onClick={() => {
							setColorScheme('light');
						}}
					>
						<span class="icon-[tabler--sun] h-4 w-4" />
						{props.lightText}
					</button>
					<button
						classList={{ active: colorScheme() === 'dark' }}
						onClick={() => {
							setColorScheme('dark');
						}}
					>
						<span class="icon-[tabler--moon] h-4 w-4" />
						{props.darkText}
					</button>
					<button
						classList={{ active: colorScheme() === 'system' }}
						onClick={() => {
							setColorScheme('system');
						}}
					>
						<span class="icon-[tabler--device-desktop] h-4 w-4" />
						{props.systemText}
					</button>
				</li>
			</ul>
		</details>
	);
}
