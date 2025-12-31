import React from "react";
import Link from "next/link";
import {
    LayoutList, Settings, Play, RefreshCw, QrCode, Sun, WifiOff, Bell, Loader,
    Edit2, Heart, MessageCircle, Image as ImageIcon, Map, Unlock, Truck, Contact,
    BarChart, Megaphone, Zap, Clock, Smartphone, Monitor, Star, ArrowLeft
} from "lucide-react";

export default function FeaturesPage() {
    return (
        <div className="min-h-screen bg-[#F0F4F8] text-zinc-900 font-sans relative">
            {/* Background */}
            <div className="fixed inset-0 pointer-events-none opacity-40 bg-dot-pattern mix-blend-multiply z-0" />

            {/* Navbar */}
            <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none animate-fade-in-up">
                <div className="bg-white/80 backdrop-blur-xl border border-white/40 px-5 py-3 rounded-full flex items-center justify-between pointer-events-auto shadow-xl shadow-zinc-200/50 gap-6">
                    <Link href="/" className="flex items-center gap-2 text-zinc-500 hover:text-zinc-900 transition-colors font-bold text-sm">
                        <ArrowLeft className="w-4 h-4" />
                        Back Home
                    </Link>
                    <div className="w-px h-4 bg-zinc-200" />
                    <div className="font-extrabold text-lg tracking-tighter flex items-center gap-2 text-[#0D9488]">
                        <Star className="w-5 h-5 fill-current" />
                        PARTY TIME
                    </div>
                </div>
            </nav>

            <main className="relative z-10 pt-40 pb-32 container mx-auto px-6">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-24 animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 border border-teal-100 text-teal-700 font-bold text-xs mb-8">
                        <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                        FULL CAPABILITIES
                    </div>
                    <h1 className="text-5xl md:text-6xl font-black mb-8 text-zinc-900 tracking-tight leading-[0.95]">
                        Everything you need to <span className="text-[#0D9488]">run the show.</span>
                    </h1>
                    <p className="text-xl text-zinc-500 font-medium leading-relaxed">
                        From the control room to the front row, we've got every angle covered.
                        A complete toolkit for modern event organizers.
                    </p>
                </div>

                {/* Categorized Features */}
                <div className="grid gap-12 max-w-6xl mx-auto">

                    {/* Category 1: Real-time Control */}
                    <section className="animate-fade-in-up delay-100">
                        <h3 className="text-2xl font-black text-zinc-400 mb-8 border-b-2 border-zinc-200 pb-3 inline-block">Control & Sync</h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { icon: LayoutList, title: "Now & Next Board", desc: "The core display. Shows what's happening now and what's up next." },
                                { icon: Zap, title: "Sub-second Real-time", desc: "Updates propagate to every screen in less than 100ms." },
                                { icon: Clock, title: "Sliding Schedule", desc: "Push the whole day back by 15 mins with one click." },
                                { icon: RefreshCw, title: "Auto Time Shifting", desc: "Sessions automatically move to 'Done' when time is up." },
                                { icon: Settings, title: "Organizer Controls", desc: "A powerful admin panel to manage everything on the fly." },
                                { icon: Play, title: "Go Live Actions", desc: "Manually trigger session starts, flashy alerts, and more." },
                            ].map((f, i) => <FeatureCard key={i} {...f} />)}
                        </div>
                    </section>

                    {/* Category 2: Attendee Experience */}
                    <section className="animate-fade-in-up delay-200">
                        <h3 className="text-2xl font-black text-zinc-400 mb-8 border-b-2 border-zinc-200 pb-3 inline-block mt-8">Attendee Experience</h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { icon: Smartphone, title: "No-Download PWA", desc: "Access instantly via browser. No app store friction." },
                                { icon: Monitor, title: "Big Screen / TV Mode", desc: "Optimized high-contrast view for projectors and hallways." },
                                { icon: QrCode, title: "QR Code Access", desc: "One scan to get the full schedule on their device." },
                                { icon: Bell, title: "Flash Alerts", desc: "Send urgent notifications that take over the screen." },
                                { icon: WifiOff, title: "Offline Resilience", desc: "Works even when the venue WiFi inevitably crashes." },
                                { icon: Sun, title: "High-Contrast Mode", desc: "Accessibility built-in for outdoor or low-vision use." },
                            ].map((f, i) => <FeatureCard key={i} {...f} />)}
                        </div>
                    </section>

                    {/* Category 3: Engagement */}
                    <section className="animate-fade-in-up delay-300">
                        <h3 className="text-2xl font-black text-zinc-400 mb-8 border-b-2 border-zinc-200 pb-3 inline-block mt-8">Engagement & Fun</h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { icon: Heart, title: "Hype Reactions", desc: "Let the crowd smash a button to show love." },
                                { icon: MessageCircle, title: "Crowd Q&A", desc: "Upvote questions live on the big screen." },
                                { icon: ImageIcon, title: "Live Photo Wall", desc: "Stream attendee photos in real-time." },
                                { icon: Map, title: "QR Scavenger Hunt", desc: "Hide codes for attendees to find and score points." },
                                { icon: Contact, title: "Digital Biz Cards", desc: "Tap phones to swap LinkedIn info instantly." },
                                { icon: Megaphone, title: "Sponsor Blasts", desc: "Dedicated full-screen takeovers for your sponsors." },
                            ].map((f, i) => <FeatureCard key={i} {...f} />)}
                        </div>
                    </section>

                </div>
            </main>
        </div>
    );
}

function FeatureCard({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
    return (
        <div className="group bg-white p-6 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mb-4 text-[#0D9488] group-hover:scale-110 transition-transform">
                <Icon className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-lg text-zinc-900 mb-2">{title}</h4>
            <p className="text-sm text-zinc-500 font-medium leading-relaxed">
                {desc}
            </p>
        </div>
    );
}
