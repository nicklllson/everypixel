import { createSlice } from "@reduxjs/toolkit";

type TInitialState = {
	email: string | null;
	session: string | null;
};

const initialState: TInitialState = {
	email: null,
	session: null,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setCredentials: (
			state,
			action: { payload: { email: string; token: string } },
		) => {
			state.email = action.payload.email;
			state.session = action.payload.token;
		},
		logout: (state) => {
			state.email = null;
			state.session = null;
		},
	},
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
