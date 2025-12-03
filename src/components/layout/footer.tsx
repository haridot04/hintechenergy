"use client";

import Link from "next/link";
import { ArrowUpRight, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-[#131212] text-[#f5f5dc] py-20">
            <div className="w-full md:w-[96%] mx-auto px-4 md:px-0">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-20">

                    {/* Brand Column */}
                    <div className="md:col-span-5 flex flex-col justify-between h-full">
                        <div>
                            <Link href="/" className="flex items-center gap-2 mb-8">
                                <img src="/images/logo.png" alt="Hintech Energy" className="h-12 w-auto brightness-0 invert" />
                            </Link>
                            <h2 className="text-3xl md:text-4xl font-serif leading-tight mb-8 max-w-md">
                                Engineering safety and sustainability for a cleaner future.
                            </h2>
                        </div>
                        <div className="flex gap-4">
                            <Link href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">
                                <Linkedin className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">
                                <Twitter className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">
                                <Instagram className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Links Column 1 */}
                    <div className="md:col-span-2 md:col-start-7">
                        <h3 className="text-lg font-medium mb-6 text-white/50">Company</h3>
                        <ul className="space-y-4">
                            <li><Link href="/#about" className="text-lg hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/#resources" className="text-lg hover:text-white transition-colors">Blog</Link></li>
                            <li><Link href="/contact" className="text-lg hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Links Column 2 */}
                    <div className="md:col-span-2">
                        <h3 className="text-lg font-medium mb-6 text-white/50">Services</h3>
                        <ul className="space-y-4">
                            <li><Link href="/#services" className="text-lg hover:text-white transition-colors">Cylinder Testing</Link></li>
                            <li><Link href="/#services" className="text-lg hover:text-white transition-colors">Cascade Maintenance</Link></li>
                            <li><Link href="/#services" className="text-lg hover:text-white transition-colors">High Pressure Tubing</Link></li>
                            <li><Link href="/#services" className="text-lg hover:text-white transition-colors">CGD Services</Link></li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className="md:col-span-2">
                        <h3 className="text-lg font-medium mb-6 text-white/50">Get in Touch</h3>
                        <ul className="space-y-4">
                            <li className="text-lg">contact@hintechenergy.com</li>
                            <li className="text-lg">+91 97785 02991</li>
                            <li className="text-lg pt-4 text-white/70 leading-relaxed">Palakkad, Kerala</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
                    <p>© {new Date().getFullYear()} Hintech Energy. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
