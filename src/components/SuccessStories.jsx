import React from 'react';

const stories = [
  {
    id: 1,
    date: '2024 March 17',
    title: 'Efficient Supply Chain Assessment: Overcoming Technical Hurdles for Web Application Development'
  },
  {
    id: 2,
    date: '2024 March 17',
    title: 'Streamlined Integration: Interactive Brokers API with Python for Desktop Trading Application'
  },
  {
    id: 3,
    date: '2024 June 12',
    title: 'Empowering Retail: Data-Driven Inventory Optimization and Predictive Analytics'
  },
  {
    id: 4,
    date: '2024 April 23',
    title: 'Modernizing Legacy Systems: Cloud Migration and Serverless Architecture for FinTech'
  },
  {
    id: 5,
    date: '2024 May 17',
    title: 'Revolutionizing Healthcare: AI-Powered Diagnostics and Patient Management System'
  }
];

const SuccessStories = () => {
  // Duplicated array to create a seamless infinite marquee effect
  const duplicatedStories = [...stories, ...stories];

  return (
    <section className="bg-black text-white py-16 px-6 md:px-12 lg:px-24 overflow-hidden flex flex-col relative font-sans">
      <style>
        {`
          @keyframes scroll-marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .marquee-container {
            display: flex;
            width: max-content;
            animation: scroll-marquee 30s linear infinite;
          }
          .marquee-container:hover {
            animation-play-state: paused;
          }
        `}
      </style>


      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 max-w-7xl w-full mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 md:mb-0 tracking-tight">Success Stories</h2>
        <a href="#" className="flex items-center text-sm md:text-base hover:underline font-medium">
          Read all stories
          <span className="ml-3 bg-blue-600 w-8 h-8 flex justify-center items-center">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </a>
      </div>


      <div className="relative w-full overflow-hidden max-w-7xl mx-auto">
        <div className="marquee-container gap-12 md:gap-24">
          {duplicatedStories.map((story, index) => (
            <div key={index} className="w-[280px] md:w-[400px] flex-shrink-0 flex flex-col">
              <p className="text-base md:text-lg font-semibold mb-6 text-gray-100">{story.date}</p>
              <h3 className="text-xl md:text-2xl font-bold leading-snug">
                {story.title}
              </h3>
            </div>
          ))}
        </div>
      </div>


      <div className="flex justify-end mt-12 gap-4 max-w-7xl w-full mx-auto">
        <button className="bg-[#1a1a1a] hover:bg-[#333] w-10 h-10 transition-colors flex justify-center items-center cursor-pointer" aria-label="Previous">
          <svg className="w-5 h-5 text-gray-300 hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button className="bg-[#1a1a1a] hover:bg-[#333] w-10 h-10 transition-colors flex justify-center items-center cursor-pointer" aria-label="Next">
          <svg className="w-5 h-5 text-gray-300 hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default SuccessStories;
