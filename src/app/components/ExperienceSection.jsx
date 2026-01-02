"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const EXPERIENCE_DATA = [
    {
        title: "Software Engineering Intern",
        company: "Amorphyx",
        location: "Corvallis, OR, USA",
        dateRange: "July 2025 - Dec 2025",
        bullets: [
            "Designed and normalized PostgreSQL schemas for semiconductor process data supporting nearly 100K records per experiment, while building Python and FastAPI backend services for validation, ingestion, and database integration.",
            "Developed full stack workflows using React and TypeScript integrated with FastAPI APIs, enabling dynamic form driven data entry and reducing manual data entry and review effort by 40%.",
            "Automated end to end ETL pipelines using Google Apps Script and Python to ingest structured data into PostgreSQL, reducing manual ingestion effort by 60% and minimizing data errors.",
            "Improved system performance via query optimization, code splitting, and lazy loading, reducing page load time by 35%."
        ],
    },
    {
        title: "Software Developer",
        company: "Oregon State University",
        location: "Corvallis, OR, USA",
        dateRange: "Sep 2023 - Dec 2025",
        bullets: [
            "Led development of production full stack web and mobile applications used by 1000+ active users, spanning frontend interfaces, backend services, and cloud deployments.",
            "Designed and implemented backend services and REST APIs using Node.js and PostgreSQL, supporting secure authentication, authorization, and data access.",
            "Built reusable UI components with React, React Native, and TypeScript, reducing duplicated frontend code by 30%.",
            "Deployed applications on AWS using Docker and CI CD pipelines, reducing deployment issues by 25%.",
            "Implemented RAG features with LangChain and Pinecone and optimized performance, improving Web Vitals by 40%."
        ],
    },
    {
        title: "Senior Software Engineer",
        company: "Q3 Technologies",
        location: "Gurgaon, HR, India",
        dateRange: "Nov 2020 - Aug 2023",
        bullets: [
            "Led an Agile team of 15 engineers delivering a consumer facing platform serving 1M+ users across web and mobile, while owning technical execution and roadmap delivery.",
            "Owned full stack system architecture spanning frontend applications, backend services, databases, and cloud infrastructure supporting high traffic production workloads.",
            "Designed and operated distributed backend services using Node.js, PostgreSQL, Redis, REST, and GraphQL, sustaining 99.9% uptime while improving API latency by 30% through caching and indexing.",
            "Built reusable frontend component libraries and design systems using React, React Native, and TypeScript, reducing frontend rework by 25% and accelerating feature delivery.",
            "Managed cloud infrastructure and deployments on AWS using Kubernetes, Docker, CI CD pipelines, and Terraform, while mentoring 5 engineers and driving engineering best practices."
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