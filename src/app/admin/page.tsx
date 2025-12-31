"use client";

import { useState } from "react";
import { Session } from "@/types";
import { format, addMinutes } from "date-fns";
import { Play, Square, Clock, AlertTriangle } from "lucide-react";

// Same mock data for now - in real app this comes from Supabase
const MOCK_SESSIONS: Session[] = [
    {
        id: "1",
        title: "Opening Keynote: The Future of Events",
        speaker: "Alice Johnson",
        start_time: new Date().toISOString(),
        end_time: addMinutes(new Date(), 45).toISOString(),
        status: "live",
        is_delayed: false,
        delay_minutes: 0,
    },
    {
        id: "2",
        title: "Building Real-time PWAs with Next.js",
        speaker: "Bob Smith",
        start_time: addMinutes(new Date(), 50).toISOString(),
        end_time: addMinutes(new Date(), 90).toISOString(),
        status: "scheduled",
        is_delayed: true,
        delay_minutes: 10,
    },
    {
        id: "3",
        title: "Lunch Break",
        start_time: addMinutes(new Date(), 120).toISOString(),
        end_time: addMinutes(new Date(), 180).toISOString(),
        status: "scheduled",
        is_delayed: false,
        delay_minutes: 0,
    },
];

export default function AdminPage() {
    const [sessions, setSessions] = useState(MOCK_SESSIONS);
    const [globalDelay, setGlobalDelay] = useState(0);

    const updateStatus = (id: string, status: Session['status']) => {
        console.log(`Setting session ${id} to ${status}`);
        // Optimistic update
        setSessions(prev => prev.map(s => s.id === id ? { ...s, status } : s));
        // TODO: Supabase call
    };

    const handleGlobalDelay = (minutes: number) => {
        setGlobalDelay(prev => prev + minutes);
        console.log(`Delaying all by ${minutes} minutes`);
        // TODO: Call Supabase RPC function 'delay_all_sessions'
    };

    return (
        <main className="min-h-screen bg-zinc-50 dark:bg-zinc-900 p-4 md:p-8">
            <div className="max-w-4xl mx-auto">
                <header className="flex justify-between items-center mb-8">
                    <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Event Control</h1>
                    <div className="flex gap-2">
                        <button
                            onClick={() => handleGlobalDelay(15)}
                            className="bg-orange-100 text-orange-700 px-4 py-2 rounded-lg font-medium hover:bg-orange-200 transition-colors flex items-center gap-2"
                        >
                            <Clock className="w-4 h-4" />
                            Delay All +15m
                        </button>
                    </div>
                </header>

                <div className="grid gap-4">
                    {sessions.map((session) => (
                        <div key={session.id} className="bg-white dark:bg-zinc-800 p-4 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-sm flex flex-col md:flex-row justify-between items-center gap-4">
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="font-mono text-sm text-zinc-500">
                                        {format(new Date(session.start_time), "HH:mm")}
                                    </span>
                                    {session.status === 'live' && (
                                        <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-0.5 rounded-full uppercase">Live</span>
                                    )}
                                    {session.status === 'finished' && (
                                        <span className="bg-zinc-100 text-zinc-500 text-xs font-bold px-2 py-0.5 rounded-full uppercase">Finished</span>
                                    )}
                                </div>
                                <h3 className="font-bold text-lg leading-tight">{session.title}</h3>
                                {session.speaker && <p className="text-zinc-500 text-sm">{session.speaker}</p>}
                            </div>

                            <div className="flex items-center gap-2 w-full md:w-auto">
                                {session.status !== 'live' && session.status !== 'finished' && (
                                    <button
                                        onClick={() => updateStatus(session.id, 'live')}
                                        className="flex-1 md:flex-none bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 px-4 py-2 rounded-lg font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                                    >
                                        <Play className="w-4 h-4" /> Go Live
                                    </button>
                                )}

                                {session.status === 'live' && (
                                    <button
                                        onClick={() => updateStatus(session.id, 'finished')}
                                        className="flex-1 md:flex-none bg-zinc-100 text-zinc-900 border border-zinc-200 px-4 py-2 rounded-lg font-medium hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2"
                                    >
                                        <Square className="w-4 h-4" /> End
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
