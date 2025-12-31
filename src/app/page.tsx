import Link from "next/link";
import { ArrowRight, Monitor, Zap, Smartphone, ChevronLeft, ChevronRight, RotateCw, Lock, Menu, LayoutList, Settings, Play, RefreshCw, QrCode, Sun, WifiOff, Bell, Loader, Edit2, Heart, MessageCircle, Image as ImageIcon, Map, Unlock, Truck, Contact, BarChart, Megaphone, Star, Sparkles, Clock, Calendar, Shield, Globe, Users } from "lucide-react";
import { LiveBoard } from "@/components/LiveBoard";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F0F4F8] text-zinc-900 selection:bg-[#0D9488] selection:text-white overflow-x-hidden font-sans relative">

      {/* Background Texture */}
      <div className="fixed inset-0 pointer-events-none opacity-40 bg-dot-pattern mix-blend-multiply z-0" />

      {/* Navbar - Floating Pill */}
      <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none animate-fade-in-up">
        <div className="bg-white/80 backdrop-blur-xl border border-white/40 px-5 md:px-6 py-3 rounded-full flex items-center justify-between pointer-events-auto shadow-xl shadow-zinc-200/50 gap-6 w-[92vw] max-w-[440px]">
          <div className="font-extrabold text-lg tracking-tighter flex items-center gap-2 text-[#0D9488]">
            <Star className="w-5 h-5 fill-current" />
            PARTY TIME
          </div>
          <Link
            href="/admin"
            className="text-sm font-bold bg-zinc-900 text-white px-5 py-2.5 rounded-full hover:scale-105 active:scale-95 transition-all shadow-lg hover:shadow-xl"
          >
            Organizer Login
          </Link>
        </div>
      </nav>

      <main className="relative z-10 pt-32 md:pt-40 pb-20">

        {/* Hero Section */}
        <div className="container mx-auto px-4 md:px-6 text-center mb-16 md:mb-32">



          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.95] text-zinc-900 drop-shadow-sm animate-fade-in-up delay-100">
            The <span className="text-[#0D9488] inline-block relative">
              Departure Board
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#F59E0B] opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span> <br />
            for your next event.
          </h1>

          <p className="text-xl md:text-2xl text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed font-mdeium animate-fade-in-up delay-200">
            A digital signage system that actually looks good. <br className="hidden md:block" />
            Syncs instantly. Runs everywhere. Zero confusion.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center mb-24 animate-fade-in-up delay-300">
            <Link href="/board" className="group relative px-8 py-4 bg-[#0D9488] text-white rounded-2xl font-black text-xl transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(13,148,136,0.3)] shadow-[0_10px_20px_-10px_rgba(13,148,136,0.2)] flex items-center gap-3">
              Launch Board
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/features" className="px-8 py-4 bg-white text-zinc-600 border border-zinc-200 rounded-2xl font-bold text-xl hover:bg-zinc-50 hover:border-zinc-300 transition-all">
              See Features
            </Link>
          </div>

          {/* 3D Browser Preview */}
          <div className="relative w-full max-w-5xl mx-auto perspective-[1200px] group animate-fade-in-up delay-300">
            {/* Animated Aura */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#0D9488]/20 via-[#F59E0B]/20 to-transparent blur-[100px] -z-10 rounded-full opacity-60 pointer-events-none mix-blend-multiply" />

            <div className="relative rounded-2xl md:rounded-[2rem] border-[1px] border-zinc-200/50 bg-white/80 backdrop-blur-xl shadow-2xl overflow-hidden transform md:rotate-x-[8deg] transition-all duration-1000 ease-out group-hover:rotate-x-0 group-hover:scale-[1.02] animate-float">

              {/* Browser Chrome */}
              <div className="h-12 border-b border-zinc-100 grid grid-cols-[100px_1fr_100px] items-center px-4 bg-white/50">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-zinc-200" />
                  <div className="w-3 h-3 rounded-full bg-zinc-200" />
                  <div className="w-3 h-3 rounded-full bg-zinc-200" />
                </div>
                <div className="bg-zinc-100/50 px-4 py-1.5 rounded-lg flex items-center justify-center gap-2 text-xs font-medium text-zinc-400 w-full max-w-md mx-auto">
                  <Lock className="w-3 h-3" />
                  happening-now.live
                </div>
                <div />
              </div>

              {/* Viewport */}
              <div className="relative aspect-video bg-zinc-900 overflow-hidden">
                <div className="absolute inset-0 scale-[0.8] origin-center opacity-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700">
                  <LiveBoard />
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Features Bento Grid */}
        <section className="py-24 bg-white relative">
          <div className="container mx-auto px-6">
            <div className="text-start mb-16 max-w-xl">
              <h2 className="text-4xl md:text-5xl font-black text-zinc-900 mb-6">Features that <br /><span className="text-[#0D9488]">pop off the screen.</span></h2>
              <p className="text-lg text-zinc-500">Designed to be seen from the back of the room. Optimized for TVs, projectors, and mobile phones alike.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="group bg-[#F0FDFA] p-8 rounded-3xl border border-[#0D9488]/10 hover:border-[#0D9488]/30 transition-colors relative overflow-hidden">
                <Zap className="absolute -right-6 -bottom-6 w-48 h-48 text-[#0D9488]/5 rotate-12 group-hover:scale-110 transition-transform duration-500" />
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm text-[#0D9488]">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-2">Instant Sync</h3>
                <p className="text-zinc-500 mb-8 font-medium">Changes propagate in sub-100ms. Faster than you can blink.</p>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/50 rounded-full text-xs font-mono text-[#0D9488] font-bold">
                  <span className="w-2 h-2 rounded-full bg-[#0D9488] animate-pulse" />
                  LIVE CONNECTION
                </div>
              </div>

              {/* Card 2 */}
              <div className="group bg-[#FFFBEB] p-8 rounded-3xl border border-[#F59E0B]/10 hover:border-[#F59E0B]/30 transition-colors relative overflow-hidden">
                <Smartphone className="absolute -right-6 -bottom-6 w-48 h-48 text-[#F59E0B]/5 -rotate-6 group-hover:scale-110 transition-transform duration-500" />
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm text-[#F59E0B]">
                  <Smartphone className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-2">Mobile First</h3>
                <p className="text-zinc-500 mb-8 font-medium">Looks perfect on every attendee's phone. No app download needed.</p>
                <div className="flex gap-1">
                  <div className="w-6 h-8 rounded border border-[#F59E0B]/20 bg-white shadow-sm" />
                  <div className="w-6 h-8 rounded border border-[#F59E0B]/20 bg-white shadow-sm translate-y-1" />
                  <div className="w-6 h-8 rounded border border-[#F59E0B]/20 bg-white shadow-sm" />
                </div>
              </div>

              {/* Card 3 - Dark Mode */}
              <div className="group bg-zinc-900 p-8 rounded-3xl relative overflow-hidden md:col-span-1 text-white shadow-2xl shadow-zinc-900/20">
                <div className="absolute top-0 right-0 p-8 opacity-20">
                  <Monitor className="w-32 h-32 rotate-12" />
                </div>
                <div className="relative z-10 h-full flex flex-col">
                  <h3 className="text-2xl font-bold mb-2">TV Mode</h3>
                  <p className="text-zinc-400 mb-auto font-medium">Turn any screen into a digital signage board.</p>

                  <div className="mt-8 pt-4 border-t border-white/10">
                    <div className="text-4xl font-black tracking-widest font-mono text-zinc-700 group-hover:text-white transition-colors duration-500">
                      12:45
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Zig Zag Section */}
        <section className="py-24 container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16 mb-32">
            <div className="flex-1">
              <div className="inline-block px-3 py-1 rounded-full bg-[#0D9488]/10 text-[#0D9488] font-bold text-xs tracking-wider mb-6">FOR ORGANIZERS</div>
              <h2 className="text-4xl font-black text-zinc-900 mb-6">Total Control.</h2>
              <p className="text-lg text-zinc-500 leading-relaxed mb-8">
                Things run late. Speakers go over. With one click, shift your entire schedule. Keep everyone on the same page without printing a single new flyer.
              </p>
              <Link href="/features" className="text-[#0D9488] font-bold hover:underline flex items-center gap-2 group">
                Explore Organizer Tools <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="flex-1 bg-white p-2 rounded-3xl shadow-xl shadow-zinc-200/50 border border-zinc-100 rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="bg-zinc-50 rounded-2xl p-8 aspect-video flex items-center justify-center">
                <Clock className="w-24 h-24 text-zinc-300" />
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center gap-16">
            <div className="flex-1">
              <div className="inline-block px-3 py-1 rounded-full bg-[#F59E0B]/10 text-[#F59E0B] font-bold text-xs tracking-wider mb-6">FOR ATTENDEES</div>
              <h2 className="text-4xl font-black text-zinc-900 mb-6">Always Connected.</h2>
              <p className="text-lg text-zinc-500 leading-relaxed mb-8">
                Attendees can see what's happening now, what's next, and where they need to be. It reduces anxiety and increases session attendance.
              </p>
              <Link href="/features" className="text-[#F59E0B] font-bold hover:underline flex items-center gap-2 group">
                See Attendee Experience <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="flex-1 bg-white p-2 rounded-3xl shadow-xl shadow-zinc-200/50 border border-zinc-100 -rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="bg-zinc-50 rounded-2xl p-8 aspect-video flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-[#F59E0B]/5" />
                <Users className="w-24 h-24 text-zinc-300 relative z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-zinc-900 text-white rounded-[2.5rem] mx-4 md:mx-6 overflow-hidden relative">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0D9488] rounded-full blur-[128px] opacity-20 translate-x-1/2 -translate-y-1/2" />

          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-8">Ready to run the show?</h2>
            <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Join thousands of event organizers who trust Happening Now to keep their events on track.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/admin" className="px-8 py-4 bg-white text-zinc-900 rounded-full font-bold text-lg hover:bg-zinc-100 highlight-white/10 transition-all">
                Start for Free
              </Link>
              <Link href="/features" className="px-8 py-4 bg-transparent border border-zinc-700 text-white rounded-full font-bold text-lg hover:bg-zinc-800 transition-all">
                View Demo
              </Link>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-[#F0F4F8] pt-20 pb-10 text-zinc-500">
        <div className="container mx-auto px-6">
          <div className="border-t border-zinc-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="w-6 h-6 bg-[#0D9488] rounded-lg" />
              <span className="font-bold text-zinc-800">Happening Now</span>
            </div>
            <div className="flex gap-8 text-sm font-medium">
              <Link href="/features" className="hover:text-[#0D9488] transition-colors">Features</Link>
              <Link href="#" className="hover:text-[#0D9488] transition-colors">Pricing</Link>
              <Link href="#" className="hover:text-[#0D9488] transition-colors">Login</Link>
            </div>
            <div className="text-sm">
              © {new Date().getFullYear()}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
