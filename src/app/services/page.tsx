import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Section } from "@/components/ui/section";
import { ServiceCard } from "@/components/ui/service-card";
import { Gauge, Settings, Wrench, Factory, Truck, ShieldCheck } from "lucide-react";

export default function ServicesPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <Section className="bg-slate-50 py-20">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-6">Our Services</h1>
                    <p className="text-lg text-muted-foreground">
                        Comprehensive energy solutions tailored to your needs. From calibration to maintenance, we handle it all with precision.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ServiceCard
                        title="CNG Cylinder Calibration"
                        description="State-of-the-art testing facility for CNG cylinder hydro-testing and certification."
                        icon={<Gauge className="h-10 w-10" />}
                    />
                    <ServiceCard
                        title="High Pressure Tubing"
                        description="Expert installation of SS tubing for high-pressure gas applications."
                        icon={<Settings className="h-10 w-10" />}
                    />
                    <ServiceCard
                        title="Cascade Maintenance"
                        description="Regular maintenance and refurbishment of CNG cascades for optimal performance."
                        icon={<Wrench className="h-10 w-10" />}
                    />
                    <ServiceCard
                        title="CGD Projects"
                        description="End-to-end execution of City Gas Distribution projects."
                        icon={<Factory className="h-10 w-10" />}
                    />
                    <ServiceCard
                        title="Logistics Support"
                        description="Safe and efficient transportation of hazardous goods and equipment."
                        icon={<Truck className="h-10 w-10" />}
                    />
                    <ServiceCard
                        title="Safety Audits"
                        description="Comprehensive safety audits and compliance checks for gas installations."
                        icon={<ShieldCheck className="h-10 w-10" />}
                    />
                </div>
            </Section>
            <Footer />
        </div>
    );
}
