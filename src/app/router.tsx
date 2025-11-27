import { createBrowserRouter } from "react-router";
import { App } from "./app";
import { PrivateRoute, privateLoader } from "./private-route";

export const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: "/login",
				lazy: () => import("@/pages/login"),
			},
			{
				path: "/home",
				element: <PrivateRoute />,
				loader: privateLoader,
				lazy: () => import("@/pages/home.page"),
			},
		],
	},
]);
