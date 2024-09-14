"use client";

import { SignIn } from "@/appwriteConfig/userAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LoginSchema } from "@/Validation/validationSchema";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
	const router = useRouter();
	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: LoginSchema,
		onSubmit: async (values) => {
			const login = SignIn(values.email, values.password);

			try {
				await login;
				router.push("/home");
			} catch (error) {
				console.error("Error logging in:", error);
			}
		},
	});

	return (
		<main className=" flex justify-center items-center h-screen">
			<div className="w-[30rem]  border-black border-[1px] rounded-lg p-5 bg-slate-900">
				<h1 className="text-center p-4 text-xl font-bold underline">LOGIN</h1>

				<form onSubmit={formik.handleSubmit} className="flex flex-col gap-y-2">
					<label htmlFor="Email" className="font-semibold ">
						Email
					</label>
					<Input type="email" placeholder="Enter email" id="email" {...formik.getFieldProps("email")} />
					{formik.touched.email && formik.errors.email ? <div className="text-red-600">{formik.errors.email}</div> : null}
					<label htmlFor="Password" className="font-semibold">
						Password
					</label>
					<Input type="password" placeholder="Enter password" id="password" {...formik.getFieldProps("password")} />
					{formik.touched.password && formik.errors.password ? <div className="text-red-600">{formik.errors.password}</div> : null}
					{/* Login button */}
					<Button type="submit" className="w-full mt-5 bg-slate-600">
						Sign In
					</Button>
					<p className="mt-2">
						Don't have account?
						{
							<Link href={"/signup"} className="text-blue-700 underline">
								Sign Up
							</Link>
						}
					</p>
				</form>
			</div>
		</main>
	);
}
