import React from 'react';

const CTA = () => {
    return (
        <section className="w-full bg-[#1c1c1c] py-24 px-6 md:px-12 flex flex-col items-center justify-center text-center font-sans">
            <div className="max-w-3xl flex flex-col items-center">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase mb-8">
                    REQUEST A CALL BACK
                </h3>

                <h2 className="text-2xl md:text-3xl font-semibold">
                    Get your Business Right up There
                </h2>

                <p className="text-gray-300 text-sm md:text-base lg:text-lg mb-12 leading-relaxed max-w-2xl mx-auto">
                    When you need intelligent answers to your toughest questions, we're here to help. We're just a call or email away! Don't hang back from getting in touch with us. We'll be glad to assist you.
                </p>

                <button className="hover:opacity-80 transition-opacity cursor-pointer">
                    <img
                        src="/images/Frame 12.png"
                        alt="Request a Call Back"
                        className="w-auto h-auto max-w-[290px]"
                    />
                </button>
            </div>
        </section>
    );
};

export default CTA;
