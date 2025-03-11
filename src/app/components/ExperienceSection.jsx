"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

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

const processBullet = (text) => {
    const noLinks = text.replace(/\(https?:\/\/[^\)]+\)/g, "");

    const keywords = [
        "React",
        "React Native",
        "Node.js",
        "AWS",
        "TypeScript",
        "PostgreSQL",
        "Redis",
        "Apex",
        "Lightning Web Components",
        "Salesforce",
        "Salesforce Flows",
        "custom Apex",
        "Freedo Rental Services",
        "SpeedScore",
        "REST APIs",
        "AWS S3",
        "Mentored",
        "full-stack",
        "optimized",
        "1M+",
        "99.9%",
        "30%",
        "3",
        "80+",
        "tutorial videos",
        "15",
    ];

    keywords.sort((a, b) => b.length - a.length);
    const escapedKeywords = keywords.map((kw) =>
        kw.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    );
    const regex = new RegExp(`(${escapedKeywords.join("|")})`, "g");
    const parts = noLinks.split(regex);
    return parts.map((part, index) => {
        if (keywords.includes(part)) {
            return (
                <span key={index} className="font-bold">
                    {part}
                </span>
            );
        }
        return <React.Fragment key={index}>{part}</React.Fragment>;
    });
};

const ExperienceSection = () => {
    const [expandedItems, setExpandedItems] = useState({});
    const sortedExperienceData = [
        ...EXPERIENCE_DATA.filter((exp) =>
            exp.company.includes("Industry Level")
        ),
        ...EXPERIENCE_DATA.filter((exp) => !exp.company.includes("Industry Level")),
    ];

    return (
        <section id="experience" className="py-16 text-white">
            <div className="container mx-auto px-4 relative">
                <h2 className="text-4xl font-bold mb-10 text-center">Experience</h2>
                <div
                    className="
            hidden md:block 
            absolute top-20 bottom-0 
            border-r-2 border-gray-600 border-dotted
            left-1/2 
            -translate-x-1/2
          "
                />
                <div className="flex flex-col space-y-12">
                    {sortedExperienceData.map((exp, i) => {
                        const isLeftSide = i % 2 === 0;
                        const xMotion = isLeftSide ? -70 : 70;
                        const isExpanded = expandedItems[i] || false;

                        return (
                            <motion.div
                                key={i}
                                className="relative w-full md:w-[48%] px-2"
                                style={{
                                    marginLeft: isLeftSide ? "auto" : 0,
                                    marginRight: !isLeftSide ? "auto" : 0,
                                }}
                                initial={{ opacity: 0, x: xMotion }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <div
                                    className={`
                    hidden
                    md:block
                    absolute
                    top-6
                    w-6
                    h-6
                    rounded-full
                    bg-gradient-to-tr from-blue-500 to-green-500
                    border-4
                    border-black
                    ${isLeftSide
                                            ? "left-[-4.25%] -translate-x-1/2"
                                            : "right-[-4.25%] translate-x-1/2"}
                  `}
                                />
                                <div
                                    className="
                    bg-gradient-to-br 
                    from-[#1f1f1f] 
                    to-[#2a2a2a] 
                    rounded-lg 
                    p-6 
                    shadow-xl 
                    shadow-blue-600/20
                  "
                                >
                                    <h3 className="text-xl font-semibold text-blue-400 mb-1">
                                        {exp.title}
                                    </h3>
                                    {exp.company.includes("Industry Level") && (
                                        <span className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 bg-opacity-90 text-gray-900 px-2 py-1 rounded-full text-xs font-bold mb-2">
                                            Industry Level
                                        </span>
                                    )}
                                    <p className="text-sm text-gray-300">
                                        {exp.company} | {exp.location}
                                    </p>
                                    <p className="text-sm text-gray-400 mb-3">{exp.dateRange}</p>

                                    <div className="hidden md:block">
                                        <ul className="list-disc list-inside space-y-2 text-gray-200">
                                            {exp.bullets.map((bullet, idx) => (
                                                <li key={idx}>{processBullet(bullet)}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="block md:hidden">
                                        {isExpanded ? (
                                            <ul className="list-disc list-inside space-y-2 text-gray-200">
                                                {exp.bullets.map((bullet, idx) => (
                                                    <li key={idx}>{processBullet(bullet)}</li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p className="text-sm text-gray-400 mb-3">
                                                Tap "Read More" to view details.
                                            </p>
                                        )}
                                        <button
                                            onClick={() =>
                                                setExpandedItems((prev) => ({
                                                    ...prev,
                                                    [i]: !prev[i],
                                                }))
                                            }
                                            className="text-blue-400 text-sm mt-2"
                                        >
                                            {isExpanded ? "Read Less" : "Read More"}
                                        </button>
                                    </div>
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