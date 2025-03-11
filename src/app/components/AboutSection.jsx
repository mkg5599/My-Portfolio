"use client";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";
import SkillsContent from "./SkillsContent";
import { FaGraduationCap } from "react-icons/fa";

//////////////////////////////////
// TAB CONTENT DATA
//////////////////////////////////
const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: <SkillsContent />, // Renders sub-tabs with its own UI
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className="space-y-6 text-gray-200">
        {/* Oregon State University */}
        <div className="bg-[#1e1e1e] rounded-lg p-6 shadow-lg shadow-blue-500/20">
          <div className="flex justify-between items-center">
            {/* Left: College Name + Icon */}
            <div className="flex items-center gap-3">
              <div className="text-blue-400 text-3xl">
                <FaGraduationCap />
              </div>
              <h3 className="text-xl font-semibold text-white">
                Oregon State University
              </h3>
            </div>
            {/* Right: GPA */}
            <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-opacity-90 text-gray-900 px-3 py-1 rounded-full text-xs font-bold shadow-md">
              GPA: 4.00 / 4.00
            </span>
          </div>

          {/* Degree & Duration */}
          <div className="mt-2 flex flex-col sm:flex-row sm:justify-between">
            <p className="text-gray-300 font-medium">
              Master of Science in Computer Science
            </p>
            <p className="text-sm text-gray-400 sm:text-right">Sep 2023 – Jun 2025</p>
          </div>

          {/* Location */}
          <p className="text-sm text-gray-400 mt-2">Corvallis, Oregon</p>
        </div>

        {/* Indian Institute of Information Technology */}
        <div className="bg-[#1e1e1e] rounded-lg p-6 shadow-lg shadow-blue-500/20">
          <div className="flex justify-between items-center">
            {/* Left: College Name + Icon */}
            <div className="flex items-center gap-3">
              <div className="text-blue-400 text-3xl">
                <FaGraduationCap />
              </div>
              <h3 className="text-xl font-semibold text-white">
                Indian Institute of Information Technology
              </h3>
            </div>
            {/* Right: GPA */}
            <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-opacity-90 text-gray-900 px-3 py-1 rounded-full text-xs font-bold shadow-md">
              GPA: 3.20 / 4.00
            </span>
          </div>

          {/* Degree & Duration */}
          <div className="mt-2 flex flex-col sm:flex-row sm:justify-between">
            <p className="text-gray-300 font-medium">
              Bachelor of Technology in Computer Science Engineering
            </p>
            <p className="text-sm text-gray-400 sm:text-right">Aug 2016 – May 2020</p>
          </div>

          {/* Location */}
          <p className="text-sm text-gray-400 mt-2">Kota, Rajasthan</p>
        </div>
      </div>
    ),
  },
  {
    title: "Certifications & Achievements",
    id: "certifications",
    content: (
      <ul className="list-disc pl-4 space-y-2 text-gray-200">
        <li>AWS Certified Cloud Practitioner</li>
        <li>
          Organized technical workshops as an Event Coordinator in the
          Software Engineering Club and OSU App Club
        </li>
        <li>
          Secured a 70% salary increase at Q3 Technologies based on
          exceptional performance
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const activeTabContent = TAB_DATA.find((t) => t.id === tab)?.content;

  return (
    <section className="relative flex items-center justify-center min-h-screen bg-transparent text-white" id="about">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center w-full">
          {/* Section Title */}
          <h2 className="text-5xl font-bold text-white mb-8">About Me</h2>
          <p className="text-lg max-w-2xl">
            I am a full stack software engineer and graduate student with a passion for
            building interactive and scalable applications. My expertise spans React, Node.js,
            Python, AWS, and various cutting-edge technologies. I thrive in collaborative
            environments, enjoy mentoring, and love exploring emerging trends.
          </p>

          {/* Top-Level Tabs (Skills, Education, Certs) */}
          <div className="flex flex-row justify-center mt-10 space-x-4">
            {TAB_DATA.map((item) => (
              <TabButton
                key={item.id}
                selectTab={() => handleTabChange(item.id)}
                active={tab === item.id}
              >
                {item.title}
              </TabButton>
            ))}
          </div>

          {/* Gradient Content Area */}
          <div className="mt-8 w-full max-w-3xl">
            {activeTabContent && (
              <div
                className="
                  p-6 
                  bg-gradient-to-br 
                  from-[#1f1f1f] 
                  to-[#2a2a2a] 
                  rounded-lg 
                  shadow-xl 
                  shadow-green-600/20
                  text-gray-900
                "
              >
                {activeTabContent}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;