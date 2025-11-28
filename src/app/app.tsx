import { Outlet } from "react-router";
import { Notification } from "@/widgets/notification";

export function App() {
	return (
		<>
			<Notification />
			<Outlet />
		</>
	);
}
