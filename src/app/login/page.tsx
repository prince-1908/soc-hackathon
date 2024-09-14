"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Home() {
	return (
		<main className=" flex justify-center items-center h-screen">
			<div className="w-[30rem]  border-black border-[1px] rounded-lg p-5 bg-slate-900">
				<form className="flex flex-col gap-y-2">
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
