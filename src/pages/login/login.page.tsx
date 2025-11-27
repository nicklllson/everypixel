import { LoginForm } from "@/features/login";
import { Button } from "@/shared/ui/button";
import { AuthLayout } from "@/widgets/auth-layout";
import styles from "./styles.module.scss";

const LoginPage = () => {
	return (
		<AuthLayout
			form={<LoginForm />}
			header={
				<div>
					<h1 className={styles.title}>Welcome Back 👋</h1>
					<p className={styles.description}>
						Log in to access your projects and bring your ideas to life
					</p>
				</div>
			}
			actions={<Button variant="secondary">Sign In with Google</Button>}
		/>
	);
};

export const Component = LoginPage;
