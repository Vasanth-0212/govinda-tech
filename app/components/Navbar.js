"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    const handleScroll = () => {
        if (window.scrollY > window.innerHeight) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    // Smooth scroll handler
    const handleClick = (e, targetId) => {
        e.preventDefault();
        const target = document.getElementById(targetId);
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isGradientRoute = pathname === "/" || pathname === "/about";


    return (
        <nav
            className={`w-screen text-white shadow-md ${pathname === "/about" ? "bg-gradient-to-r from-red-500 to-blue-500" :
                    !scrolled && isGradientRoute
                        ? "bg-gradient-to-r from-red-500 to-blue-500"
                        : "bg-red-400"
                }`}
        >
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className={`text-2xl font-bold`} >Govinda Tech & Services</div>

                    <div className="flex space-x-8">
                        <p
                            href="#home"
                            onClick={() => {
                                router.push('/')
                            }}
                            className="text-white font-serif text-lg cursor-pointer"
                        >
                            Home
                        </p>

                        <p
                            onClick={() => {
                                router.push('/about')
                            }}
                            className="text-white font-serif text-lg cursor-pointer"
                        >
                            About Us
                        </p>

                        <p
                            onClick={() => {
                                router.push('/services')
                            }}
                            className="text-white font-serif text-lg cursor-pointer"
                        >
                            Services
                        </p>

                        <p
                            onClick={() => {
                                router.push('/clients')
                            }}
                            className="text-white font-serif text-lg cursor-pointer"
                        >
                            Clients
                        </p>

                        <a
                            href="#contact"
                            onClick={(e) => handleClick(e, "contact")}
                            className="text-white font-serif text-lg cursor-pointer"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
