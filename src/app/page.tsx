import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Tool } from '@/components/Tool';
import { HorizontalScroller } from '@/components/HorizontalScroller';

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col font-inter bg-background text-primary-dark">
      {/* Background Elements */}
      <div className="absolute -top-[20%] -right-[10%] w-[1000px] h-[1000px] rounded-full opacity-90 z-0 bg-[radial-gradient(circle,#E1C1B1_0%,rgba(246,237,229,0)_70%)]"></div>
      <div className="absolute top-[15%] -right-[10%] w-[800px] h-[800px] rounded-full border border-white z-0 opacity-80"></div>
      <div className="absolute bottom-[15%] right-[32%] w-8 h-8 bg-[#B9664B] rounded-full z-10"></div>
      <div className="absolute bottom-0 left-0 w-[150px] h-[150px] opacity-40 z-0 bg-[radial-gradient(#C99886_15%,transparent_15%)]" style={{ backgroundSize: '20px 20px' }}></div>

      {/* Main Content */}
      <main className="flex flex-1 flex-col">
        <HorizontalScroller>
          <Hero />
          <About />
          <Tool />
        </HorizontalScroller>
      </main>
    </div>
  );
}
