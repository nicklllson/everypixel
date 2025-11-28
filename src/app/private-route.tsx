import { Navigate, Outlet } from "react-router";
import { logout, useSession } from "@/features/auth";
import { ROUTES } from "@/shared/config/routes";
import { useAppDispatch } from "@/shared/store";

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
