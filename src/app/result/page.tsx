"use client";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { resolveObjectURL } from "buffer";
import WebDev from "@/quiz/webDev.json";

export default function ResultPage() {
	const resultString = localStorage.getItem("data");

	const result = resultString ? JSON.parse(resultString) : {};

	console.log(result);
	const marks = result.map((item: { question: string; answer: string }, index: number) => {
		if (item.answer === WebDev[index].solution) {
			return 1;
		} else {
			return 0;
		}
	});

	const totalMarks = marks.reduce((a: number, c: number) => a + c, 0);

	return (
		<main className="px-64">
			<nav className="mt-8 flex justify-between">
				<div className="">
					<Logo />
				</div>
				<Button className="bg-slate-800">Dashboard</Button>
			</nav>

			<div className="mt-16 text-5xl text-center border-b">Result</div>

			<Table>
				<TableCaption>Your Quiz Results.</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead colSpan={3} className="w-[100px]">
							Questions
						</TableHead>
						<TableHead className="text-right">Your Answer</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{result.map((result: { question: string; answer: string }, index: number) => (
						<TableRow key={index}>
							<TableCell colSpan={3} className="font-medium">
								{result.question}
							</TableCell>
							<TableCell className="text-right">{marks[index]}</TableCell>
						</TableRow>
					))}
				</TableBody>
				<TableFooter>
					<TableRow>
						<TableCell colSpan={3}>Total Marks</TableCell>
						<TableCell className="text-right">{totalMarks}</TableCell>
					</TableRow>
				</TableFooter>
			</Table>
		</main>
	);
}
