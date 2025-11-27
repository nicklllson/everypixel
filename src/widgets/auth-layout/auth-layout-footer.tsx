import { Link } from "react-router";
import styles from "./styles.module.scss";

export const AuthLayoutFooter = () => {
	return (
		<div className={styles.footer}>
			<p>
				By signing up to the Workroom platform you understand and agree with our{" "}
				<Link className={styles.footer_link} to="#someLink">
					Terms of Use
				</Link>{" "}
				and{" "}
				<Link className={styles.footer_link} to="#someLink">
					Privacy Policy
				</Link>
			</p>
			<p>
				Having trouble? Contact us at{" "}
				<Link
					target="_blank"
					referrerPolicy="no-referrer"
					to="mailto:workroom@everypixel.com"
					className={styles.footer_link}
				>
					workroom@everypixel.com
				</Link>
			</p>
		</div>
	);
};
