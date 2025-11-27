import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../api/login.query";
import { loginSchema, type TLoginFormFields } from "./schema";

export const useLoginForm = () => {
	const {
		formState: { errors, isValid },
		...form
	} = useForm<TLoginFormFields>({
		resolver: zodResolver(loginSchema),
	});

	const [login, { isLoading }] = useLoginMutation();

	const onSubmit = async (fields: TLoginFormFields) => {
		const response = await login(fields);
		console.log(response.data?.accessToken);
	};

	return { errors, isValid, form, isLoading, onSubmit };
};
