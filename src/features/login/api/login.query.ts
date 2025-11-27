import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { SignJWT } from "jose";

export async function generateFakeJWT(payload: { email: string }) {
	return await new SignJWT(payload)
		.setProtectedHeader({ alg: "HS256" })
		.setIssuedAt()
		.setExpirationTime("1h")
		.sign(new TextEncoder().encode("fake_secret"));
}

export const loginApi = createApi({
	reducerPath: "loginApi",
	baseQuery: fakeBaseQuery(),
	endpoints: (builder) => ({
		login: builder.mutation<
			{ accessToken: string },
			{ email: string; password: string }
		>({
			async queryFn(fields) {
				await new Promise((resolve) => setTimeout(resolve, 1000));

				console.log(fields);

				if (fields.email && fields.password) {
					const accessToken = await generateFakeJWT({
						email: fields.email,
					});

					console.log({ accessToken });

					return { data: { accessToken } };
				}

				return {
					error: {
						status: 401,
						data: { message: "Credentials are invalid" },
					},
				};
			},
		}),
	}),
});

export const { useLoginMutation } = loginApi;
