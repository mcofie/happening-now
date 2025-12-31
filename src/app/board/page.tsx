import { LiveBoard } from "@/components/LiveBoard";

export default function BoardPage() {
    return (
        <main className="min-h-screen bg-[#09090b] py-8 selection:bg-[#0D9488] selection:text-white">
            <div className="container mx-auto px-4">
                <header className="mb-8 text-center">
                    <h1 className="text-xl font-bold tracking-tight text-zinc-500">
                        HAPPENING NOW
                    </h1>
                </header>
                <LiveBoard />
            </div>
        </main>
    );
}
