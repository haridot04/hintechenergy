"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#services" },
    { name: "Blogs", href: "/#resources" },
    { name: "About", href: "/#about" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <header className="relative w-full z-50">
            <div className="w-full md:w-[96%] mx-auto px-2 md:px-0 flex h-20 items-center justify-between">
                {/* Logo - removed z so overlay can cover it */}
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center gap-2">
                        <img src="/images/logo.png" alt="Hintech Energy" className="h-10 w-auto" />
                    </Link>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-base font-medium text-muted-foreground transition-colors hover:text-primary"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* CTA Button */}
                <div className="hidden md:flex items-center">
                    <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-white px-6 group">
                        <Link href="#" className="flex items-center gap-2">
                            Contact Us <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </div>

                {/* Mobile Menu Toggle - removed z so overlay can cover page */}
                <button
                    className="md:hidden p-2"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? (
                        <X className="h-6 w-6 text-white" />
                    ) : (
                        <div className="flex flex-col gap-1.5 w-6">
                            <span className="block w-full h-0.5 bg-foreground"></span>
                            <span className="block w-full h-0.5 bg-foreground"></span>
                        </div>
                    )}
                </button>
            </div>

            {/* Mobile Nav Overlay */}
            {isOpen && (
                // Make overlay higher than header content so it covers & blurs everything.
                <div className="md:hidden fixed inset-0 z-[90] bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
                    {/* Close button sits above overlay content */}
                    <button
                        onClick={() => setIsOpen(false)}
                        aria-label="Close menu"
                        className="absolute top-6 right-6 p-2 rounded-md bg-white/10 backdrop-blur-sm"
                    >
                        <X className="h-6 w-6 text-white" />
                    </button>

                    <div className="flex flex-col h-full p-8 pt-32 justify-center items-center text-center">
                        <nav className="flex flex-col gap-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="text-4xl font-medium text-white hover:text-white/80 transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Link
                                href="#"
                                className="text-4xl font-medium text-white hover:text-white/80 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Contact
                            </Link>
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
}
