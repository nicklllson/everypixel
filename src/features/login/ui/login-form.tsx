import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { z } from "zod";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import styles from "./styles.module.scss";

const schema = z.object({
	email: z.email("Enter a valid email address"),
	password: z.string().min(6, "Password must contain at least 6 characters"),
});

type TLoginFormFields = z.infer<typeof schema>;

export const LoginForm = () => {
	const form = useForm<TLoginFormFields>({
		mode: "onBlur",
		resolver: zodResolver(schema),
	});

	const onSubmit = (fields: TLoginFormFields) => {
		console.log(fields);
	};

	return (
		<div className={styles.wrapper}>
			<form className={styles.form} action="">
				<label htmlFor="" className={styles.label}>
					<span className={styles.label_text}>Email</span>
					<Input placeholder="Enter your email" />
				</label>
				<label htmlFor="" className={styles.label}>
					<span className={styles.label_text}>Password</span>
					<Input placeholder="Enter your password" />
				</label>
				<Button className={styles.btn} type="submit">
					Log in
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
