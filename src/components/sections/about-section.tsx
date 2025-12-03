"use client";

import React from "react";
import { Linkedin } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/ui/fade-in";

export function AboutSection() {
    return (
        <section id="about" className="py-20 w-full md:w-[96%] mx-auto px-4 md:px-0">
            <FadeIn>
                <div className="bg-[#008846] rounded-[3rem] overflow-hidden flex flex-col lg:flex-row">

                    {/* Left: Image */}
                    <div className="lg:w-1/2 relative h-[400px] lg:h-auto">
                        <div className="absolute inset-4 md:inset-8 rounded-[2rem] overflow-hidden bg-white/10">
                            <img
                                src="/images/team-meeting.jpg"
                                alt="Hintech Energy Team"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className=" lg:w-1/2 pr-8 md:pr-12 lg:pr-16 pl-8 md:pl-0 lg:pl-0 py-8 md:py-12 lg:py-16 text-white flex flex-col justify-center ">
                        <h2 className="text-5xl md:text-6xl font-serif mb-6">About us</h2>

                        <h3 className="text-xl md:text-2xl font-bold mb-6 opacity-90">
                            Engineering Clean Energy, One Cylinder at a Time.
                        </h3>

                        <div className="space-y-4 text-white/90 font-light leading-relaxed mb-10">
                            <p>
                                Hintech Energy is a DPIIT-recognized green-tech startup on a mission to redefine energy delivery through innovation, safety, and sustainability. Based in South India, we provide precision CNG and Hydrogen-based solutions — including calibration, maintenance, and custom CGD services — to both individuals and large-scale fuel distributors.
                            </p>
                            <p>
                                Proudly incubated at XLRI's XCEED accelerator and part of the Kerala Startup Mission, we combine grassroots innovation with global standards. As a PESO-approved entity, we place safety and integrity at the core of everything we do.
                            </p>
                        </div>

                        {/* Founders */}
                        <div className="flex flex-col gap-4 md:flex-row md:gap-8 md:border md:border-white/30 md:rounded-full md:p-2 md:bg-white/5 md:backdrop-blur-sm">

                            {/* Founder 1 */}
                            <div className="flex items-center gap-4 flex-1 border border-white/30 rounded-full p-2 bg-white/5 backdrop-blur-sm md:border-0 md:bg-transparent md:p-0 md:pl-2">
                                <img
                                    src="/images/akshay.png"
                                    alt="Akshay S"
                                    className="w-12 h-12 rounded-full object-cover bg-white/20"
                                />
                                <div className="flex flex-col">
                                    <span className="font-bold leading-none">Akshay S</span>
                                    <span className="text-xs text-white/70">Cofounder</span>
                                </div>
                                <Link href="https://www.linkedin.com/in/akshay-s-7b3279181/" className="ml-auto mr-4 text-white hover:text-white/80 transition-colors">
                                    <Linkedin className="w-6 h-6 fill-current" />
                                </Link>
                            </div>

                            {/* Divider */}
                            <div className="hidden md:block w-px bg-white/30 my-2"></div>

                            {/* Founder 2 */}
                            <div className="flex items-center gap-4 flex-1 border border-white/30 rounded-full p-2 bg-white/5 backdrop-blur-sm md:border-0 md:bg-transparent md:p-0 md:pl-2">
                                <img
                                    src="/images/sonal.png"
                                    alt="Sonal Rajesh"
                                    className="w-12 h-12 rounded-full object-cover bg-white/20"
                                />
                                <div className="flex flex-col">
                                    <span className="font-bold leading-none">Sonal Rajesh</span>
                                    <span className="text-xs text-white/70">Cofounder</span>
                                </div>
                                <Link href="https://www.linkedin.com/in/sonal-rajesh/" className="ml-auto mr-4 text-white hover:text-white/80 transition-colors">
                                    <Linkedin className="w-6 h-6 fill-current" />
                                </Link>
                            </div>

                        </div>

                    </div>
                </div>
            </FadeIn>
        </section >
    );
}
