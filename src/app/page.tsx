import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Tool } from '@/components/Tool';
import { Work } from '@/components/Work';
import { Connect } from '@/components/Connect';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-paper text-espresso overflow-x-hidden">
      {/* Subtle warm ambient wash for Hero section */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-[640px] pointer-events-none -z-10 opacity-60 bg-[radial-gradient(ellipse_at_top,_var(--color-rose-soft)_0%,_transparent_70%)]" 
        aria-hidden="true"
      />

      {/* Main Content Flow */}
      <main>
        <Hero />
        <About />
        <Tool />
        <Work />
        <Connect />
      </main>

      <Footer />
    </div>
  );
}
