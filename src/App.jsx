import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Simple top navigation */}
      <header className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled ? 'bg-neutral-950/80 backdrop-blur border-b border-white/10' : 'bg-transparent'
      }`}>
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-fuchsia-500 to-blue-500" />
            <span className="font-semibold tracking-tight">Flames Marketing</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#home" className="hover:text-white">Home</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#work" className="hover:text-white">Our Work</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white text-neutral-900 text-sm font-medium hover:bg-white/90">
            Request Quote
          </a>
        </div>
      </header>

      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about" className="scroll-mt-24">
          <About />
        </section>
        <section id="work" className="scroll-mt-24">
          <Work />
        </section>
        <section id="contact" className="scroll-mt-24">
          <Contact />
        </section>
      </main>

      <footer className="border-t border-white/10 mt-16">
        <div className="mx-auto max-w-7xl px-4 py-10 text-sm text-white/60 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Flames Marketing. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a className="hover:text-white" href="#">Privacy</a>
            <a className="hover:text-white" href="#">Terms</a>
            <a className="hover:text-white" href="#">Cookies</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
