import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Achievement } from '@/components/Achievement';
import { Connect } from '@/components/Connect';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-paper text-espresso overflow-x-hidden">
      {/* Main Content Flow */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Achievement />
        <Connect />
      </main>

      <Footer />
    </div>
  );
}
