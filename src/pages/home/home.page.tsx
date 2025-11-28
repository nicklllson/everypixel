import { logout, useSession } from "@/features/auth";
import { useAppDispatch } from "@/shared/store";
import { Button } from "@/shared/ui/button";
import styles from "./styles.module.scss";

const HomePage = () => {
	const { session } = useSession();
	const dp = useAppDispatch();

	return (
		<div className={styles.wrapper}>
			<div className={styles.text}>Welcome, user {session?.email}!</div>
			<Button
				className={styles.button}
				variant="error"
				onClick={() => dp(logout())}
			>
				Logout
			</Button>
		</div>
	);
};

export const Component = HomePage;
