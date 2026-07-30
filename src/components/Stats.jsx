import Image from 'next/image';

export default function Stats() {
  return (
    <section className="w-full bg-black py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col items-start mb-12">
          <p className="text-gray-400 text-xl md:text-2xl font-medium mb-3 tracking-wide">
            The reason why Blackcoffer stands out
          </p>
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Blackcoffer Unfolds Solutions To Everything
          </h2>
        </div>

        <div className="w-full flex justify-center">
          <Image
            src="/images/Group 45.png"
            alt="Blackcoffer Statistics"
            width={1309}
            height={660}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
