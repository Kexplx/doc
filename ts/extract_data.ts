private extractTime(date: Date): string {
	const hours = this.removePaddingRegex.exec(`0${date.getHours()}`)![1];
	const minutes = this.removePaddingRegex.exec(`0${date.getMinutes()}`)![1];
	const seconds = this.removePaddingRegex.exec(`0${date.getSeconds()}`)![1];

	return `${hours}:${minutes}:${seconds}`;
}