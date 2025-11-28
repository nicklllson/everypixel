import type { Middleware } from "@reduxjs/toolkit";
import { logout, setCredentials } from "./auth.slice";
import { STORAGE_TOKEN_KEY } from "./constants";

export const authMiddleware: Middleware = () => (next) => (action) => {
	const result = next(action);

	if (setCredentials.match(action)) {
		localStorage.setItem(STORAGE_TOKEN_KEY, action.payload.token);
	}

	if (logout.match(action)) {
		localStorage.removeItem(STORAGE_TOKEN_KEY);
	}

	return result;
};
