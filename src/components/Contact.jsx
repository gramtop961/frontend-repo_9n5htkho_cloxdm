import { Mail, MapPin, Phone, Send, Clock, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-20">
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Left: Info */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Contact</h2>
          <p className="mt-3 text-white/80">Let’s talk about your goals. Quick replies during working hours.</p>

          <div className="mt-8 space-y-4 text-sm">
            <div className="flex items-center gap-3 text-white/80"><Phone className="h-4 w-4"/> +1 (555) 123-4567</div>
            <div className="flex items-center gap-3 text-white/80"><Mail className="h-4 w-4"/> hello@flamesmarketing.com</div>
            <div className="flex items-center gap-3 text-white/80"><Clock className="h-4 w-4"/> Mon–Fri · 9:00–18:00</div>
            <div className="flex items-center gap-3 text-white/80"><MapPin className="h-4 w-4"/> 123 Market Street, Suite 12, San Francisco, CA</div>
          </div>

          {/* Quick CTAs */}
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="https://wa.me/15551234567" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md bg-emerald-400 text-neutral-900 px-4 py-2 text-sm font-medium hover:bg-emerald-300">
              <MessageCircle className="h-4 w-4"/> WhatsApp
            </a>
            <a href="#contact-form" className="inline-flex items-center gap-2 rounded-md bg-white text-neutral-900 px-4 py-2 text-sm font-medium hover:bg-white/90">Book a Call</a>
            <a href="#contact-form" className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-4 py-2 text-sm hover:bg-white/10">Request Quote</a>
          </div>

          {/* Map */}
          <div className="mt-8 overflow-hidden rounded-xl border border-white/10">
            <iframe
              title="office-map"
              className="h-56 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019538794957!2d-122.40136392344018!3d37.79228127198096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064f9d2f6fd%3A0x1e6f7411d3e5a1d3!2sMarket%20St%2C%20San%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000"
            />
          </div>
        </div>

        {/* Right: Form */}
        <div id="contact-form" className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-lg font-medium">Send us a message</h3>
          <form className="mt-4 grid gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-white/70">Name</label>
                <input className="mt-1 w-full rounded-md border border-white/15 bg-neutral-900 px-3 py-2 text-sm outline-none focus:border-white/30" placeholder="Your name" required />
              </div>
              <div>
                <label className="text-sm text-white/70">Email</label>
                <input type="email" className="mt-1 w-full rounded-md border border-white/15 bg-neutral-900 px-3 py-2 text-sm outline-none focus:border-white/30" placeholder="you@example.com" required />
              </div>
            </div>
            <div>
              <label className="text-sm text-white/70">Phone</label>
              <input className="mt-1 w-full rounded-md border border-white/15 bg-neutral-900 px-3 py-2 text-sm outline-none focus:border-white/30" placeholder="+1 555 000 0000" />
            </div>
            <div>
              <label className="text-sm text-white/70">Subject</label>
              <input className="mt-1 w-full rounded-md border border-white/15 bg-neutral-900 px-3 py-2 text-sm outline-none focus:border-white/30" placeholder="How can we help?" />
            </div>
            <div>
              <label className="text-sm text-white/70">Message</label>
              <textarea rows={5} className="mt-1 w-full rounded-md border border-white/15 bg-neutral-900 px-3 py-2 text-sm outline-none focus:border-white/30" placeholder="Tell us about your project" />
            </div>
            <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-md bg-white text-neutral-900 px-4 py-2 text-sm font-medium hover:bg-white/90">
              <Send className="h-4 w-4"/> Send Message
            </button>
            <p className="text-xs text-white/60">Prefer email? Reach us at <a className="underline" href="mailto:hello@flamesmarketing.com">hello@flamesmarketing.com</a></p>
          </form>
        </div>
      </div>

      {/* Floating chat/WhatsApp widget */}
      <a
        href="https://wa.me/15551234567"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 inline-flex items-center gap-2 rounded-full bg-emerald-400 text-neutral-900 px-4 py-2 text-sm font-medium shadow-lg hover:bg-emerald-300"
      >
        <MessageCircle className="h-4 w-4"/> Chat
      </a>
    </section>
  );
}
