import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
    return (
        <main className="px-64">

            {/* Heading */}
            <h1 className="mt-12 text-9xl text-center font-bold">Start Quiz</h1>

            {/* Note */}
            <div className="mt-16">
                <p className="text-4xl mb-4 border-b pb-2 font-semibold">Before You Begin:</p>
                <ul className="list-disc grid gap-2">
                    <li>
                        Read Instructions Carefully: Take a moment to review all instructions and guidelines provided for the quiz. Make sure you understand the format, time limits, and any specific requirements.
                    </li>
                    <li>
                        Prepare Your Environment: Find a quiet and comfortable place to take the quiz where you wont be disturbed. Ensure you have all necessary materials (e.g., pens, paper, calculator) ready.
                    </li>
                    <li>
                        Stay Calm and Focused: Take a deep breath and stay relaxed. Focus on one question at a time and manage your time effectively.
                    </li>
                    <li>
                        Double-Check Your Answers: If time permits, review your answers before submitting to ensure accuracy and completeness.
                    </li>
                    <li>
                        Good Luck! Believe in yourself and do your best. You got this!
                    </li>
                </ul>
            </div>


            {/* quiz buttons */}
            <div className="mt-16 p-2 grid gap-2">
                <div>
                    Before you start the quiz you can take a small sample quiz for practice.
                </div>
                <Link href="/quiz" className="border py-1 text-center rounded-md bg-white/5 hover:bg-white/10 transition text-4xl">
                    Start Quiz
                </Link>
                <Button className="border  ml-auto">
                    Sample Quiz
                </Button>
            </div>
        </main>
    );
}