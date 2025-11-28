import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { useDispatch, useSelector } from "react-redux";
import { authReducer } from "@/features/auth";
import { authMiddleware } from "@/features/auth/model/middleware";
import { loginApi } from "@/features/login";
import { notificationReducer } from "@/features/notifications";
import { storeHydration } from "./helpers";

export const store = configureStore({
	reducer: {
		[loginApi.reducerPath]: loginApi.reducer,
		auth: authReducer,
		notification: notificationReducer,
	},
	preloadedState: {
		auth: {
			session: storeHydration(),
		},
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(loginApi.middleware).concat(authMiddleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppSelector = typeof store.getState;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
