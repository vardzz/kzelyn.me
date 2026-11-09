import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Tool } from '@/components/Tool';
import { Work } from '@/components/Work';
import { Connect } from '@/components/Connect';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-paper text-espresso overflow-x-hidden">
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
