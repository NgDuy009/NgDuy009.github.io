export function calculateReadingTime(markdown: string): string {
	const readableText = markdown
		.replace(/^---[\s\S]*?---\s*/u, "")
		.replace(/```[\s\S]*?```/g, " ")
		.replace(/`[^`]*`/g, " ")
		.replace(/!\[(.*?)\]\((.*?)\)/g, " ")
		.replace(/\[(.+?)\]\((.*?)\)/g, "$1")
		.replace(/<[^>]+>/g, " ");
	const words = readableText.match(/[\p{L}\p{N}]+(?:['’-][\p{L}\p{N}]+)*/gu)?.length ?? 0;
	const minutes = Math.max(1, Math.ceil(words / 220));

	return `${minutes} min read`;
}

export function formatDate(date: Date): string {
	return new Intl.DateTimeFormat("en", {
		day: "numeric",
		month: "short",
		year: "numeric",
	}).format(date);
}
