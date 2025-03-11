"use client";
import React, { useState } from "react";
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
    SiDocker
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

function SkillItem({ Icon, label }) {
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
            ) : (
                <span className="text-lg font-semibold">{label}</span>
            )}
            <span className="mt-1 text-gray-300">{label}</span>
        </div>
    );
}

const programmingSkills = [
    { Icon: TbLetterC, label: "C" },
    { Icon: SiCplusplus, label: "C++" },
    { Icon: DiPython, label: "Python" },
    { Icon: SiTypescript, label: "TypeScript" },
    { Icon: DiJavascript1, label: "JavaScript" },
    { Icon: DiPhp, label: "PHP" },
    { Icon: DiJava, label: "Java" },
    { Icon: TbBrandCSharp, label: "C#" },
    { Icon: DiHtml5, label: "HTML" },
    { Icon: DiCss3, label: "CSS" },
];

const frameworksSkills = [
    { Icon: DiReact, label: "React.js" },
    { Icon: SiNextdotjs, label: "Next.js" },
    { Icon: DiReact, label: "React Native" },
    { Icon: SiRedux, label: "Redux" },
    { Icon: DiNodejsSmall, label: "Node.js" },
    { Icon: SiExpress, label: "Express.js" },
    { Icon: SiLaravel, label: "Laravel" },
    { Icon: SiAngular, label: "Angular" },
    { Icon: SiPytorch, label: "PyTorch" },
    { Icon: SiTensorflow, label: "TensorFlow" },
    { Icon: SiBootstrap, label: "Bootstrap" },
    { Icon: SiOpengl, label: "OpenGL" },
    { Icon: SiGraphql, label: "GraphQL" },
    { Icon: SiTailwindcss, label: "Tailwind CSS" },
    { Icon: SiThreedotjs, label: "three.js" },
];

const cloudSkills = [
    { Icon: LiaAws, label: "AWS" },
    { Icon: SiDocker, label: "Docker" },
    { Icon: SiPostgresql, label: "PostgreSQL" },
    { Icon: SiMysql, label: "MySQL" },
    { Icon: DiMongodb, label: "MongoDB" },
    { Icon: SiStripe, label: "Stripe API" },
    { Icon: DiGit, label: "Git" },
    { Icon: SiFirebase, label: "Firebase" },
    { Icon: SiRedis, label: "Redis" },
    { Icon: SiNpm, label: "NPM" },
    { Icon: SiPostman, label: "Postman" },
    { Icon: SiJsonwebtokens, label: "JWT" },
    { Icon: SiSwagger, label: "Swagger" },
    { Icon: SiJira, label: "JIRA" },
    { Icon: SiAsana, label: "Asana" },
    { Icon: SiSalesforce, label: "Salesforce" },
    { Icon: SiEsri, label: "ArcGIS" },
];

const SUB_TABS = [
    { id: "programming", label: "Programming & Scripting" },
    { id: "frameworks", label: "Frameworks & Development" },
    { id: "cloud", label: "Cloud & Tools" },
];

const SkillsContent = () => {
    const [activeSubTab, setActiveSubTab] = useState("programming");
    const [expanded, setExpanded] = useState({
        programming: false,
        frameworks: false,
        cloud: false,
    });

    const LIMIT = 5;

    const getCurrentSkills = () => {
        switch (activeSubTab) {
            case "programming":
                return programmingSkills;
            case "frameworks":
                return frameworksSkills;
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