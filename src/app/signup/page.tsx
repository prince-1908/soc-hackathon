"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Home() {
	return (
		<main className=" flex justify-center items-center h-screen">
			<div className="w-[30rem] h-auto border-black border-[1px] rounded-lg p-5 bg-slate-900">
				<h1 className="text-center p-4 text-xl font-bold underline">REGISTER</h1>

				<form className="flex flex-col gap-y-2">
					<label htmlFor="FName" className="font-semibold ">
						Full Name
					</label>
					<Input type="text" placeholder="Enter First Name" id="firstName" />
					{/* {formik.touched.firstName && formik.errors.firstName ? <div className="text-red-600">{formik.errors.firstName}</div> : null} */}

					<label htmlFor="Email" className="font-semibold ">
						Email
					</label>
					<Input type="email" placeholder="Enter email" id="email" />
					{/* {formik.touched.email && formik.errors.email ? <div className="text-red-600">{formik.errors.email}</div> : null} */}
					<label htmlFor="Password" className="font-semibold">
						Password
					</label>
					<Input type="password" placeholder="Enter password" id="password" />
					{/* {formik.touched.password && formik.errors.password ? <div className="text-red-600">{formik.errors.password}</div> : null} */}

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
