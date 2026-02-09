"use client";

import { MotionDiv, fadeIn } from "./Motion";

export default function Footer() {
  return (
    <MotionDiv variants={fadeIn}>
      <footer className="bg-background-dark text-white pt-24 pb-12 px-6 lg:px-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
                <div>
                    <div className="flex items-center gap-3 mb-8">
                        <div className="size-6 text-primary">
                            <svg fill="currentColor" viewBox="0 0 48 48">
                                <path
                                    d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z">
                                </path>
                            </svg>
                        </div>
                        <h2 className="text-xl font-black uppercase tracking-widest">COREKEYS</h2>
                    </div>
                    <p className="text-white/40 leading-relaxed text-sm mb-8">The world's most sophisticated platform for
                        luxury real estate, connecting elite buyers with architectural masterpieces.</p>
                    <div className="flex gap-4">
                        <a className="size-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all"
                            href="#">
                            <span className="material-symbols-outlined text-[18px]">public</span>
                        </a>
                        <a className="size-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all"
                            href="#">
                            <span className="material-symbols-outlined text-[18px]">share</span>
                        </a>
                        <a className="size-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all"
                            href="#">
                            <span className="material-symbols-outlined text-[18px]">camera</span>
                        </a>
                    </div>
                </div>
                <div>
                    <h5 className="text-xs font-black uppercase tracking-widest mb-8 text-accent">Properties</h5>
                    <ul className="space-y-4 text-sm text-white/50">
                        <li><a className="hover:text-primary transition-colors" href="#">Featured Villas</a></li>
                        <li><a className="hover:text-primary transition-colors" href="#">Oceanfront Penthouses</a></li>
                        <li><a className="hover:text-primary transition-colors" href="#">Mountain Retreats</a></li>
                        <li><a className="hover:text-primary transition-colors" href="#">City Mansions</a></li>
                    </ul>
                </div>
                <div>
                    <h5 className="text-xs font-black uppercase tracking-widest mb-8 text-accent">Company</h5>
                    <ul className="space-y-4 text-sm text-white/50">
                        <li><a className="hover:text-primary transition-colors" href="#">Our Story</a></li>
                        <li><a className="hover:text-primary transition-colors" href="#">Global Offices</a></li>
                        <li><a className="hover:text-primary transition-colors" href="#">Careers</a></li>
                        <li><a className="hover:text-primary transition-colors" href="#">Contact Us</a></li>
                    </ul>
                </div>
                <div>
                    <h5 className="text-xs font-black uppercase tracking-widest mb-8 text-accent">Concierge</h5>
                    <ul className="space-y-4 text-sm text-white/50">
                        <li className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary text-sm">mail</span>
                            hello@corekeysrealestate.com
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary text-sm">call</span>
                            +1 (800) 555-COREKEYS
                        </li>
                    </ul>
                </div>
            </div>
            <div
                className="max-w-7xl mx-auto border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-white/20 text-xs tracking-widest uppercase">© 2024 COREKEYS International Realty.</p>
                <div className="flex gap-10 text-[10px] uppercase tracking-[0.2em] text-white/20">
                    <a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
                    <a className="hover:text-white transition-colors" href="#">Terms of Service</a>
                </div>
            </div>
      </footer>
    </MotionDiv>
  );
}
