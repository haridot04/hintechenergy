import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ui/service-card";
import { BlogCard } from "@/components/ui/blog-card";
import { ServicesStack } from "@/components/sections/services-stack";
import { AboutSection } from "@/components/sections/about-section";
import { ResourcesSection } from "@/components/sections/resources-section";
import { LocationsClientsSection } from "@/components/sections/locations-clients";
import Link from "next/link";
import { ArrowUpRight, Gauge, Settings, Wrench, Factory, CheckCircle2, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Combined Hero & Image Grid Section */}
      <section className="relative w-full flex flex-col md:h-screen md:min-h-[800px]">

        {/* Top Half: Hero Content */}
        <div className="w-full z-20 md:h-1/2 md:min-h-0">
          <div className="w-full md:w-[96%] mx-auto px-2 md:px-0 h-full">
            <div className="relative h-full w-full overflow-hidden rounded-t-[3rem] md:rounded-t-[4rem]">
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src="/images/hero-bg.png"
                  alt="Background"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white py-12 md:py-20 px-4">
                <FadeIn>
                  <h1 className="mb-6 text-4xl md:text-6xl lg:text-7xl font-serif tracking-tight">
                    Precision CNG Safety Solution
                  </h1>
                </FadeIn>
                <FadeIn delay={200}>
                  <p className="mx-auto mb-10 max-w-3xl text-lg md:text-2xl font-light text-white/90">
                    Empowering Clean Mobility: Advanced CNG Cylinder <br className="hidden md:inline" />
                    Calibration & Safety Solutions
                  </p>
                </FadeIn>
                <FadeIn delay={400}>
                  <div className="flex justify-center">
                    <Button size="lg" className="rounded-full bg-black text-white hover:bg-black/80 text-lg px-8 h-14 group">
                      Book Now <ArrowUpRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Half: Image Grid */}
        <div className="w-full relative z-10 md:h-1/2">
          <div className="w-full md:w-[96%] mx-auto px-2 md:px-0 h-full">
            <div className="grid grid-cols-1 md:grid-cols-3 h-full">
              {/* Card 1 - Left Column */}
              <div className="relative h-[300px] md:h-full w-full overflow-hidden group">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors z-10" />
                <img
                  src="/images/service-1.jpg"
                  alt="Safety Services"
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-0 left-0 p-6 md:p-8 text-white z-20">
                  <p className="text-lg font-medium">Safe, certified, and hassle-free services.</p>
                </div>
              </div>

              {/* Middle Column - Split Vertical */}
              <div className="flex flex-col h-[400px] md:h-full w-full">
                {/* Top: Service 2 */}
                <div className="relative flex-1 w-full overflow-hidden group">
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors z-10" />
                  <img
                    src="/images/service-2.jpg"
                    alt="CNG Station"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 p-6 md:p-8 text-white z-20">
                    <p className="text-lg font-medium">Committed to a greener tomorrow.</p>
                  </div>
                </div>

                {/* Bottom: Stats Box */}
                <div className="h-auto bg-[#002a15] text-white py-10 px-6 flex flex-col justify-center items-center text-center">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="flex -space-x-3">
                      <img src="/images/avatars.png" alt="Customer Satisfaction" className="h-10 w-auto object-contain" />
                    </div>
                    <div className="text-left">
                      <div className="text-2xl font-bold leading-none">98%</div>
                      <div className="text-xs text-slate-300">Customer Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3 - Right Column */}
              <div className="relative h-[300px] md:h-full w-full overflow-hidden group">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors z-10" />
                <img
                  src="/images/service-3.jpg"
                  alt="Advanced Facilities"
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-0 left-0 p-6 md:p-8 text-white z-20">
                  <p className="text-lg font-medium">Advanced facilities, close to you.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Stacking Cards */}
      <ServicesStack />

      {/* About Section */}
      <AboutSection />

      {/* Resources Section */}
      <ResourcesSection />

      {/* Locations & Clients Section */}
      <LocationsClientsSection />

      <Footer />
    </div>
  );
}
