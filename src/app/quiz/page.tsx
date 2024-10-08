"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Logo from "@/components/Logo";
import WebDev from "@/quiz/webDev.json";

export default function Home() {
	const [answers, setAnswers] = useState<{ [key: string]: string }>({});
	const [timeLeft, setTimeLeft] = useState(20 * 60);
	const router = useRouter();

	useEffect(() => {
		// Start the timer
		const timerId = setInterval(() => {
			setTimeLeft((prevTime) => {
				if (prevTime <= 1) {
					clearInterval(timerId);
					handleTimeUp();
					return 0;
				}
				return prevTime - 1;
			});
		}, 1000);

		return () => clearInterval(timerId); // Clean up on unmount
	}, []);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setAnswers((prevAnswers) => ({
			...prevAnswers,
			[name]: value,
		}));
	};

	const handleSubmit = () => {
		// Format the answers into an object for the result page
		const result = WebDev.map((elem, qIndex) => {
			const answer = answers[`question${qIndex}`] || "";
			return { question: elem.question, answer };
		});

		// Serialize the result to JSON string and encode it
		const resultString = JSON.stringify(result);

		// Redirect to the result page with the result as a query string
		localStorage.setItem("data", resultString);
		router.push("/result");
	};

	const handleTimeUp = () => {
		alert("Time's up! Redirecting to the results page.");
		handleSubmit();
	};

	const formatTime = (seconds: number) => {
		const minutes = Math.floor(seconds / 60);
		const secs = seconds % 60;
		return `${minutes}:${secs.toString().padStart(2, "0")}`;
	};

	return (
		<main className="px-64 relative">
			<div className="mt-8">
				<Logo />
			</div>

			{/* Timer */}
			<div className="fixed right-16 top-8 flex gap-2">
				<div className="text-2xl ">Timer:</div>
				<div className="text-2xl text-green-700">{formatTime(timeLeft)}</div>
			</div>

			{/* Questions */}
			<form
				onSubmit={(e) => {
					e.preventDefault();
					handleSubmit();
				}}
			>
				<div className="mt-16 grid gap-8">
					{/* Render questions */}
					{WebDev.map((elem, qIndex) => (
						<div key={qIndex} className="border rounded-lg py-4 px-8 bg-white/5">
							<div>
								Q.{qIndex + 1} {elem.question}
							</div>
							<div className="mt-1">
								<ul className="grid grid-rows-2 grid-cols-2">
									{elem.options.map((item, oIndex) => (
										<li key={oIndex}>
											<label>
												<input type="radio" name={`question${qIndex}`} value={item} onChange={handleChange} />
												{item}
											</label>
										</li>
									))}
								</ul>
							</div>
						</div>
					))}
				</div>

				<button type="submit" className="border mt-8 w-full mb-64 py-4 rounded-lg bg-green-500/20 hover:bg-green-500/50 transition text-2xl">
					Submit
				</button>
			</form>
		</main>
	);
}
