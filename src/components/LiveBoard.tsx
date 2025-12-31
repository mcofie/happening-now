"use client";

import { useEffect, useState } from "react";
import { SessionCard } from "./SessionCard";
import { Session } from "@/types";
import { format, addMinutes } from "date-fns";

// Mock Data
const MOCK_SESSIONS: Session[] = [
    {
        id: "1",
        title: "The Future of Events",
        speaker: "Alice Johnson",
        start_time: new Date().toISOString(),
        end_time: addMinutes(new Date(), 45).toISOString(),
        status: "live",
        is_delayed: false,
        delay_minutes: 0,
    },
    {
        id: "2",
        title: "Building Real-time PWAs",
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
    {
        id: "4",
        title: "Afternoon Workshop",
        speaker: "Charlie Day",
        start_time: addMinutes(new Date(), 240).toISOString(),
        end_time: addMinutes(new Date(), 300).toISOString(),
        status: "scheduled",
        is_delayed: false,
        delay_minutes: 0,
    },
];

export function LiveBoard() {
    const [sessions, setSessions] = useState<Session[]>(MOCK_SESSIONS);
    const [isMounted, setIsMounted] = useState(false);

    // Initial Load
    useEffect(() => {
        setIsMounted(true);
        // Recalculate mock times on the client to ensure "Live" status is accurate relative to user's time
        const now = new Date();
        const clientMockSessions: Session[] = [
            {
                id: "1",
                title: "The Future of Events",
                speaker: "Alice Johnson",
                start_time: now.toISOString(),
                end_time: addMinutes(now, 45).toISOString(),
                status: "live",
                is_delayed: false,
                delay_minutes: 0,
            },
            {
                id: "2",
                title: "Building Real-time PWAs",
                speaker: "Bob Smith",
                start_time: addMinutes(now, 50).toISOString(),
                end_time: addMinutes(now, 90).toISOString(),
                status: "scheduled",
                is_delayed: true,
                delay_minutes: 10,
            },
            {
                id: "3",
                title: "Lunch Break",
                start_time: addMinutes(now, 120).toISOString(),
                end_time: addMinutes(now, 180).toISOString(),
                status: "scheduled",
                is_delayed: false,
                delay_minutes: 0,
            },
            {
                id: "4",
                title: "Afternoon Workshop",
                speaker: "Charlie Day",
                start_time: addMinutes(now, 240).toISOString(),
                end_time: addMinutes(now, 300).toISOString(),
                status: "scheduled",
                is_delayed: false,
                delay_minutes: 0,
            },
        ];

        const cached = localStorage.getItem('sessions');
        if (cached) {
            try { setSessions(JSON.parse(cached)); } catch (e) { console.error(e); }
        } else {
            setSessions(clientMockSessions);
        }
    }, []);

    if (!isMounted) return null;

    const sortedSessions = [...sessions].sort(
        (a, b) => new Date(a.start_time).getTime() - new Date(b.start_time).getTime()
    );

    // Determine current Hero and Next List
    const liveIndex = sortedSessions.findIndex(s => s.status === 'live');

    // If something is live, it is the Hero.
    // If nothing live, the first upcoming is the Hero.
    let heroSession: Session;
    let upcomingList: Session[] = [];

    if (liveIndex !== -1) {
        heroSession = sortedSessions[liveIndex];
        upcomingList = sortedSessions.slice(liveIndex + 1);
    } else {
        // Find first compiled/delayed/scheduled
        const nextIdx = sortedSessions.findIndex(s => ['scheduled', 'delayed'].includes(s.status));
        if (nextIdx !== -1) {
            heroSession = sortedSessions[nextIdx];
            upcomingList = sortedSessions.slice(nextIdx + 1);
        } else {
            // Fallback or empty state
            heroSession = sortedSessions[0] || null;
            upcomingList = [];
        }
    }

    if (!heroSession) return <div className="text-zinc-400 font-medium">Waiting for schedule...</div>;

    return (
        <div className="flex flex-col h-full w-full gap-4 p-2">
            {/* Top Section - Hero (60%) */}
            <div className="flex-[1.5] min-h-0">
                <SessionCard session={heroSession} variant="hero" />
            </div>

            {/* Bottom 30% - Upcoming List */}
            <div className="flex-1 min-h-0 flex flex-col gap-4 overflow-hidden">
                <div className="text-zinc-500 font-bold uppercase tracking-widest text-sm px-1 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#0D9488] shadow-[0_0_8px_#0D9488]" />
                    Next Up
                </div>
                <div className="flex flex-col gap-3 overflow-y-auto pr-2">
                    {upcomingList.slice(0, 3).map(session => (
                        <SessionCard key={session.id} session={session} variant="compact" />
                    ))}
                    {upcomingList.length === 0 && (
                        <div className="text-zinc-600 italic px-2">No more sessions today.</div>
                    )}
                </div>
            </div>

            <div className="absolute top-8 right-8 text-right opacity-30 pointer-events-none hidden md:block">
                <div className="text-6xl font-mono font-bold text-zinc-600/50">
                    {format(new Date(), 'HH:mm')}
                </div>
            </div>
        </div>
    );
}
