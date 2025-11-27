import { AuthLayoutFooter } from "./auth-layout-footer";
import styles from "./styles.module.scss";

export const AuthLayout = ({
	footer,
	form,
	header,
	actions,
}: {
	header: React.ReactNode;
	actions?: React.ReactNode;
	form: React.ReactNode;
	footer?: React.ReactNode;
}) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.wrapperForm}>
				<div className={styles.logo}>EVERYPIXEL</div>
				<div className={styles.wrapper_content}>
					<div className={styles.header}>{header}</div>
					{actions && (
						<div className={styles.actions}>
							<div className={styles.actions_list}>{actions}</div>
							<div className={styles.actions_divider}>
								<span className={styles.actions_divider_line}></span>
								<span className={styles.actions_divider_text}>or</span>
								<span className={styles.actions_divider_line}></span>
							</div>
						</div>
					)}
					{form}
				</div>
				{footer ? (
					<div className={styles.footer}>{footer}</div>
				) : (
					<AuthLayoutFooter />
				)}
			</div>
			<div className={styles.wrapperPicture}></div>
		</div>
	);
};
