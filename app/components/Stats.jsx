"use client";

import { MotionDiv, fadeIn } from "./Motion";

export default function Stats() {
  return (
    <MotionDiv variants={fadeIn}>
      <section className="bg-white border-b border-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-serif text-contrast">$4.2B+</h3>
            <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 mt-2 font-bold">
              Total Sales
            </p>
          </div>
          <div>
            <h3 className="text-4xl font-serif text-contrast">850+</h3>
            <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 mt-2 font-bold">
              Exclusive Listings
            </p>
          </div>
          <div>
            <h3 className="text-4xl font-serif text-contrast">12</h3>
            <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 mt-2 font-bold">
              Global Offices
            </p>
          </div>
          <div>
            <h3 className="text-4xl font-serif text-contrast">24/7</h3>
            <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 mt-2 font-bold">
              Client Service
            </p>
          </div>
        </div>
      </section>
    </MotionDiv>
  );
}
