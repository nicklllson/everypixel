import { createBrowserRouter, redirect } from "react-router";
import { ROUTES } from "@/shared/config/routes";
import { App } from "./app";
import { PrivateRoute } from "./private-route";

export const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: ROUTES.LOGIN,
				lazy: () => import("@/pages/login"),
			},
			{
				element: <PrivateRoute />,
				children: [
					{
						path: ROUTES.HOME,
						lazy: () => import("@/pages/home"),
					},
				],
			},
		],
	},
	{
		path: ROUTES.HOME,
		loader: () => redirect(ROUTES.HOME),
	},
]);
