"use client";

import { MotionDiv } from "./Motion";

export default function Newsletter() {
  return (
    <MotionDiv>
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto rounded-[3rem] bg-contrast relative overflow-hidden p-12 lg:p-24">
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                        <circle cx="100" cy="0" fill="white" r="80"></circle>
                    </svg>
                </div>
                <div className="relative z-10 text-center lg:text-left grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-serif text-white mb-8">Stay ahead of <br />the market</h2>
                        <p className="text-white/60 text-lg max-w-md">Get early access to off-market listings and exclusive
                            market insights delivered to your inbox.</p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-xl md:p-2 md:rounded-full border border-white/10 flex flex-col sm:flex-row gap-2">
                        <input
                            className="flex-1 bg-transparent border-none text-white placeholder:text-white/40 focus:ring-0 px-8 py-4"
                            placeholder="Email Address" type="email" />
                        <button
                            className="bg-accent text-contrast px-10 py-4 rounded-full font-black uppercase text-[10px] tracking-widest hover:scale-105 transition-all shadow-lg shadow-black/20">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
      </section>
    </MotionDiv>
  );
}
