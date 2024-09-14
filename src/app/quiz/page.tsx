import Logo from "@/components/Logo";

export default function Home() {
    return (
        <main className="px-64 relative">

            <Logo/>

            {/* timer */}
            <div className="absolute right-16 top-8 flex gap-2">
                <div className="text-2xl ">
                    Timer:
                </div>
                <div className="text-2xl text-green-700">
                    55:55
                </div>
            </div>
        </main>
    );
}