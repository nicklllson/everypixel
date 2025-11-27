import { Link } from "react-router";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { useLoginForm } from "../model/use-login-form";
import styles from "./styles.module.scss";

export const LoginForm = () => {
	const { form, onSubmit, errors, isLoading, isValid } = useLoginForm();

	return (
		<div className={styles.wrapper}>
			<form className={styles.form} onSubmit={form.handleSubmit(onSubmit)}>
				<label htmlFor="email" className={styles.label}>
					<span className={styles.label_text}>Email</span>
					<Input
						id="email"
						placeholder="Enter your email"
						{...form.register("email")}
					/>
					{errors.email && (
						<span className={styles.error}>{errors.email.message}</span>
					)}
				</label>
				<label htmlFor="password" className={styles.label}>
					<span className={styles.label_text}>Password</span>
					<Input
						id="password"
						placeholder="Enter your password"
						{...form.register("password")}
					/>
					{errors.password && (
						<span className={styles.error}>{errors.password.message}</span>
					)}
				</label>
				<Button
					className={styles.btn}
					type="submit"
					disabled={!isValid || isLoading}
				>
					{isLoading ? "Loading..." : "Log in"}
				</Button>
			</form>
			<div className={styles.meta}>
				<span className={styles.meta_text}>
					Don't have an account?{" "}
					<Link className={styles.meta_link} to="#whatDoYouExpect">
						Sign up
					</Link>
				</span>
				<Link className={styles.meta_link} to="#dontExpectAnything">
					Forgot password
				</Link>
			</div>
		</div>
	);
};
