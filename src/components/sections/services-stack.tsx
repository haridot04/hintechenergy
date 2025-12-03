"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";

const services = [
    {
        title: "CNG Cylinder Calibration",
        description: "Certified testing and calibration services for CNG cylinders ensuring safety standards. We provide comprehensive testing to meet all regulatory requirements.",
        image: "/images/service-1.jpg",
        link: "#"
    },
    {
        title: "High Pressure Tubing",
        description: "Expert installation and maintenance of high-pressure tubing systems. Our team ensures leak-proof and durable connections for optimal performance.",
        image: "/images/service-2.jpg",
        link: "#"
    },
    {
        title: "Cascade Maintenance",
        description: "Comprehensive maintenance solutions for CNG cascade systems. We ensure your storage systems operate at peak efficiency and safety.",
        image: "/images/service-3.jpg",
        link: "#"
    },
    {
        title: "CGD Custom Services",
        description: "Tailored solutions for City Gas Distribution networks and infrastructure. From planning to execution, we support your infrastructure growth.",
        image: "/images/hero-bg.png", // Reusing hero bg as placeholder for 4th service
        link: "#"
    }
];

export function ServicesStack() {
    return (
        <section className="relative z-30 bg-[#131212] text-[#f5f5dc] py-20" id="services">
            <div className="w-full md:w-[96%] mx-auto px-4 md:px-0">
                <FadeIn>
                    <header className="mb-20 text-center max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Services</h2>
                    </header>
                </FadeIn>

                <ul id="cards" className="list-none grid grid-cols-1 gap-[4vw] pb-[calc(4*1em)] mb-[4vw] w-full md:w-[60%] mx-auto">
                    {services.map((service, index) => (
                        <li
                            key={index}
                            className="card pt-[calc(var(--index)*1em)]"
                            style={{ "--index": index + 1 } as React.CSSProperties}
                        >
                            <div className="card-content bg-[#fffaf2] text-[#131212] rounded-[2rem] overflow-hidden flex flex-col items-center justify-center text-center gap-6 p-8 md:p-12 shadow-xl">
                                <div className="flex flex-col justify-center items-center gap-4 max-w-3xl">
                                    <h3 className="text-2xl md:text-4xl font-serif font-bold m-0">{service.title}</h3>
                                    <p className="text-lg md:text-xl font-light leading-relaxed opacity-80">{service.description}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <style jsx>{`
        :root {
          --card-height: 500px; /* Fixed height for consistency */
          --card-margin: 4vw;
          --card-top-offset: 1em;
          --numcards: 4;
        }

        #cards {
          grid-template-rows: repeat(var(--numcards), var(--card-height));
        }

        .card {
          position: sticky;
          top: 15vh; /* Adjusted top offset */
          padding-top: calc(var(--index) * var(--card-top-offset));
        }

        .card-content {
          height: var(--card-height);
          /* No min-height to strictly enforce uniformity */
        }

        @media (max-width: 768px) {
          :root {
            --card-height: 60vh;
          }
          
          .card {
            top: 10vh;
          }
        }

        /* Animation - Removed to ensure uniform sizing */
        /* The sticky positioning provides the stacking effect without scaling */
      `}</style>
        </section>
    );
}
