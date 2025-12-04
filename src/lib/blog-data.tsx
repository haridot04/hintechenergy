import React from "react";

export interface BlogPost {
    slug: string;
    title: string;
    subtitle: string;
    author: string;
    authorImage: string;
    date: string;
    content: React.ReactNode;
    gradient: string;
}

export const blogPosts: BlogPost[] = [
    {
        slug: "proactive-safety-check-cng",
        title: "The Proactive Safety Check Every CNG Cylinder Needs.",
        subtitle: "Hydrostretch Testing reveals early signs of material fatigue and structural weakness, helping operators prevent failures, minimize downtime, and extend cylinder life.",
        author: "Hintech Team",
        authorImage: "/images/person.png", // Using logo as placeholder or I can use a generic avatar
        date: "December 4, 2025",
        gradient: "from-blue-400 to-cyan-300",
        content: (
            <>
                <p className="mb-6">
                    <strong>Hydrostretch Test: A Proactive Safety Measure, Not Just a Regulation in Ensuring Safety & Longevity of CNG Cascade Cylinders</strong>
                </p>
                <p className="mb-6">
                    Compressed Natural Gas (CNG) cascade cylinders operate under extreme pressure - making Hydrostretch Testing an essential part of any gas storage and distribution safety protocol. This test evaluates elastic expansion and structural integrity by applying hydraulic pressure beyond standard working limits. It's not just a compliance formality - it's a proactive safety assurance process.
                </p>

                <h3 className="text-2xl font-serif font-bold mb-4 mt-8">Why Hydrostretch Testing Matters:</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Detects material fatigue or wall thinning before failure.</li>
                    <li>Identifies micro-cracks, permanent elongation, and other structural weaknesses.</li>
                    <li>Confirms the cylinder's ability to return to its original shape post-pressurization.</li>
                    <li>Prevents unexpected cylinder failures that can lead to safety incidents, system downtime, or financial loss.</li>
                </ul>

                <h3 className="text-2xl font-serif font-bold mb-4 mt-8">Key Testing Parameters:</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Normal Operating Pressure:</strong> 200–250 bar</li>
                    <li><strong>Hydrostretch Test Pressure:</strong> 1.5× working pressure (≈ 300–375 bar)</li>
                    <li><strong>Testing Frequency:</strong> Every 3 years as per regulatory standards</li>
                    <li><strong>Cylinder Life:</strong> Typically 20 years, subject to periodic testing and approval</li>
                </ul>

                <p className="mb-6">
                    Hydrostretch testing is a vital step in maintaining safety, minimizing risk, and ensuring the reliable operation of high-pressure CNG systems. It supports long-term infrastructure integrity and is essential for any organization involved in city gas distribution, industrial gas supply, or fleet fueling systems.
                </p>
            </>
        )
    },
    {
        slug: "ultrasonic-flaw-detection-cng",
        title: "Ultrasonic Flaw Detection in CNG Cylinder.",
        subtitle: "Ultrasonic Testing uses high-frequency sound waves to detect internal cracks, voids, and wall thinning—ensuring CNG cylinders meet safety and compliance.",
        author: "Hintech Team",
        authorImage: "/images/person.png",
        date: "December 4, 2025",
        gradient: "from-green-400 to-emerald-300",
        content: (
            <>
                <p className="mb-6">
                    <strong>Ultrasonic Flaw Detection in CNG Cylinder Calibration — Why It Matters?</strong>
                </p>
                <p className="mb-6">
                    Ultrasonic Testing (UT) is a Non-Destructive Testing (NDT) technique that uses high-frequency sound waves (typically 0.5–15 MHz) to detect flaws inside solid materials.
                    It’s widely used in aerospace, oil & gas, power, and CNG cylinder calibration because it can identify internal defects without damaging the component.
                </p>

                <h3 className="text-2xl font-serif font-bold mb-4 mt-8">⚙️ How it Works</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Probe/Transducer generates ultrasonic sound waves that enter the cylinder wall.</li>
                    <li>Waves travel through the material and reflect (echo) when they hit a boundary (like the back wall or a defect).</li>
                    <li>The returning echoes are received by the probe and displayed on a screen as peaks (A-scan display).</li>
                    <li>
                        By analyzing the time of flight and amplitude of echoes, inspectors determine:
                        <ul className="list-circle pl-6 mt-2 space-y-1">
                            <li>Thickness of the material</li>
                            <li>Size, location, and orientation of flaws</li>
                            <li>Whether the defect is surface-breaking or subsurface</li>
                        </ul>
                    </li>
                </ul>

                <h3 className="text-2xl font-serif font-bold mb-4 mt-8">✅ Why UT for CNG Cylinder Testing?</h3>
                <p className="mb-4">
                    CNG cylinders operate at 200–250 bar pressure or 3000-3600 PSI, even microscopic cracks can cause leaks or explosions.
                    UT flaw testing is used to:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Detect cracks, voids, inclusions, and corrosion pits invisible to the eye</li>
                    <li>Measure wall thickness to detect thinning or erosion</li>
                    <li>Identify fatigue or stress-related defects caused by repeated pressurization</li>
                    <li>Verify that the cylinder material is uniform and free of hidden weaknesses</li>
                </ul>

                <h3 className="text-2xl font-serif font-bold mb-4 mt-8">📊 Values Obtained in UT</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Thickness readings (in mm)</strong> → ensures cylinder meets PESO/ISO minimum thickness requirements</li>
                    <li><strong>Defect depth & size</strong> → quantifies severity of cracks or voids</li>
                    <li><strong>Defect location</strong> → surface, mid-wall, or back wall</li>
                    <li><strong>Echo patterns</strong> → type of defect (crack, porosity, inclusion, lamination)</li>
                </ul>

                <h3 className="text-2xl font-serif font-bold mb-4 mt-8">🎯 Advantages of UT (as an NDT Method)</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Non-destructive:</strong> Cylinder can continue to be used if it passes</li>
                    <li><strong>High sensitivity:</strong> Detects defects as small as 0.1 mm</li>
                    <li><strong>Quantitative:</strong> Provides measurable defect size & depth</li>
                    <li><strong>Immediate results:</strong> Inspectors get real-time readings</li>
                    <li><strong>Safe & reliable:</strong> No radiation, unlike X-ray testing</li>
                </ul>

                <p className="mb-6">
                    👉 UT flaw detection acts as the second safety net after hydrotesting. While hydrotest ensures the cylinder can withstand pressure, UT ensures the material itself is flawless. Both together guarantee safety, compliance, and longer cylinder life.
                </p>
            </>
        )
    },
    {
        slug: "real-cng-cylinder-explosions-india",
        title: "Real CNG Cylinder Explosions in India.",
        subtitle: "From minor injuries to severe infrastructure damage, Delhi’s past CNG accidents show how improper cylinder testing and unsafe fittings can lead to catastrophic outcomes.",
        author: "Hintech Team",
        authorImage: "/images/person.png",
        date: "December 4, 2025",
        gradient: "from-purple-400 to-pink-300",
        content: (
            <>
                <p className="mb-6">
                    In India, the safety of Compressed Natural Gas (CNG) cylinders is crucial, as neglecting periodic testing can lead to catastrophic accidents. Data on accidents solely caused by the lack of cylinder testing in India shows critical importance of adhering to safety protocols.
                </p>

                <h3 className="text-2xl font-serif font-bold mb-4 mt-8">Najafgarh, Delhi (October 2024):</h3>
                <p className="mb-6">
                    A CNG tank of a truck exploded during refueling at a petrol pump in Najafgarh, Delhi. The incident resulted in minor injuries to a 45- year-old man named Sanjay and caused significant damage to the vehicle, the CNG filling machine, and the surrounding area of the station.
                </p>

                <h3 className="text-2xl font-serif font-bold mb-4 mt-8">Paschim Vihar, Delhi (July 2019):</h3>
                <p className="mb-6">
                    An Eicher truck experienced a CNG cylinder rupture while refueling at a station in Paschim Vihar. The incident occurred due to the use of an unsuitable gas cylinder mounted on the vehicle. Fortunately, there were no major injuries, but the event highlighted the dangers associated with using unverified cylinders.
                </p>

                <h3 className="text-2xl font-serif font-bold mb-4 mt-8">Mayapuri, Delhi (May 2021):</h3>
                <p className="mb-6">
                    A CNG cylinder explosion in the Mayapuri area of Delhi resulted in injuries to four individuals. The blast occurred in Khajan Basti during the afternoon, leading to a significant emergency response.
                </p>
            </>
        )
    }
];
