"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";

const resources = [
    {
        title: "CNG Cylinder Testing Protocol",
        description: "Comprehensive guide to safety protocols and regulatory requirements for periodic cylinder maintenance.",
        gradient: "from-blue-400 to-cyan-300",
        link: "#"
    },
    {
        title: "Hydrogen Fuel Safety Standards",
        description: "Understanding the emerging safety standards for hydrogen fuel storage and distribution networks.",
        gradient: "from-green-400 to-emerald-300",
        link: "#"
    },
    {
        title: "Industrial Gas Distribution",
        description: "Best practices for managing large-scale industrial gas distribution infrastructure efficiently.",
        gradient: "from-purple-400 to-pink-300",
        link: "#"
    }
];

export function ResourcesSection() {
    return (
        <section id="resources" className="py-20 w-full md:w-[96%] mx-auto px-4 md:px-0">
            <FadeIn>
                <div className="flex justify-between items-end mb-12">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold">Latest resources</h2>
                    <Link href="/blogs" className="hidden md:flex items-center gap-2 text-lg hover:underline">
                        View all <ArrowUpRight className="w-5 h-5" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {resources.map((resource, index) => (
                        <Link
                            href={resource.link}
                            key={index}
                            className="group relative bg-[#f5f5f7] rounded-[2.5rem] p-8 md:p-10 h-[500px] flex flex-col justify-between overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                        >
                            {/* Hover Arrow */}
                            <div className="absolute top-8 right-8 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center opacity-100 translate-y-0 md:opacity-0 md:translate-y-4 transition-all duration-300 md:group-hover:opacity-100 md:group-hover:translate-y-0 z-10">
                                <ArrowUpRight className="w-5 h-5" />
                            </div>

                            <div>
                                <h3 className="text-2xl md:text-3xl font-serif font-medium leading-tight mb-6 text-[#1d1d1f]">
                                    {resource.title}
                                </h3>
                                <p className="text-lg text-gray-500 leading-relaxed">
                                    {resource.description}
                                </p>
                            </div>

                            {/* Bottom Graphic */}
                            <div className="flex justify-center mt-auto pt-10">
                                <div className={`w-48 h-48 rounded-full bg-gradient-to-br ${resource.gradient} blur-sm opacity-80 group-hover:scale-110 transition-transform duration-500 shadow-2xl`}></div>
                            </div>
                        </Link>
                    ))}
                </div>
                {/* 
                <div className="mt-8 text-center md:hidden">
                    <Link href="/blogs" className="inline-flex items-center gap-2 text-lg font-medium">
                        View all resources <ArrowUpRight className="w-5 h-5" />
                    </Link>
                </div> */}
            </FadeIn>
        </section>
    );
}
