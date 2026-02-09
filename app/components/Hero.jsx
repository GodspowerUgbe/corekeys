"use client";

import { motion } from "framer-motion";
import { fadeUp, scaleIn } from "./Motion";

export default function Hero() {
    return (
        <section className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXpr5G8sEu3GrZB5EdaZe4taPUXK86f7gX6BIQhF1j3smnchr-WeRpXF8K0n5qmNsTSE_Zv0BVygGKMXteGL10qgEXUdlf-I5rObUe7WhlYM99HBfr7uDgHDuLL4Oe7WE-DEZ4QJVthf1JBkbfoOfZROvyBsJcIKjfZ4uMQAb23GaWiiVseOy2Z8wOdKsxkFLm2Y1buheVvVGYDy8XWN_hLpoJqhl7xNHkfTpP3_0X35ydraNEqvJ5m18saD8CMoYgwU8Uy9YDtfw"
                    className="w-full h-full object-cover brightness-[0.45]"
                    alt="Luxury Villa"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-background-dark/80" />
            </div>

            <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="show"
                className="relative z-10 w-full max-w-7xl mx-auto px-4 mt-[-5vh]"
            >
                <span className="text-accent font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block">
                    Exclusively curated real estate
                </span>

                <h1 className="hero-title font-serif text-white mb-16 tracking-tight">
                    Refining <span className="italic font-light">The Art</span><br />
                    of Living
                </h1>

                <motion.div variants={scaleIn}>
                    <div
                    className="w-full max-w-4xl mx-auto bg-white rounded-xl  md:rounded-full shadow-2xl px-16 py-8 md:px-2 py-2 flex flex-col md:flex-row items-center gap-2 group transition-all duration-500 hover:scale-[1.01]">
                    <div className="w-60 flex-1 md:w-full flex items-center px-6 py-2 mx-auto ">
                        <span className="material-symbols-outlined text-primary/40 mr-3">location_on</span>
                        <input
                            className="w-40 md:w-full bg-transparent border-none text-slate-800 placeholder:text-slate-400 focus:ring-0 text-sm font-medium"
                            placeholder="Location" type="text" />
                    </div>
                    <div className="hidden md:block w-px h-8 bg-slate-100"></div>
                    <div className="flex-1 w-60 md:w-full flex items-center px-6 py-2">
                        <span className="material-symbols-outlined text-primary/40 mr-3">home_work</span>
                        <select
                            className="w-40 md:w-full bg-transparent border-none text-slate-800 focus:ring-0 text-sm font-medium appearance-none cursor-pointer">
                            <option>Property Type</option>
                            <option>Modern Villa</option>
                            <option>Penthouse</option>
                            <option>Mansion</option>
                        </select>
                    </div>
                    <div className="hidden md:block w-px h-8 bg-slate-100"></div>
                    <div className="flex-1 w-60 mx-auto md:w-full flex items-center px-6 py-2">
                        <span className="material-symbols-outlined text-primary/40 mr-3">payments</span>
                        <select
                            className="w-40 md:w-full bg-transparent border-none text-slate-800 focus:ring-0 text-sm font-medium appearance-none cursor-pointer">
                            <option>Price Range</option>
                            <option>$1M - $5M</option>
                            <option>$5M - $15M</option>
                            <option>$15M+</option>
                        </select>
                    </div>
                    <button
                        className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-full flex items-center justify-center gap-2 font-bold transition-all shadow-md">
                        <span className="material-symbols-outlined text-lg">search</span>
                        <span className="text-xs uppercase tracking-widest">Search</span>
                    </button>
                </div>
                    {/* SEARCH BAR — UNCHANGED */}
                    {/* paste block exactly as before */}
                </motion.div>
            </motion.div>
        </section>
    );
}
