"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "./Motion";

export default function Featured() {
    return (
        <section className="py-32 px-6 lg:px-20 bg-background-light">
            <motion.div
                className="max-w-7xl mx-auto"
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-xl">
                        <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px]">Exceptional
                            Properties</span>
                        <h2 className="text-5xl font-serif mt-4 text-contrast">Featured Residencies</h2>
                        <p className="text-slate-500 mt-6 leading-relaxed">Discover our handpicked selection of
                            architectural masterpieces located in the world's most desirable neighborhoods.</p>
                    </div>
                    <div className="flex gap-4">
                        <button
                            className="size-14 border border-slate-200 text-contrast flex items-center justify-center rounded-full hover:border-primary hover:text-primary transition-all">
                            <span className="material-symbols-outlined">arrow_back</span>
                        </button>
                        <button
                            className="size-14 bg-primary text-white flex items-center justify-center rounded-full hover:bg-contrast transition-all shadow-xl shadow-primary/20">
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <motion.div variants={fadeUp}>
                        <div
                            className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500">
                            <div className="relative h-80 overflow-hidden">
                                <img alt="Emerald Peak Villa"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4EYaseddmTrd5me-TbAI-SD_WsrfPvgAAPxcdXI8UxHMFcXO7Vv-wcZGvDmxectF8--NpzJzBum3-0oLPQGOj0eO8Uz1_584vJEjqSmc92Q6Ioztbnefow22fMFyw0MNIEmQZp7a8vbOk6QUUFhZaFhBhvgZJezUSpGdn3LDDOQ6kJrmA1IkzjQ88pXiq3wTzoT0HakCgsncF6Dp7Iacue978lCYYZnuNYL87IQmQVwBl6wFztwLJBC9YTlfXMMbH9o7iOS_ytmc" />
                                <div className="absolute top-6 left-6">
                                    <span
                                        className="bg-accent text-contrast text-[10px] font-black uppercase px-3 py-1.5 rounded-full">New
                                        Construction</span>
                                </div>
                                <button
                                    className="absolute top-6 right-6 size-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center hover:bg-white hover:text-primary transition-all">
                                    <span className="material-symbols-outlined text-[20px]">favorite</span>
                                </button>
                            </div>
                            <div className="p-8">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <h4 className="text-2xl font-bold text-contrast mb-1">Emerald Peak Villa</h4>
                                        <div className="flex items-center text-slate-400 text-sm">
                                            <span className="material-symbols-outlined text-xs mr-1">location_on</span>
                                            Beverly Hills, CA
                                        </div>
                                    </div>
                                    <span className="text-xl font-bold text-primary">$12.4M</span>
                                </div>
                                <div className="flex border-t border-slate-50 pt-6 justify-between text-slate-600">
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary text-lg">bed</span>
                                        <span className="text-xs font-semibold uppercase tracking-wider">6 Beds</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary text-lg">bathtub</span>
                                        <span className="text-xs font-semibold uppercase tracking-wider">8 Baths</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary text-lg">straighten</span>
                                        <span className="text-xs font-semibold uppercase tracking-wider">8,2k sqft</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div variants={fadeUp}>
                        <div
                            className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500">
                            <div className="relative h-80 overflow-hidden">
                                <img alt="The Glass House"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAG8xH4xrxtShbA5WvZ8XLnPhjIHJsUVifmjG1j2GH4cntHKaWFkVYCc-IYrIhOQQrvXwdAkHB0maP0w4yBLxVE1m6q1-_m0UGj3eHGwFpB2N7YTIJ1nP3x03KZeqTNo-h6EDssQ00Gpj4XNWjS5rsKBkGhBPIhWsLoavMaKeF4JhCbNBwkYQJTj3wEiDnkTTB7UYhmM3xIFKZQpCe_XqH0rIDg7txY2qw43vBQZ_rKueOIgLVkCKENt5yUWpN1pD241f0RjwP-LME" />
                                <div className="absolute top-6 left-6">
                                    <span
                                        className="bg-primary text-white text-[10px] font-black uppercase px-3 py-1.5 rounded-full">Exclusive</span>
                                </div>
                                <button
                                    className="absolute top-6 right-6 size-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center hover:bg-white hover:text-primary transition-all">
                                    <span className="material-symbols-outlined text-[20px]">favorite</span>
                                </button>
                            </div>
                            <div className="p-8">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <h4 className="text-2xl font-bold text-contrast mb-1">Azure Shore Estate</h4>
                                        <div className="flex items-center text-slate-400 text-sm">
                                            <span className="material-symbols-outlined text-xs mr-1">location_on</span>
                                            Malibu, CA
                                        </div>
                                    </div>
                                    <span className="text-xl font-bold text-primary">$24.9M</span>
                                </div>
                                <div className="flex border-t border-slate-50 pt-6 justify-between text-slate-600">
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary text-lg">bed</span>
                                        <span className="text-xs font-semibold uppercase tracking-wider">5 Beds</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary text-lg">bathtub</span>
                                        <span className="text-xs font-semibold uppercase tracking-wider">6 Baths</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary text-lg">straighten</span>
                                        <span className="text-xs font-semibold uppercase tracking-wider">6,5k sqft</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div variants={fadeUp}>
                        <div
                            className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500">
                            <div className="relative h-80 overflow-hidden">
                                <img alt="Summit Ridge"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYjEwTL1-0phAwYRgncbmTtPRdXa2MXZz7NAd0KPtl5nn-JBxS_OGScs4YUUPpj9zb92dgkKui4uDO2lbfXf-79_lapD45ddrKnQVSV9KvXqaWv4paGaub1IteXo1ijdokMB0TI2EoURIwdz8O-jMYrTETP9bJtoVLeQlvm_yftiFK4Sl9KvwvFasoPkV-ur2vSeoKXO5QGyolWj9ImHYz435uey0OhDGXMjPdwpC1tO_NdJnE1L9c4yZIG7wyIWFD_8jRuEGrFZ8" />
                                <div className="absolute top-6 left-6">
                                    <span
                                        className="bg-subtle text-contrast text-[10px] font-black uppercase px-3 py-1.5 rounded-full">Reduced
                                        Price</span>
                                </div>
                                <button
                                    className="absolute top-6 right-6 size-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center hover:bg-white hover:text-primary transition-all">
                                    <span className="material-symbols-outlined text-[20px]">favorite</span>
                                </button>
                            </div>
                            <div className="p-8">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <h4 className="text-2xl font-bold text-contrast mb-1">Summit Ridge</h4>
                                        <div className="flex items-center text-slate-400 text-sm">
                                            <span className="material-symbols-outlined text-xs mr-1">location_on</span>
                                            Aspen, CO
                                        </div>
                                    </div>
                                    <span className="text-xl font-bold text-primary">$8.2M</span>
                                </div>
                                <div className="flex border-t border-slate-50 pt-6 justify-between text-slate-600">
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary text-lg">bed</span>
                                        <span className="text-xs font-semibold uppercase tracking-wider">7 Beds</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary text-lg">bathtub</span>
                                        <span className="text-xs font-semibold uppercase tracking-wider">9 Baths</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary text-lg">straighten</span>
                                        <span className="text-xs font-semibold uppercase tracking-wider">10,4k sqft</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
