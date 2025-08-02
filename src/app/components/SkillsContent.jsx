"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
    DiPython,
    DiJavascript1,
    DiNodejsSmall,
    DiReact,
    DiMongodb,
    DiGit,
    DiPhp,
    DiCss3,
    DiHtml5,
    DiJava,
    DiSass
} from "react-icons/di";
import {
    SiCplusplus,
    SiTypescript,
    SiExpress,
    SiRedux,
    SiLaravel,
    SiAngular,
    SiPytorch,
    SiTensorflow,
    SiPostgresql,
    SiMysql,
    SiFirebase,
    SiRedis,
    SiNextdotjs,
    SiBootstrap,
    SiGraphql,
    SiTailwindcss,
    SiThreedotjs,
    SiStripe,
    SiNpm,
    SiPostman,
    SiJsonwebtokens,
    SiSwagger,
    SiJira,
    SiAsana,
    SiSalesforce,
    SiEsri,
    SiOpengl,
    SiDocker,
    SiKubernetes,
    SiQt,
    SiAnsible,
    SiFastapi,
    SiScikitlearn,
    SiNginx,
    SiGo,
    SiOpenai,
    SiPinecone,
    SiVercel,
    SiGithubactions,
    SiPlaywright,
    SiJest,
    SiLangchain,
    SiGooglegemini
} from "react-icons/si";
import { TbLetterC, TbBrandCSharp } from "react-icons/tb";
import { LiaAws } from "react-icons/lia";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const SubTabButton = ({ children, active, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 rounded-md text-sm font-semibold transition-colors ${active
                ? "bg-gradient-to-r from-blue-500 to-green-500 text-white shadow-lg"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
        >
            {children}
        </button>
    );
};

function SkillItem({ Icon, label, imageSrc }) {
    const iconClass = `
    text-5xl
    text-blue-500
    drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]
    hover:text-green-400
    hover:scale-110
    transition-transform duration-300
  `;
    return (
        <div className="flex flex-col items-center justify-center text-center">
            {Icon ? (
                <Icon className={iconClass} title={label} />
            ) : imageSrc ? (
                <div className="w-12 h-12 relative hover:scale-110 transition-transform duration-300">
                    <Image
                        src={imageSrc}
                        alt={label}
                        fill
                        className="object-contain filter brightness-0 invert drop-shadow-[0_0_8px_rgba(59,130,246,0.8)] hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]"
                    />
                </div>
            ) : (
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-blue-500 to-green-500 rounded-lg text-white font-bold text-sm hover:scale-110 transition-transform duration-300">
                    {label.split(' ').map(word => word[0]).join('').slice(0, 3)}
                </div>
            )}
            <span className="mt-1 text-gray-300">{label}</span>
        </div>
    );
}

const programmingSkills = [
    { Icon: DiPython, label: "Python" },
    { Icon: SiTypescript, label: "TypeScript" },
    { Icon: DiJavascript1, label: "JavaScript" },
    { Icon: SiGo, label: "Go" },
    { Icon: SiCplusplus, label: "C++" },
    { Icon: DiJava, label: "Java" },
    { Icon: TbLetterC, label: "C" },
    { Icon: DiPhp, label: "PHP" },
    { Icon: TbBrandCSharp, label: "C#" },
    { Icon: DiHtml5, label: "HTML5" },
    { Icon: DiCss3, label: "CSS3" },
    { Icon: DiSass, label: "SASS" },
];

const frameworksSkills = [
    { Icon: DiReact, label: "React" },
    { Icon: SiRedux, label: "Redux" },
    { Icon: SiNextdotjs, label: "Next.js" },
    { Icon: DiReact, label: "React Native" },
    { Icon: DiNodejsSmall, label: "Node.js" },
    { Icon: SiExpress, label: "Express.js" },
    { Icon: SiFastapi, label: "FastAPI" },
    { Icon: SiGraphql, label: "GraphQL" },
    { Icon: SiTailwindcss, label: "Tailwind CSS" },
    { Icon: SiQt, label: "Qt" },
    { Icon: SiScikitlearn, label: "scikit-learn" },
    { Icon: SiLaravel, label: "Laravel" },
    { Icon: SiAngular, label: "Angular" },
    { Icon: SiBootstrap, label: "Bootstrap" },
    { Icon: SiOpengl, label: "OpenGL" },
    { Icon: SiThreedotjs, label: "three.js" },
];

const aiMlSkills = [
    { Icon: SiTensorflow, label: "TensorFlow" },
    { Icon: SiPytorch, label: "PyTorch" },
    { Icon: SiScikitlearn, label: "scikit-learn" },
    { Icon: SiOpenai, label: "OpenAI APIs" },
    { Icon: SiLangchain, label: "LangChain" },
    { Icon: SiGooglegemini, label: "Gemini" },
    { Icon: null, label: "RAG Systems", imageSrc: "/images/skills/rag.png" },
    { Icon: null, label: "Model Context Protocol", imageSrc: "/images/skills/mcp.png" },
    { Icon: null, label: "Pinecone", imageSrc: "/images/skills/pinecone.png" },
];

const cloudSkills = [
    { Icon: LiaAws, label: "AWS (EKS, S3, EC2)" },
    { Icon: SiDocker, label: "Docker" },
    { Icon: SiKubernetes, label: "Kubernetes" },
    { Icon: SiAnsible, label: "Ansible" },
    { Icon: SiNginx, label: "NGINX" },
    { Icon: SiGithubactions, label: "GitHub Actions" },
    { Icon: SiVercel, label: "Vercel" },
    { Icon: SiPostgresql, label: "PostgreSQL" },
    { Icon: DiMongodb, label: "MongoDB" },
    { Icon: SiRedis, label: "Redis" },
    { Icon: SiFirebase, label: "Firebase" },
    { Icon: SiMysql, label: "MySQL" },
    { Icon: DiGit, label: "Git" },
    { Icon: SiPostman, label: "Postman" },
    { Icon: SiSwagger, label: "Swagger" },
    { Icon: SiJira, label: "JIRA" },
    { Icon: SiAsana, label: "Asana" },
    { Icon: SiEsri, label: "Mapbox API" },
    { Icon: SiEsri, label: "ArcGIS" },
    { Icon: SiPlaywright, label: "Playwright" },
    { Icon: SiJest, label: "Jest" },
];

const SUB_TABS = [
    { id: "programming", label: "Programming Languages" },
    { id: "frameworks", label: "Frameworks & Libraries" },
    { id: "ai", label: "Machine Learning & AI" },
    { id: "cloud", label: "Cloud & DevOps" },
];

const SkillsContent = () => {
    const [activeSubTab, setActiveSubTab] = useState("programming");
    const [expanded, setExpanded] = useState({
        programming: false,
        frameworks: false,
        ai: false,
        cloud: false,
    });

    const LIMIT = 5;

    const getCurrentSkills = () => {
        switch (activeSubTab) {
            case "programming":
                return programmingSkills;
            case "frameworks":
                return frameworksSkills;
            case "ai":
                return aiMlSkills;
            case "cloud":
                return cloudSkills;
            default:
                return programmingSkills;
        }
    };

    const currentSkills = getCurrentSkills();
    const isExpanded = expanded[activeSubTab];
    const mobileSkillsToShow = isExpanded
        ? currentSkills
        : currentSkills.slice(0, LIMIT);

    return (
        <div>
            <div className="flex flex-wrap gap-4 mt-4 justify-center md:justify-start">
                {SUB_TABS.map((tab) => (
                    <SubTabButton
                        key={tab.id}
                        active={activeSubTab === tab.id}
                        onClick={() => {
                            setActiveSubTab(tab.id);
                        }}
                    >
                        {tab.label}
                    </SubTabButton>
                ))}
            </div>

            <div>
                <div className="block md:hidden">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4 mt-4">
                        {mobileSkillsToShow.map((skill, idx) => (
                            <SkillItem key={idx} Icon={skill.Icon} label={skill.label} />
                        ))}
                    </div>
                    {currentSkills.length > LIMIT && (
                        <div className="flex justify-center">
                            <button
                                onClick={() =>
                                    setExpanded((prev) => ({
                                        ...prev,
                                        [activeSubTab]: !prev[activeSubTab],
                                    }))
                                }
                                className="flex items-center text-gray-300 hover:text-white transition-colors"
                            >
                                {isExpanded ? "Show Less" : "Show More"}
                                {isExpanded ? (
                                    <FiChevronUp className="ml-1" />
                                ) : (
                                    <FiChevronDown className="ml-1" />
                                )}
                            </button>
                        </div>
                    )}
                </div>
                {/* Desktop View: Always show all skills */}
                <div className="hidden md:block">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4 mt-4">
                        {currentSkills.map((skill, idx) => (
                            <SkillItem key={idx} Icon={skill.Icon} label={skill.label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillsContent;