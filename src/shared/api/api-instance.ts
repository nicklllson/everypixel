export const BASE_URL = "http://localhost:3000";

class ApiError extends Error {
	response: Response;

	constructor(response: Response) {
		super("ApiError: " + response.status);
		this.response = response;
	}
}

export const jsonApiInstance = async <T>(
	url: string,
	init?: RequestInit & { json?: unknown },
) => {
	const headers: Record<string, string> = {
		...(typeof init?.headers === "object" &&
		!Array.isArray(init.headers) &&
		!(init.headers instanceof Headers)
			? init.headers
			: {}),
	};

	if (init?.json) {
		headers["Content-type"] = "application/json";
		init.body = JSON.stringify(init.json);
	}

	const response = await fetch(BASE_URL + url, {
		...init,
		headers,
	});

	if (!response.ok) {
		throw new ApiError(response);
	}

	const data = (await response.json()) as Promise<T>;

	return data;
};
