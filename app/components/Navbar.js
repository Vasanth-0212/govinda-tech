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

    const isHome = pathname === "/";


    return (
        <nav
            className={`w-screen text-white shadow-md ${!scrolled && isHome
                ? "bg-transparent"
                : !isHome ? "bg-gradient-to-r from-red-100 to-blue-100"
                    : "bg-blue-400"
                }`}
        >
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className={`text-3xl font-nova-round font-bold ${!isHome && "text-gray-600"} `} >GOVINDA TECH & SERVICES</div>

                    <div className="flex space-x-8">
                        <p
                            href="#home"
                            onClick={() => {
                                router.push('/')
                            }}
                            className={`font-serif text-lg cursor-pointer ${!isHome ? "text-gray-600" : "text-white"}`}
                        >
                            Home
                        </p>

                        <p
                            onClick={() => {
                                router.push('/about')
                            }}
                            className={`font-serif text-lg cursor-pointer ${!isHome ? "text-gray-600" : "text-white"}`}
                        >
                            About Us
                        </p>

                        <p
                            onClick={() => {
                                router.push('/services')
                            }}
                            className={`font-serif text-lg cursor-pointer ${!isHome ? "text-gray-600" : "text-white"}`}
                        >
                            Services
                        </p>

                        <p
                            onClick={() => {
                                router.push('/clients')
                            }}
                            className={`font-serif text-lg cursor-pointer ${!isHome ? "text-gray-600" : "text-white"}`}
                        >
                            Clients
                        </p>

                        {pathname === "/" && (
                            <a
                                href="#contact"
                                onClick={(e) => handleClick(e, "contact")}
                                className="text-white font-serif text-lg cursor-pointer"
                            >
                                Contact Us
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}
