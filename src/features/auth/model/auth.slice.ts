import { createSlice } from "@reduxjs/toolkit";

type TInitialState = {
	session: string | null;
};

const initialState: TInitialState = {
	session: null,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setCredentials: (state, action: { payload: { token: string } }) => {
			state.session = action.payload.token;
		},
		logout: (state) => {
			state.session = null;
		},
	},
});

export const { setCredentials, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
