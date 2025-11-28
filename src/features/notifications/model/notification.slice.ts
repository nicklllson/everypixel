import { createSlice } from "@reduxjs/toolkit";

interface NotificationState {
	message: string | null;
	type: "success" | "error" | "info";
}

const initialState: NotificationState = {
	message: null,
	type: "info",
};

export const notificationSlice = createSlice({
	name: "notification",
	initialState,
	reducers: {
		showNotification: (
			state,
			action: {
				payload: { message: string; type?: "success" | "error" | "info" };
			},
		) => {
			state.message = action.payload.message;
			state.type = action.payload.type || "info";
		},
		clearNotification: (state) => {
			state.message = null;
			state.type = "info";
		},
	},
});

export const { showNotification, clearNotification } =
	notificationSlice.actions;
export const notificationReducer = notificationSlice.reducer;
