import React from 'react';

export function Work() {
  const projects = [
    {
      title: 'Brand Awareness Campaign',
      description: 'Social media campaign that increased reach by 45%.',
      bgColor: 'bg-[#B65F46]', // reddish-orange
      textColor: 'text-white',
      descColor: 'text-white/90',
      iconBg: 'bg-white',
      iconColor: 'black',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Market Research Project',
      description: 'Gathered insights that guided product positioning and messaging.',
      bgColor: 'bg-[#C2C3AE]', // olive/gray-green
      textColor: 'text-primary-dark',
      descColor: 'text-primary-dark/80',
      iconBg: 'bg-primary-dark',
      iconColor: 'white',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Content Strategy Plan',
      description: 'Developed content calendars that improved audience engagement.',
      bgColor: 'bg-[#D5BAA6]', // light tan
      textColor: 'text-primary-dark',
      descColor: 'text-primary-dark/80',
      iconBg: 'bg-primary-dark',
      iconColor: 'white',
      image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=600&auto=format&fit=crop'
    }
  ];

  return (
    <section id="work" className="flex flex-col lg:flex-row w-screen shrink-0 h-[100dvh] px-6 lg:px-40 items-start lg:items-center justify-start lg:justify-between z-10 relative overflow-y-auto lg:overflow-hidden snap-center">
      
      <div className="flex flex-col w-full min-h-full lg:items-start pt-16 pb-32 lg:py-0 max-w-[1400px] mx-auto justify-center">
        
        {/* Header */}
        <div className="mb-6 lg:mb-12">
          <p className="font-montserrat text-[#B9664B] font-bold text-[12px] lg:text-[14px] tracking-[2px] uppercase mb-2 lg:mb-4">
            My Work
          </p>
          <h2 className="font-inter font-bold text-[40px] sm:text-[50px] lg:text-[60px] leading-[1.1] text-primary-dark tracking-[-1px]">
            Ideas I've<br />brought to life.
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 w-full">
          {projects.map((project, index) => (
            <div key={index} className={`relative w-full lg:flex-1 rounded-[24px] ${project.bgColor} overflow-hidden flex flex-row lg:flex-col items-center lg:items-start justify-between p-6 lg:p-8 h-[220px] lg:h-[450px] shadow-sm`}>
              
              <div className="flex flex-col w-[60%] lg:w-full h-full justify-between z-20">
                <div>
                  <h3 className={`${project.textColor} font-inter font-bold text-[17px] lg:text-[24px] mb-2 leading-[1.2]`}>
                    {project.title}
                  </h3>
                  <p className={`${project.descColor} font-inter text-[13px] lg:text-[15px] leading-snug`}>
                    {project.description}
                  </p>
                </div>
                <div className={`w-8 h-8 lg:w-12 lg:h-12 rounded-full ${project.iconBg} flex items-center justify-center mt-4 transition-transform hover:scale-105 cursor-pointer shadow-md`}>
                  <svg className="w-4 h-4 lg:w-6 lg:h-6" viewBox="0 0 24 24" fill="none" stroke={project.iconColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="19" x2="19" y2="5"></line>
                    <polyline points="9 5 19 5 19 15"></polyline>
                  </svg>
                </div>
              </div>
              
              {/* Image Section */}
              <div className="absolute right-[-20px] lg:right-[-20%] lg:bottom-[-10%] top-[10%] lg:top-auto w-[50%] lg:w-[120%] h-[120%] lg:h-[65%] rotate-[-10deg] lg:rotate-[-5deg] z-10 pointer-events-none">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover rounded-[16px] lg:rounded-[24px] shadow-2xl border-4 lg:border-[8px] border-[#222]/10" 
                />
              </div>

            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8 lg:mt-12 flex items-center justify-between w-full pt-4 lg:pt-0 pb-4 lg:pb-0 z-20">
          <span className="font-inter font-semibold text-[14px] lg:text-[16px] text-primary-dark">View More Projects</span>
          <button className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-primary-dark/30 flex items-center justify-center hover:bg-primary-dark/5 transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-dark">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>

        {/* Spacer for mobile navbar */}
        <div className="h-32 lg:h-0 w-full flex-shrink-0"></div>

      </div>
    </section>
  );
}
