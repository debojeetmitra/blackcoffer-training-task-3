import Link from "next/link";
import { Search, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="w-full bg-black text-white">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

                {/* Logo */}
                <div className="flex items-center">
                    <Image
                        src="/images/logo.png"
                        alt="Blackcoffer Logo"
                        width={180}
                        height={45}
                        priority
                    />
                </div>

                {/* Navigation */}
                <ul className="flex items-center gap-8 text-[15px] font-medium">

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

                {/* Right Side */}
                <div className="flex items-center gap-5">

                    <Search size={20} />

                    <Link href="/" className="font-semibold">
                        Contact Us
                    </Link>

                </div>

            </div>
        </nav>
    );
}