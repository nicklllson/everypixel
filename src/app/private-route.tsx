import { Navigate, Outlet, redirect } from "react-router";
import { logout, useSession } from "@/features/auth";
import { ROUTES } from "@/shared/config/routes";
import { store, useAppDispatch } from "@/shared/store";

export const PrivateRoute = () => {
	const { session, isExpired } = useSession();
	const dispatch = useAppDispatch();

	if (isExpired) {
		dispatch(logout());
		return <Navigate to={ROUTES.LOGIN} />;
	}

	if (!session) {
		return <Navigate to={ROUTES.LOGIN} />;
	}

	return <Outlet />;
};

export const privateLoader = () => {
	const state = store.getState();
	const session = state.auth?.session;

	if (session) {
		return redirect(ROUTES.HOME);
	}

	return null;
};
