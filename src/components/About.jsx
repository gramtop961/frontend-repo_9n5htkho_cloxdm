import { Award, BadgeCheck, Building2, HeartHandshake, Users } from 'lucide-react';

export default function About() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20">
      <div className="max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">About Us</h2>
        <p className="mt-3 text-white/80">
          We are a multi-disciplinary marketing studio helping brands and businesses launch, grow, and lead.
        </p>
      </div>

      {/* Mission, Vision, Story */}
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <h3 className="font-medium text-white flex items-center gap-2"><HeartHandshake className="h-4 w-4"/> Mission</h3>
          <p className="mt-2 text-sm text-white/70">Deliver measurable growth through strategy, content, performance, and design.</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <h3 className="font-medium text-white flex items-center gap-2"><Building2 className="h-4 w-4"/> Vision</h3>
          <p className="mt-2 text-sm text-white/70">Empower every client to own their category with remarkable customer experiences.</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <h3 className="font-medium text-white flex items-center gap-2"><Users className="h-4 w-4"/> Our Story</h3>
          <p className="mt-2 text-sm text-white/70">Started as a boutique team, today we partner with startups and enterprises worldwide.</p>
        </div>
      </div>

      {/* Team / Metrics */}
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <h4 className="font-medium">Team</h4>
          <div className="mt-4 grid grid-cols-3 gap-4">
            {[1,2,3].map(i => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="h-14 w-14 rounded-full bg-gradient-to-br from-fuchsia-500 to-blue-500" />
                <p className="mt-2 text-sm">Member {i}</p>
                <span className="text-xs text-white/60">Marketing</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <h4 className="font-medium">Company Timeline</h4>
          <ol className="mt-4 space-y-3 text-sm text-white/70">
            <li><span className="text-white">2019</span> — Founded the studio</li>
            <li><span className="text-white">2021</span> — 100+ projects delivered</li>
            <li><span className="text-white">2023</span> — Global client base</li>
          </ol>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <h4 className="font-medium">Awards & Certifications</h4>
          <div className="mt-4 space-y-3 text-sm">
            <div className="flex items-center gap-2 text-white/80"><Award className="h-4 w-4 text-yellow-300"/> Best Campaign 2023</div>
            <div className="flex items-center gap-2 text-white/80"><BadgeCheck className="h-4 w-4 text-emerald-300"/> Google Ads Certified</div>
            <div className="flex items-center gap-2 text-white/80"><BadgeCheck className="h-4 w-4 text-emerald-300"/> Meta Blueprint</div>
          </div>
        </div>
      </div>
    </section>
  );
}
