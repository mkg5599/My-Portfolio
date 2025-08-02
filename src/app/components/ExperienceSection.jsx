"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const EXPERIENCE_DATA = [
    {
        title: "Software Development Intern - Database Systems",
        company: "Amorphyx",
        location: "Corvallis, OR, USA",
        dateRange: "July 2025 – Present",
        bullets: [
            "Architected and normalized PostgreSQL schemas for semiconductor process data; engineered comprehensive data dictionaries and designed optimized relational database schemas for process data management.",
            "Streamlined ETL processes from Google Sheets to PostgreSQL using Apps Script and Python (pandas), reducing manual data entry by 60% and eliminating input errors through automated validation.",
            "Engineered an EasyEXPERT-style Python (PyQt6) desktop application using object-oriented programming principles to launch test scripts, capture semiconductor analytical data, persist results to databases, and visualize data using Plotly for interactive real-time graphing.",
            "Implemented comprehensive DevOps best practices by setting up end-to-end CI/CD pipelines in GitHub for Python services with automated testing frameworks (pytest), code quality tools (Black/Ruff), and containerized deployments using Docker for scalable microservices."
        ],
    },
    {
        title: "Software Developer - AI + Full Stack",
        company: "Oregon State University",
        location: "Corvallis, OR, USA",
        dateRange: "Dec 2023 – Jun 2025",
        bullets: [
            "Led cross-functional student team in developing SpeedScore Mobile Application using Agile methodologies, setting sprint milestones and optimizing software architecture for scalable performance.",
            "Engineered full-stack mobile application using React Native for cross-platform iOS/Android development, integrating Mapbox API for geolocation services, real-time data visualization, and seamless user experience with TypeScript, Node.js backend, and MongoDB data persistence.",
            "Architected RAG (Retrieval-Augmented Generation) backend routes deployed on Pinecone with intelligent data filtering from database, enabling context-aware queries and seamless frontend integration for enhanced user experience and data retrieval efficiency.",
            "Evaluated and provided technical feedback on Parallel Programming coursework including CUDA kernel optimization, MPI/multithreading implementations, and HCI projects focusing on usability heuristics, Figma prototypes, and WCAG accessibility standards for 80+ students.",
        ],
    },
    {
        title: "Senior Full-Stack Software Engineer",
        company: "Q3 Technologies",
        location: "Gurgaon, HR, India",
        dateRange: "Nov 2020 – Sep 2023",
        bullets: [
            "Promoted from junior to senior, drove a 15-developer cross-functional team across front-end and back-end to ship React web and React Native mobile apps serving 1M+ users.",
            "Designed and implemented scalable back-end microservices using Node.js/Express with TypeScript, exposing GraphQL and REST APIs; containerized applications with Docker and orchestrated deployments on AWS EKS using DevOps best practices.",
            "Optimized system performance by implementing Redis caching layers and Amazon S3 object storage solutions, achieving 30% reduction in p95 API latency and 20% bandwidth optimization; performed database query optimization on PostgreSQL for enhanced application performance.",
            "Engineered robust end-to-end CI/CD pipelines in GitHub using Ansible and NGINX for blue/green deployment strategies, enabling zero-downtime releases and maintaining 99.9% system uptime through automated testing and deployment processes.",
            "Established software engineering standards including code review processes, testing frameworks, and release management protocols while mentoring 5 junior engineers in full-stack development and Agile/Scrum methodologies.",
        ],
    },
];

const processBullet = (text) => {
    const noLinks = text.replace(/\(https?:\/\/[^\)]+\)/g, "");

    const keywords = [
        "PostgreSQL",
        "Python",
        "PyQt6",
        "Plotly",
        "Docker",
        "pytest",
        "Black/Ruff",
        "Apps Script",
        "pandas",
        "React Native",
        "TypeScript",
        "Node.js",
        "MongoDB",
        "Mapbox API",
        "Pinecone",
        "RAG",
        "CUDA",
        "MPI",
        "Figma",
        "WCAG",
        "React",
        "GraphQL",
        "REST APIs",
        "AWS EKS",
        "Redis",
        "AWS S3",
        "Ansible",
        "NGINX",
        "CI/CD",
        "DevOps",
        "microservices",
        "full-stack",
        "optimized",
        "1M+",
        "99.9%",
        "30%",
        "20%",
        "60%",
        "5",
        "80+",
        "15",
        "normalized",
        "ETL",
        "semiconductor",
        "Agile",
        "cross-functional",
        "scalable"
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
    const sortedExperienceData = [...EXPERIENCE_DATA];

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