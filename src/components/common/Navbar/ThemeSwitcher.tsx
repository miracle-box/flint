import { createEffect, createSignal, type JSX } from 'solid-js';

type Props = {
	lightText: string;
	darkText: string;
	systemText: string;

	// Cannot define typed slots.
	lightIcon?: JSX.Element;
	darkIcon?: JSX.Element;
	systemIcon?: JSX.Element;
	target?: JSX.Element;
};
export function ThemeSwitcher(props: Props) {
	const [colorScheme, setColorScheme] = createSignal(
		localStorage.getItem('color-scheme') || 'system',
	);

	// Update value in local storage
	// [TODO) Update actual theme prop
	createEffect(() => {
		localStorage.setItem('color-scheme', colorScheme());
	});

	return (
		<details class="dropdown dropdown-end">
			<summary class="btn btn-ghost">{props.target}</summary>
			<ul class="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow">
				<li>
					<button
						classList={{ active: colorScheme() === 'light' }}
						onClick={() => {
							setColorScheme('light');
						}}
					>
						{props.lightIcon}
						{props.lightText}
					</button>
					<button
						classList={{ active: colorScheme() === 'dark' }}
						onClick={() => {
							setColorScheme('dark');
						}}
					>
						{props.darkIcon}
						{props.darkText}
					</button>
					<button
						classList={{ active: colorScheme() === 'system' }}
						onClick={() => {
							setColorScheme('system');
						}}
					>
						{props.systemIcon}
						{props.systemText}
					</button>
				</li>
			</ul>
		</details>
	);
}
