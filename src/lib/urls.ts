export const withBase = (path: string) => {
	const configuredBase = import.meta.env.BASE_URL;
	const base = configuredBase.endsWith("/") ? configuredBase : `${configuredBase}/`;
	const basePath = base.replace(/^\/+|\/+$/gu, "");
	const relativePath = path.replace(/^\/+/u, "");
	const unbasedPath = basePath && relativePath.startsWith(`${basePath}/`)
		? relativePath.slice(basePath.length + 1)
		: relativePath === basePath
			? ""
			: relativePath;

	return `${base}${unbasedPath}`;
};

export const absoluteSiteUrl = (path: string, site: URL) =>
	new URL(withBase(path), site).href;
