"use client";

import { Button } from "@/components/ui/button";

export default function Home() {
	return (
		<div className="p-8">
			<nav className="flex justify-between px-4">
				<h1 className="text-5xl font-bold">QUIZ-UP</h1>
				<Button className="bg-slate-800">Dashboard</Button>
			</nav>
			<main className=" flex flex-col justify-center items-center gap-y-10 mt-20">
				<h1 className="text-4xl">Categories</h1>
				<div className="w-full flex flex-wrap gap-x-4 justify-center gap-y-4  text-2xl">
					<div className="bg-slate-600  rounded-xl w-1/3 py-10 px-20 text-center">Web Devlopement</div>
					<div className="bg-slate-600  rounded-xl w-1/3 py-10 px-20 text-center">Game Devlopement</div>
					<div className="bg-slate-600  rounded-xl w-1/3 py-10 px-20 text-center">Web Devlopement</div>
					<div className="bg-slate-600  rounded-xl w-1/3 py-10 px-20 text-center">Web Devlopement</div>
				</div>
			</main>
		</div>
	);
}
