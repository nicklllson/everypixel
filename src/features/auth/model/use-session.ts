import { decodeJwt } from "jose";
import { useAppSelector } from "@/shared/store";

type TSession = {
	email: string;
	exp: number;
};

export const useSession = () => {
	const token = useAppSelector((state) => state.auth.session);
	const session = token ? decodeJwt<TSession>(token) : null;
	const isExpired = session?.exp
		? session.exp < Math.floor(Date.now() / 1000)
		: true;

	return { session, isExpired };
};
