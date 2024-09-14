"use client";

import { Register } from "@/appwriteConfig/userAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SignupSchema from "@/Validation/validationSchema";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
	const router = useRouter();
	const formik = useFormik({
		initialValues: {
			fullname: "",
			lastName: "",
			email: "",
			password: "",
			confirmpassword: "",
		},
		validationSchema: SignupSchema,
		onSubmit: async (values) => {
			const registerpromise = Register(values.email, values.password, values.fullname);

			try {
				await registerpromise;
				router.push("/login");
			} catch (error) {
				console.error("Error register in:", error);
			}
		},
	});

	return (
		<main className=" flex justify-center items-center h-screen">
			<div className="w-[30rem] h-auto border-black border-[1px] rounded-lg p-5 bg-slate-900">
				<h1 className="text-center p-4 text-xl font-bold underline">REGISTER</h1>

				<form onSubmit={formik.handleSubmit} className="flex flex-col gap-y-2">
					<label htmlFor="FName" className="font-semibold ">
						Full Name
					</label>
					<Input type="text" placeholder="Enter Full Name" id="fullname" {...formik.getFieldProps("fullname")} />
					{formik.touched.fullname && formik.errors.fullname ? <div className="text-red-600">{formik.errors.fullname}</div> : null}

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
					<label htmlFor="Password" className="font-semibold">
						Confirm Password
					</label>
					<Input type="password" placeholder="confirm password" id="confirmpassword" {...formik.getFieldProps("confirmpassword")} />
					{formik.touched.confirmpassword && formik.errors.confirmpassword ? <div className="text-red-600">{formik.errors.confirmpassword}</div> : null}
					{/* Sign Up button */}
					<Button type="submit" className="w-full mt-5 bg-slate-600">
						SignUp
					</Button>
					<p className="mt-2">
						Already have account?
						<Link href={"/login"} className="text-blue-700 underline">
							Login
						</Link>
					</p>
				</form>
			</div>
		</main>
	);
}
