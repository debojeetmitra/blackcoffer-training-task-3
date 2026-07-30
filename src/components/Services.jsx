import Image from 'next/image';

const services = [
  {
    id: 1,
    title: 'Big Data & Analytics',
    image: '/images/1.png',
    description:
      'Our consulting and strategic group offers Business Transformations, Information Technology Transformation and Human Resource Analytics Transformation.',
  },
  {
    id: 2,
    title: 'Consultancy',
    image: '/images/2.png',
    description:
      'Our consulting and strategic group offers Business Transformations, Information Technology Transformation and Human Resource Analytics Transformation.',
  },
  {
    id: 3,
    title: 'HR & staffing',
    image: '/images/3.png',
    description:
      'Our consulting and strategic group offers Business Transformations, Information Technology Transformation and Human Resource Analytics Transformation.',
  },
  {
    id: 4,
    title: 'Cybersecurity',
    image: '/images/4.png',
    description:
      'Our consulting and strategic group offers Business Transformations, Information Technology Transformation and Human Resource Analytics Transformation.',
  },
  {
    id: 5,
    title: 'Consultancy',
    image: '/images/5.png',
    description:
      'Our consulting and strategic group offers Business Transformations, Information Technology Transformation and Human Resource Analytics Transformation.',
  },
  {
    id: 6,
    title: 'Sustainability',
    image: '/images/6.png',
    description:
      'Our consulting and strategic group offers Business Transformations, Information Technology Transformation and Human Resource Analytics Transformation.',
  },
  {
    id: 7,
    title: 'Cloud',
    image: '/images/7.png',
    description:
      'Our consulting and strategic group offers Business Transformations, Information Technology Transformation and Human Resource Analytics Transformation.',
  },
  {
    id: 8,
    title: 'Metaverse',
    image: '/images/8.png',
    description:
      'Our consulting and strategic group offers Business Transformations, Information Technology Transformation and Human Resource Analytics Transformation.',
  },
];

export default function Services() {
  return (
    <section className="w-full bg-transparent py-16 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12">

        {/* Section Heading */}
        <h2 className="text-white text-2xl font-normal tracking-wide mb-8">
          Services
        </h2>

        {/* Card Grid — always 4 columns on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative w-full h-[350px] overflow-hidden cursor-pointer"
              style={{ maxWidth: '290px', margin: '0 auto' }}
            >
              {/* Background Image */}
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="290px"
                className="object-cover"
              />

              {/* Dark purple overlay — hidden by default, fades in on hover */}
              <div className="absolute inset-0 bg-[#2b1738] opacity-0 group-hover:opacity-80 transition-opacity duration-500 ease-in-out z-10" />

              {/* Card Content */}
              <div className="absolute inset-0 z-20 p-6 flex flex-col">

                {/* Description — slides in from left on hover */}
                <p className="mt-auto text-gray-200 text-sm leading-relaxed
                              opacity-0 -translate-x-10
                              group-hover:opacity-100 group-hover:translate-x-0
                              transition-all duration-500 ease-out">
                  {service.description}
                </p>

                {/* Expand button — slides up from bottom on hover */}
                <div className="mt-auto flex items-center
                                opacity-0 translate-y-8
                                group-hover:opacity-100 group-hover:translate-y-0
                                transition-all duration-500 ease-out">
                  <span className="text-white text-sm font-semibold">Expand</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1.5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
