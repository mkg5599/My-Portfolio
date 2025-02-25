"use client";
import React from "react";
import { motion } from "framer-motion";

// EXPERIENCE DATA (inline for convenience)
const EXPERIENCE_DATA = [
    {
        title: "Graduate Project Assistant | MS Thesis Project",
        company: "Oregon State University | Part-Time",
        location: "Corvallis, OR, USA",
        dateRange: "Mar 2024 – Present",
        bullets: [
            "Leading a student team under a professor’s guidance to develop SpeedScore (https://www.speedscore.org/), defining project milestones and optimizing system architecture.",
            "Coordinating full-stack development with React, React Native, Node.js, AWS, ensuring research-driven feature enhancements.",
        ],
    },
    {
        title: "Graduate Teaching Assistant",
        company: "Oregon State University | Part-Time",
        location: "Corvallis, OR, USA",
        dateRange: "Dec 2024 – Present",
        bullets: [
            "Graded and assisted 80+ students, providing detailed feedback to enhance their understanding and performance.",
            "Created tutorial videos for complex topics and conducted office hours for personalized academic support.",
        ],
    },
    {
        title: "Student Software Developer",
        company: "Oregon State University | Part-Time",
        location: "Corvallis, OR, USA",
        dateRange: "Apr 2024 – Present",
        bullets: [
            "Developed the university’s Salesforce app for outdoor schools using Apex and Lightning Web Components (LWC).",
            "Integrated dynamic CMS content into LWC for seamless use in Experience Builder.",
            "Automated business processes with Salesforce Flows, reducing manual tasks by 25%, and optimized workflows using custom Apex functions.",
        ],
    },
    {
        title: "Lead Software Engineer",
        company: "Q3 Technologies | Industry Level",
        location: "Gurgaon, HR, India",
        dateRange: "Nov 2020 – Aug 2023",
        bullets: [
            "Led a team of 15 developers to build Freedo Rental Services (https://freedo.rentals/), a scalable sharing economy platform, achieving 1M+ downloads and 99.9% uptime.",
            "Developed and optimized full-stack applications using React, React Native, TypeScript, Node.js, PostgreSQL, Redis, and AWS, improving response times by 30%.",
            "Designed and integrated REST APIs for Trust Game, a social gaming platform, leveraging Redis caching and AWS S3.",
            "Mentored 3 junior developers in React, API security, and scalable architectures, maintaining a 98% code quality.",
        ],
    },
];

const ExperienceSection = () => {
    return (
        <section id="experience" className="py-16 bg-black text-white">
            <div className="container mx-auto px-4 relative">
                {/* Section Title */}
                <h2 className="text-4xl font-bold mb-10 text-center">Experience</h2>

                {/* Center Line (only on medium screens and above) */}
                <div
                    className="
                        hidden md:block 
                        absolute top-20 bottom-0 
                        border-r-2 border-gray-600 border-dotted
                        left-1/2 
                        -translate-x-1/2
                    "
                />

                {/* Timeline Items */}
                <div className="flex flex-col space-y-12">
                    {EXPERIENCE_DATA.map((exp, i) => {
                        // Determine if even/odd index for left/right placement
                        const isLeftSide = i % 2 === 0;
                        // Animate from left if isLeftSide, else from right
                        const xMotion = isLeftSide ? -70 : 70;

                        return (
                            <motion.div
                                key={i}
                                className="relative w-full md:w-[47%] px-2"
                                style={{
                                    // On larger screens, push card to left or right of center
                                    marginLeft: isLeftSide ? "auto" : 0,
                                    marginRight: !isLeftSide ? "auto" : 0,
                                }}
                                initial={{ opacity: 0, x: xMotion }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                {/* Circle Indicator EXACTLY on the center line */}
                                <div
                                    className={`
                     hidden
                    md:block
                    absolute
                    top-6
                    w-6
                    h-6
                    rounded-full
                    bg-gradient-to-tr from-pink-500 to-purple-500
                    border-4
                    border-black
                    ${isLeftSide ? "left-[-54px]" : "right-[-54px]"}
                    
                  `}
                                />

                                {/* "Tab" Card */}
                                <div
                                    className="
                    bg-gradient-to-br 
                    from-[#1f1f1f] 
                    to-[#2a2a2a] 
                    rounded-lg 
                    p-6 
                    shadow-xl 
                    shadow-pink-600/20
                  "
                                >
                                    <h3 className="text-xl font-semibold text-pink-400 mb-1">
                                        {exp.title}
                                    </h3>
                                    <p className="text-sm text-gray-300">
                                        {exp.company} | {exp.location}
                                    </p>
                                    <p className="text-sm text-gray-400 mb-3">{exp.dateRange}</p>

                                    <ul className="list-disc list-inside space-y-2 text-gray-200">
                                        {exp.bullets.map((bullet, idx) => (
                                            <li key={idx}>{bullet}</li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;