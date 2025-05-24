'use client';

import React from 'react';
import {
    Phone,
    Mail,
    MapPin,
    Clock
} from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white w-screen h-[92vh] px-6 py-16">
            {/* Top Content */}
            <div className="max-w-6xl mx-auto flex justify-between items-start space-x-12">
                {/* About */}
                <div className="space-y-4 w-1/4">
                    <h3 className="text-2xl font-semibold">About Us</h3>
                    <p className="text-base text-gray-200 leading-relaxed">
                        Govinda Tech & Services provides integrated fire safety and security solutions with
                        design, installation, and maintenance expertise tailored for commercial, residential, and industrial needs.
                    </p>
                </div>

                {/* Contact */}
                <div className="space-y-4 w-1/4">
                    <h3 className="text-2xl font-semibold">Contact Us</h3>
                    <div className="flex items-center space-x-2 text-base text-gray-200">
                        <Phone className="w-5 h-5 text-white mt-0.5" />
                        <span>+91 9030023435</span>
                    </div>
                    <div className="flex items-center space-x-2 text-base text-gray-200">
                        <Mail className="w-10 h-10 text-white mt-0.5"  />
                        <span>govindfireandsecuresystems@gmail.com</span>
                    </div>
                </div>

                {/* Address */}
                <div className="space-y-4 w-1/4">
                    <h3 className="text-2xl font-semibold">Address</h3>
                    <div className="flex items-start space-x-2 text-base text-gray-200">
                        <MapPin className="w-10 h-5 text-white mt-0.5" />
                        <span>8-1-284/04/632, OU Colony, Shaikpet, Hyderabad, Telangana</span>
                    </div>
                </div>

                {/* Hours */}
                <div className="space-y-4 w-1/4">
                    <h3 className="text-2xl font-semibold">Working Hours</h3>
                    <div className="flex items-center space-x-2 text-base text-gray-200">
                        <Clock className="w-5 h-5 text-white mt-0.5" />
                        <span>Mon - Sat, 9AM - 6PM</span>
                    </div>
                </div>
            </div>

            {/* Bottom Bar with Grid */}
            <div className="grid grid-cols-3 items-center mt-12 pt-6 border-t border-gray-800 max-w-6xl mx-auto">
                <div className="text-left text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} Govinda Tech & Services.
                </div>
                <div className="flex justify-center">
                    <img src="/logo.jpg" alt="Govinda Tech & Services Logo" className="w-48 h-36" />
                </div>
                <div className="text-right text-sm text-gray-500">
                    Designed by{' '}
                    <a
                        href="https://techlanditsolutions.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-500 hover:underline font-medium"
                    >
                        TechlandITsolutions
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
