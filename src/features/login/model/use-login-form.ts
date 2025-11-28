import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { setCredentials } from "@/features/auth";
import { showNotification } from "@/features/notifications";
import { ROUTES } from "@/shared/config/routes";
import { useAppDispatch } from "@/shared/store";
import { useLoginMutation } from "../api/login.query";
import { loginSchema, type TLoginFormFields } from "./schema";

export const useLoginForm = () => {
	const {
		formState: { errors, isValid },
		...form
	} = useForm<TLoginFormFields>({
		mode: "onChange",
		resolver: zodResolver(loginSchema),
	});

	const [login, { isLoading }] = useLoginMutation();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const onSubmit = async (fields: TLoginFormFields) => {
		const response = await login(fields).unwrap();
		dispatch(
			setCredentials({
				token: response.accessToken,
			}),
		);
		dispatch(showNotification({ message: "Вход успешен!", type: "success" }));
		navigate(ROUTES.HOME);
	};

	return { errors, isValid, form, isLoading, onSubmit };
};
