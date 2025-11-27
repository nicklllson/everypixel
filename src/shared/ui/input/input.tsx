import type { ComponentProps } from "react";
import styles from "./styles.module.scss";

export const Input = ({ className, ...props }: ComponentProps<"input">) => {
	return <input className={`${styles.input} ${className}`} {...props} />;
};
