import { ArrowRight, Rocket, Star } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <div className="relative min-h-[90vh] overflow-hidden">
      {/* 3D scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/6oV8c3QMSd1yHSnZ/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlay (non-blocking for pointer events) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/30 via-neutral-950/50 to-neutral-950" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-40 pb-24">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
          <Star className="h-3.5 w-3.5 text-yellow-300" />
          Trusted by brands and businesses
        </div>
        <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight">
          We craft marketing that converts
        </h1>
        <p className="mt-4 max-w-2xl text-base md:text-lg text-white/80">
          From personal brands to enterprises — we design, build, and scale digital presence
          that drives leads, boosts awareness, and grows revenue.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-white text-neutral-900 px-5 py-3 text-sm font-medium hover:bg-white/90"
          >
            <Rocket className="h-4 w-4" /> Book a Call
          </a>
          <a
            href="#work"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium hover:bg-white/10"
          >
            View Our Work <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* Logos */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center opacity-80">
          {["Acme Co","Nova Labs","Pioneer","Vertex","Lumina","Northstar"].map(label => (
            <div key={label} className="flex items-center justify-center">
              <span className="text-white/60 text-sm">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
