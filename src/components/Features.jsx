import Image from 'next/image';

const features = [
    {
        id: 1,
        title: 'Improvement',
        icon: '/icons/Component 12.png',
    },
    {
        id: 2,
        title: 'Branching',
        icon: '/icons/Component 13.png',
    },
    {
        id: 3,
        title: 'Expertise',
        icon: '/icons/Component 14.png',
    },
    {
        id: 4,
        title: 'Consistency',
        icon: '/icons/Component 15.png',
    },
    {
        id: 5,
        title: 'Security',
        icon: '/icons/Component 16.png',
    },
    {
        id: 6,
        title: 'Transparency',
        icon: '/icons/Component 17.png',
    },
];

export default function Features() {
    return (
        <section className="w-full bg-black py-16 lg:py-24 text-white">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

                <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-14 tracking-tight">
                    What Makes Us Different
                </h2>


                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 justify-items-center">
                    {features.map((item) => (
                        <div key={item.id} className="flex flex-col items-center group cursor-pointer">
                            {/* Card Icon Container with Continuous Moving Silver Border Highlight */}
                            <div className="relative p-[1.5px] rounded-2xl overflow-hidden transition-all duration-300 ease-out group-hover:-translate-y-1.5 group-hover:shadow-lg group-hover:shadow-white/10 w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center">

                                {/* Rotating Conic Gradient for Subtle Silver Border Highlight */}
                                <div className="absolute inset-[-100%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_0deg,#262626_0%,#262626_70%,#e2e8f0_85%,#ffffff_92%,#262626_100%)] opacity-90" />


                                <div className="relative z-10 w-full h-full bg-[#18181b] rounded-[14px] flex items-center justify-center p-4">
                                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
                                        <Image
                                            src={item.icon}
                                            alt={item.title}
                                            width={56}
                                            height={56}
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                            </div>


                            <span className="mt-4 text-gray-300 font-medium text-sm sm:text-base text-center tracking-wide group-hover:text-white transition-colors duration-200">
                                {item.title}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
