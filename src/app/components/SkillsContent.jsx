import React, { useState } from "react";

// React Icons
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
    SiDocker,
    SiOpengl
} from "react-icons/si";
import { TbLetterC, TbBrandCSharp } from "react-icons/tb";
import { LiaAws } from "react-icons/lia"; // or SiAmazonaws

// A small sub-tab button for the category selection
const SubTabButton = ({ children, active, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 rounded-md text-sm font-semibold transition-colors ${active
                ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
        >
            {children}
        </button>
    );
};

// These 3 sub-tabs correspond to your skill categories
const SUB_TABS = [
    { id: "programming", label: "Programming & Scripting" },
    { id: "frameworks", label: "Frameworks & Development" },
    { id: "cloud", label: "Cloud & Tools" },
];

// A reusable grid item for a skill. If you have no icon, pass null or "undefined" for `Icon` and we’ll just show text.
function SkillItem({ Icon, label }) {
    // A shared class for the icons: pink color + slight glow on hover
    const iconClass = `
    text-5xl
    text-pink-500
    drop-shadow-[0_0_8px_rgba(236,72,153,0.8)]
    hover:scale-110
    transition-transform
  `;

    return (
        <div className="flex flex-col items-center">
            {Icon ? (
                <Icon className={iconClass} title={label} />
            ) : (
                /* If there's no valid icon, just show a placeholder or nothing */
                <span className="text-lg font-semibold">{label}</span>
            )}
            <span className="mt-1">{label}</span>
        </div>
    );
}

const SkillsContent = () => {
    const [activeSubTab, setActiveSubTab] = useState("programming");

    // --- 1) Programming & Scripting
    // C, C++, Python, TypeScript, JavaScript, PHP, SQL, NoSQL, Java, C#, HTML, CSS
    const ProgrammingContent = (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8 mt-4">
            <SkillItem Icon={TbLetterC} label="C" />
            <SkillItem Icon={SiCplusplus} label="C++" />
            <SkillItem Icon={DiPython} label="Python" />
            <SkillItem Icon={SiTypescript} label="TypeScript" />
            <SkillItem Icon={DiJavascript1} label="JavaScript" />
            <SkillItem Icon={DiPhp} label="PHP" />
            {/* For SQL and NoSQL, let's just do text (no direct icons) */}
            {/* <SkillItem Icon={SiMysql} label="SQL" />
            <SkillItem Icon={null} label="NoSQL" /> */}
            <SkillItem Icon={DiJava} label="Java" />
            <SkillItem Icon={TbBrandCSharp} label="C#" />
            <SkillItem Icon={DiHtml5} label="HTML" />
            <SkillItem Icon={DiCss3} label="CSS" />
        </div>
    );

    // --- 2) Frameworks & Development
    // React, Next.js, React Native, Redux, Node.js, Express.js,
    // Laravel, Angular, PyTorch, TensorFlow, Bootstrap, CUDA,
    // OpenGL, GLUT, GraphQL(basics), Tailwind CSS, three.js
    const FrameworksContent = (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8 mt-4">
            <SkillItem Icon={DiReact} label="React.js" />
            <SkillItem Icon={SiNextdotjs} label="Next.js" />
            {/* React Native -> same icon as React or just text */}
            <SkillItem Icon={DiReact} label="React Native" />
            <SkillItem Icon={SiRedux} label="Redux" />
            <SkillItem Icon={DiNodejsSmall} label="Node.js" />
            <SkillItem Icon={SiExpress} label="Express.js" />
            <SkillItem Icon={SiLaravel} label="Laravel" />
            <SkillItem Icon={SiAngular} label="Angular" />
            <SkillItem Icon={SiPytorch} label="PyTorch" />
            <SkillItem Icon={SiTensorflow} label="TensorFlow" />
            <SkillItem Icon={SiBootstrap} label="Bootstrap" />
            {/* CUDA (no direct icon in react-icons), so text only */}
            <SkillItem Icon={SiOpengl} label="OpenGL" />
            <SkillItem Icon={SiGraphql} label="GraphQL" />
            <SkillItem Icon={SiTailwindcss} label="Tailwind CSS" />
            <SkillItem Icon={SiThreedotjs} label="three.js" />
        </div>
    );

    // --- 3) Cloud & Tools
    // AWS, PostgreSQL, MySQL, MongoDB, Stripe API, Git, Firebase,
    // Redis, NPM, Postman, JWT, Swagger, JIRA, Asana, Salesforce,
    // ArcGIS, Docker
    const CloudContent = (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8 mt-4">
            <SkillItem Icon={LiaAws} label="AWS" />
            <SkillItem Icon={SiDocker} label="Docker" />
            <SkillItem Icon={SiPostgresql} label="PostgreSQL" />
            <SkillItem Icon={SiMysql} label="MySQL" />
            <SkillItem Icon={DiMongodb} label="MongoDB" />
            <SkillItem Icon={SiStripe} label="Stripe API" />
            <SkillItem Icon={DiGit} label="Git" />
            <SkillItem Icon={SiFirebase} label="Firebase" />
            <SkillItem Icon={SiRedis} label="Redis" />
            <SkillItem Icon={SiNpm} label="NPM" />
            <SkillItem Icon={SiPostman} label="Postman" />
            <SkillItem Icon={SiJsonwebtokens} label="JWT" />
            <SkillItem Icon={SiSwagger} label="Swagger" />
            <SkillItem Icon={SiJira} label="JIRA" />
            <SkillItem Icon={SiAsana} label="Asana" />
            <SkillItem Icon={SiSalesforce} label="Salesforce" />
            {/* ArcGIS by ESRI */}
            <SkillItem Icon={SiEsri} label="ArcGIS" />
        </div>
    );

    // Choose which content to display based on sub-tab
    const renderSubTabContent = () => {
        switch (activeSubTab) {
            case "programming":
                return ProgrammingContent;
            case "frameworks":
                return FrameworksContent;
            case "cloud":
                return CloudContent;
            default:
                return ProgrammingContent;
        }
    };

    return (
        <div>
            {/* Sub-Tab Buttons */}
            <div className="flex space-x-4">
                {SUB_TABS.map((tab) => (
                    <SubTabButton
                        key={tab.id}
                        active={activeSubTab === tab.id}
                        onClick={() => setActiveSubTab(tab.id)}
                    >
                        {tab.label}
                    </SubTabButton>
                ))}
            </div>

            {/* Dynamic Content */}
            {renderSubTabContent()}
        </div>
    );
};

export default SkillsContent;