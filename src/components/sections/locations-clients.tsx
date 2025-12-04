"use client";

import React, { useState } from "react";
import { ArrowUpRight, ChevronDown, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FadeIn } from "@/components/ui/fade-in";
import Image from "next/image";

const locations = {
    palakkad: {
        name: "Palakkad",
        image: "/images/service-1.jpg", // Placeholder
        services: [
            "CNG Cylinder Calibration",
            "High Pressure Tubing",
            "CNG Cascade Maintenance",
            "Customised CGD Services"
        ],
        link: "#"
    },
    vadakara: {
        name: "Vadakara",
        image: "/images/service-2.jpg", // Placeholder
        services: [
            "Hydrostatic Testing",
            "Cascade Storage Solutions",
            "Safety Audits",
            "Emergency Support"
        ],
        link: "#"
    }
};

export function LocationsClientsSection() {
    const [selectedLocation, setSelectedLocation] = useState<keyof typeof locations>("palakkad");

    const currentLocation = locations[selectedLocation];

    return (
        <section className="py-20 w-full md:w-[96%] mx-auto px-4 md:px-0">
            <FadeIn>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                    {/* Locations Card (Takes up 2 columns) */}
                    <div className="lg:col-span-2 bg-[#008846] rounded-[2.5rem] p-8 md:p-12 text-white overflow-hidden relative">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                            <h2 className="text-4xl md:text-5xl font-serif">Locations</h2>

                            {/* Location Dropdown */}
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-3 text-lg font-medium transition-all outline-none">
                                        <MapPin className="w-5 h-5" />
                                        {currentLocation.name}
                                        <ChevronDown className="w-5 h-5 opacity-70" />
                                    </button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="w-48 bg-white rounded-xl p-2">
                                    <DropdownMenuItem
                                        className="text-lg p-3 cursor-pointer rounded-lg hover:bg-slate-100"
                                        onClick={() => setSelectedLocation("palakkad")}
                                    >
                                        Palakkad
                                    </DropdownMenuItem>
                                    <DropdownMenuItem
                                        className="text-lg p-3 cursor-pointer rounded-lg hover:bg-slate-100"
                                        onClick={() => setSelectedLocation("vadakara")}
                                    >
                                        Vadakara
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>

                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            {/* Location Image */}
                            <div className="w-full md:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden bg-black/20">
                                <img
                                    key={selectedLocation} // Force re-render for animation
                                    src={currentLocation.image}
                                    alt={currentLocation.name}
                                    className="w-full h-full object-cover animate-in fade-in duration-500"
                                />
                            </div>

                            {/* Services List */}
                            <div className="w-full md:w-1/2 flex flex-col justify-center">
                                <h3 className="text-2xl font-serif mb-6">Services Available</h3>
                                <ul className="space-y-3 mb-8">
                                    {currentLocation.services.map((service, index) => (
                                        <li key={index} className="flex items-start gap-2 text-white/90 font-light">
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                                            {service}
                                        </li>
                                    ))}
                                </ul>

                                <Button asChild className="w-fit rounded-full bg-black text-white hover:bg-black/80 border-none px-8 h-14 text-lg group">
                                    <a href="https://calendly.com/hintechenergy/booking" className="flex items-center gap-2">
                                        Book Now
                                        <ArrowUpRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Clients Card (Takes up 1 column) */}
                    <div className="lg:col-span-1 bg-[#fffaf2] rounded-[2.5rem] p-8 md:p-12 flex flex-col">
                        <h2 className="text-4xl md:text-5xl font-serif text-[#1d1d1f] mb-12">Our Clients</h2>

                        {/* Clients Grid - Optimized for future additions */}
                        <div className="flex-1 flex items-center justify-center">
                            <div className="grid grid-cols-1 gap-8 w-full">
                                {/* Client 1: IOAG */}
                                <div className="flex flex-col items-center justify-center gap-4 group">
                                    <div className="w-32 h-32 rounded-full bg-white shadow-sm flex items-center justify-center p-4 group-hover:scale-105 transition-transform duration-300 overflow-hidden relative">
                                        <Image
                                            src="/images/ioag_logo.png"
                                            alt="IndianOil-Adani Gas Pvt. Ltd."
                                            fill
                                            className="object-contain p-2"
                                        />
                                    </div>
                                    <span className="text-center text-sm font-medium text-gray-500">IndianOil-Adani Gas Pvt. Ltd.</span>
                                </div>

                                {/* Future clients can be added here as more divs */}
                            </div>
                        </div>
                    </div>

                </div>
            </FadeIn>
        </section>
    );
}
