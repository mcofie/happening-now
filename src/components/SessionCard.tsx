import { Session } from "@/types";
import { format } from "date-fns";
import { clsx } from "clsx";

interface SessionCardProps {
    session: Session;
    variant: "hero" | "compact";
}

export function SessionCard({ session, variant }: SessionCardProps) {
    const isDelayed = session.is_delayed;
    const isLive = session.status === "live";

    // Hero Variant (The "Now" View)
    if (variant === "hero") {
        return (
            <div className="relative flex flex-col justify-between h-full p-6 md:p-8 lg:p-10 rounded-[2rem] bg-gradient-to-br from-[#0D9488] to-[#1e1b4b] border-2 border-white/5 overflow-hidden shadow-2xl relative group">
                {/* Ambient Background Glow */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF2E63] rounded-full blur-[120px] opacity-20 -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#F59E0B] rounded-full blur-[100px] opacity-10 translate-y-1/3 -translate-x-1/3" />

                {/* Status Badge */}
                <div className="relative z-10 flex items-center gap-3 mb-4">
                    <span
                        className={clsx(
                            "px-4 py-1.5 rounded-full text-xs md:text-sm font-black uppercase tracking-widest shadow-lg transform transition-transform group-hover:scale-105",
                            isDelayed ? "bg-red-500 text-white shadow-red-500/20" :
                                isLive ? "bg-[#10B981] text-zinc-900 shadow-[#10B981]/20 animate-pulse" :
                                    "bg-white/10 text-zinc-400 backdrop-blur-md"
                        )}
                    >
                        {isDelayed ? "Delayed" : isLive ? "On Air" : "Up Next"}
                    </span>
                    {isDelayed && (
                        <span className="text-red-500 text-lg font-black drop-shadow-sm">+{session.delay_minutes}m</span>
                    )}
                </div>

                {/* Main Title - Adjusted for better fit */}
                <h1 className={clsx(
                    "relative z-10 font-black leading-[0.9] tracking-tighter break-words drop-shadow-2xl my-auto",
                    "text-4xl md:text-6xl lg:text-7xl",
                    isLive ? "text-white" : "text-zinc-300"
                )}>
                    {session.title}
                </h1>

                {/* Footer Metadata */}
                <div className="relative z-10 flex items-end justify-between border-t border-white/10 pt-6 mt-4">
                    <div className="flex flex-col gap-1">
                        {session.speaker && (
                            <>
                                <span className="text-[10px] md:text-xs uppercase tracking-widest text-[#FF2E63] font-bold">Speaker</span>
                                <div className="text-lg md:text-2xl text-white font-bold tracking-tight line-clamp-1">
                                    {session.speaker}
                                </div>
                            </>
                        )}
                    </div>
                    <div className={clsx(
                        "text-3xl md:text-5xl font-mono font-black tabular-nums tracking-tighter",
                        isLive ? "text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-[#34D399]" : "text-zinc-400"
                    )}>
                        {format(new Date(session.start_time), "HH:mm")}
                    </div>
                </div>

                {/* Progress Bar for Live */}
                {isLive && (
                    <div className="absolute bottom-0 left-0 w-full h-3 bg-white/5">
                        <div className="h-full bg-gradient-to-r from-[#10B981] to-[#34D399] animate-progress-indeterminate origin-left shadow-[0_0_20px_rgba(16,185,129,0.5)]" />
                    </div>
                )}
            </div>
        );
    }

    // Compact Variant (The "Next" View)
    return (
        <div className="group relative flex items-center gap-6 p-6 rounded-[2rem] bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-300 backdrop-blur-sm overflow-hidden">
            {/* Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF2E63]/0 via-[#FF2E63]/5 to-[#FF2E63]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

            <div className="relative text-3xl font-mono font-black text-white/40 group-hover:text-white/80 tabular-nums min-w-[90px] transition-colors">
                {format(new Date(session.start_time), "HH:mm")}
            </div>
            <div className="relative flex-1 min-w-0 border-l-2 border-white/10 pl-6 group-hover:border-[#FF2E63] transition-colors">
                <h3 className="text-2xl font-black text-white truncate leading-tight group-hover:text-[#F0FDFA] transition-colors">
                    {session.title}
                </h3>
                {session.speaker && (
                    <p className="text-lg text-white/50 truncate mt-1 font-medium group-hover:text-white/70">{session.speaker}</p>
                )}
            </div>
            {session.is_delayed && (
                <div className="relative px-4 py-1.5 bg-red-500 text-white text-xs font-black rounded-full uppercase tracking-widest shadow-lg shadow-red-900/20">
                    Delayed
                </div>
            )}
        </div>
    );
}
