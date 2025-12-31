import { LiveBoard } from "@/components/LiveBoard";

export default function TvPage() {
    return (
        <main className="h-screen w-screen bg-black text-white p-8 md:p-12 overflow-hidden selection:bg-emerald-500 selection:text-black">
            {/* Simple Background Grid */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '4rem 4rem' }}
            />

            <div className="relative h-full w-full max-w-[1600px] mx-auto">
                <LiveBoard />
            </div>
        </main>
    );
}
