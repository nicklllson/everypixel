import type { ComponentProps } from "react";

import styles from "./styles.module.scss";

const variants = {
	default: styles.primary,
	primary: styles.primary,
	secondary: styles.secondary,
	error: styles.error,
};

export const Button = ({
	children,
	variant = "default",
	className,
	...props
}: ComponentProps<"button"> & {
	variant?: keyof typeof variants;
}) => {
	return (
		<button
			className={`${styles.button} ${variants[variant]} ${className}`}
			{...props}
		>
			{children}
		</button>
	);
};
