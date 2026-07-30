import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center bg-[#050505] overflow-hidden py-24 lg:py-32">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Hero-bg.png"
          alt="Hero Background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full flex flex-col lg:flex-row items-start lg:items-center justify-between gap-16 lg:gap-8">
        
        {/* Left Column */}
        <div className="w-full lg:w-[60%] flex flex-col">
          <h1 className="text-white font-bold text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[5.5rem] leading-[1.1] tracking-wide flex flex-col">
            <span className="text-left">TOGETHER WE</span>
            <span className="text-left ml-[15%] md:ml-[25%] lg:ml-[20%] mt-2 lg:mt-4">REINVENTED</span>
          </h1>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-[40%] flex flex-col lg:pl-10">
          {/* Blue Line */}
          <div className="w-16 h-1.5 bg-[#1a44ff] mb-8"></div>
          
          {/* Paragraph */}
          <div className="text-gray-200 text-base sm:text-lg leading-relaxed font-light mb-10 max-w-md">
            Together, we can reinvent your business.
            Reinvention is about breaking industry norms.
            Our wide range of capabilities, ecosystem
            partnerships and unmatched industry expertise
            can help your business become the next best
            version of itself.
          </div>

          {/* Link / Button */}
          <Link href="#" className="flex items-center gap-4 text-white font-semibold text-lg group w-fit">
            <span>See what we do</span>
            <div className="w-8 h-8 bg-[#1a44ff] flex items-center justify-center transition-transform group-hover:translate-x-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}