import { useState } from 'react';
import { Briefcase, Download, Quote, Sparkles, User } from 'lucide-react';

const sampleProjects = [
  { id: 1, type: 'brands', title: 'Personal Brand Revamp', desc: 'Identity, content, and funnel setup', tag: 'Personal Brands' },
  { id: 2, type: 'business', title: 'E-commerce Growth', desc: 'SEO + ads scaling 3x ROAS', tag: 'Businesses' },
  { id: 3, type: 'projects', title: 'SaaS Product Launch', desc: 'Go-to-market and paid media', tag: 'Projects' },
  { id: 4, type: 'business', title: 'B2B Lead Engine', desc: 'LinkedIn ABM and webinars', tag: 'Businesses' },
];

const testimonials = [
  { id: 1, name: 'Ava Patel', role: 'Founder, Northstar', quote: 'Their strategy transformed our pipeline. Highly recommend!' },
  { id: 2, name: 'Liam Chen', role: 'CMO, Vertex', quote: 'A true partner from positioning to performance.' },
];

export default function Work() {
  const [tab, setTab] = useState('all');

  const tabs = [
    { key: 'all', label: 'All' },
    { key: 'brands', label: 'Personal Brands' },
    { key: 'business', label: 'Businesses' },
    { key: 'projects', label: 'Projects' },
  ];

  const filtered = tab === 'all' ? sampleProjects : sampleProjects.filter(p => p.type === tab);

  return (
    <section className="mx-auto max-w-7xl px-4 py-20">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Our Work</h2>
          <p className="mt-3 text-white/80 max-w-2xl">Campaigns, websites, content, and systems built to convert. Explore a selection below.</p>
        </div>
        <a href="#" className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"><Download className="h-4 w-4"/> Download Portfolio</a>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-2">
        {tabs.map(t => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`px-3 py-1.5 rounded-md text-sm border transition ${tab === t.key ? 'bg-white text-neutral-900 border-white' : 'bg-white/5 text-white/80 border-white/15 hover:bg-white/10'}`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map(item => (
          <div key={item.id} className="group rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition">
            <div className="h-40 rounded-lg bg-gradient-to-br from-fuchsia-500/30 to-blue-500/30" />
            <div className="mt-4 flex items-center gap-2 text-xs text-white/60">
              <Briefcase className="h-3.5 w-3.5"/> {item.tag}
            </div>
            <h3 className="mt-2 font-medium text-lg">{item.title}</h3>
            <p className="text-sm text-white/70">{item.desc}</p>
            <a href="#contact" className="mt-3 inline-block text-sm text-white/80 hover:text-white">Discuss this project →</a>
          </div>
        ))}
      </div>

      {/* Testimonials linked to work */}
      <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6">
        <div className="flex items-center gap-2 text-white/80"><Quote className="h-4 w-4"/> Client Testimonials</div>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {testimonials.map(t => (
            <figure key={t.id} className="rounded-xl border border-white/10 bg-neutral-950/60 p-5">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-fuchsia-500 to-blue-500" />
                <div>
                  <blockquote className="text-white/90">“{t.quote}”</blockquote>
                  <figcaption className="mt-2 text-sm text-white/60 flex items-center gap-2">
                    <User className="h-3.5 w-3.5"/> {t.name} · {t.role}
                  </figcaption>
                </div>
              </div>
            </figure>
          ))}
        </div>
        <div className="mt-6">
          <a href="#contact" className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"><Sparkles className="h-4 w-4"/> Start your project</a>
        </div>
      </div>
    </section>
  );
}
