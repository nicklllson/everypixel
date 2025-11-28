import { STORAGE_TOKEN_KEY } from "@/features/auth";

export function storeHydration() {
	const storedToken = localStorage.getItem(STORAGE_TOKEN_KEY) ?? null;
	if (!storedToken) return null;
	return storedToken;
}
