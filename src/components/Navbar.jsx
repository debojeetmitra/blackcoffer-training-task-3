"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full bg-black text-white relative z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5 relative z-50 bg-black">


                <div className="flex items-center">
                    <Image
                        src="/images/logo.png"
                        alt="Blackcoffer Logo"
                        width={180}
                        height={45}
                        priority
                    />
                </div>


                <ul className="hidden lg:flex items-center gap-8 text-[15px] font-medium">
                    <li className="flex items-center gap-1 cursor-pointer">
                        Who We Are
                        <ChevronDown size={16} />
                    </li>
                    <li className="flex items-center gap-1 cursor-pointer">
                        What We Do
                        <ChevronDown size={16} />
                    </li>
                    <li className="flex items-center gap-1 cursor-pointer">
                        Insights
                        <ChevronDown size={16} />
                    </li>
                    <li className="flex items-center gap-1 cursor-pointer">
                        Careers
                        <ChevronDown size={16} />
                    </li>
                </ul>


                <div className="hidden lg:flex items-center gap-5">
                    <Search size={20} />
                    <Link href="/" className="font-semibold whitespace-nowrap">
                        Contact Us
                    </Link>
                </div>


                <button
                    className="lg:hidden flex items-center justify-center p-2 text-white"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>


            <div
                className={`lg:hidden fixed top-0 right-0 h-full w-full bg-black transition-transform duration-300 ease-in-out transform flex flex-col pt-[120px] px-8 pb-8 z-40 ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="h-full overflow-y-auto pb-10">
                    <ul className="flex flex-col gap-6 text-lg font-medium">
                        <li className="flex items-center justify-between cursor-pointer border-b border-gray-800 pb-3 whitespace-nowrap">
                            <span>Who We Are</span>
                            <ChevronDown size={20} />
                        </li>
                        <li className="flex items-center justify-between cursor-pointer border-b border-gray-800 pb-3 whitespace-nowrap">
                            <span>What We Do</span>
                            <ChevronDown size={20} />
                        </li>
                        <li className="flex items-center justify-between cursor-pointer border-b border-gray-800 pb-3 whitespace-nowrap">
                            <span>Insights</span>
                            <ChevronDown size={20} />
                        </li>
                        <li className="flex items-center justify-between cursor-pointer border-b border-gray-800 pb-3 whitespace-nowrap">
                            <span>Careers</span>
                            <ChevronDown size={20} />
                        </li>

                        <li className="flex items-center gap-3 pt-4 cursor-pointer text-gray-300 whitespace-nowrap">
                            <Search size={20} />
                            <span>Search</span>
                        </li>
                        <li className="pt-4">
                            <Link href="/" className="font-semibold text-blue-400 whitespace-nowrap">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}