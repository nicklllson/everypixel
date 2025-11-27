import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type TAuthState = {
	userId: string | null;
	loginError?: string;
};

const initialState: TAuthState = {
	userId: localStorage.getItem("userId"),
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	selectors: {
		userId: (state) => state.userId,
		loginError: (state) => state.loginError,
	},
	reducers: {
		addUser(state, action: PayloadAction<{ userId: string }>) {
			state.userId = action.payload.userId;
			state.loginError = undefined;
		},
		removeUser(state) {
			state.userId = null;
		},
		setError(state, action: PayloadAction<string | undefined>) {
			state.loginError = action.payload;
		},
	},
});

export const { addUser, removeUser, setError } = authSlice.actions;
export const authReducer = authSlice.reducer;
