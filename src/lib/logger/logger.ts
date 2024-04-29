export class Logger {
	private console = console;

	private static getTimestamp() {
		const date = new Date();

		const hours = String(date.getHours()).padStart(2, '0');
		const minutes = String(date.getMinutes()).padStart(2, '0');
		const seconds = String(date.getSeconds()).padStart(2, '0');

		return `${hours}:${minutes}:${seconds}`;
	}

	private static formatMessage(
		message: string,
		textPrefix = '\x1b[37m',
		brandPrefix = '\x1b[94m',
	) {
		return `\x1b[90m${Logger.getTimestamp()} ${brandPrefix}[Flint] ${textPrefix}${message}\x1b[0m`;
	}

	info(message: string) {
		this.console.info(Logger.formatMessage(message));
	}

	warn(message: string) {
		this.console.warn(
			Logger.formatMessage(message, '\x1b[93m', '\x1b[93m'),
		);
	}

	error(message: string) {
		this.console.error(
			Logger.formatMessage(message, '\x1b[91m', '\x1b[91m'),
		);
	}
}
