import { clearNotification } from "@/features/notifications";
import { useAppDispatch, useAppSelector } from "@/shared/store";
import { Button } from "@/shared/ui/button";
import styles from "./styles.module.scss";

export const Notification = () => {
	const dispatch = useAppDispatch();
	const { message, type } = useAppSelector((state) => state.notification);

	if (!message) return null;

	return (
		<div className={`${styles.notification} ${styles[type]}`}>
			<span>{message}</span>

			<Button
				className={styles.close}
				onClick={() => dispatch(clearNotification())}
			>
				✖
			</Button>
		</div>
	);
};
