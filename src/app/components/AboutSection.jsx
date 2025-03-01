"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
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
        <div className="bg-[#262626] rounded-lg p-4 shadow-md shadow-pink-600/20">
          {/* Row for icon + main details */}
          <div className="flex items-start gap-3">
            {/* Graduation Cap Icon */}
            <div className="text-pink-400 text-3xl">
              <FaGraduationCap />
            </div>
            {/* Right-side: Name, GPA badge, date range, location */}
            <div className="w-full">
              {/* Top row: Name + GPA in top-right corner */}
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-white">
                  Oregon State University
                </h3>
                <span className="bg-pink-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                  4.00/4.00
                </span>
              </div>
              {/* Sub-details: date range + degree, location */}
              <p className="text-sm text-gray-400">
                Sep 2023 – Jun 2025 | Master of Science in Computer Science
              </p>
              <p className="text-gray-300 text-sm">Corvallis, Oregon</p>
            </div>
          </div>
        </div>

        {/* Indian Institute of Information Technology */}
        <div className="bg-[#262626] rounded-lg p-4 shadow-md shadow-pink-600/20">
          <div className="flex items-start gap-3">
            <div className="text-pink-400 text-3xl">
              <FaGraduationCap />
            </div>
            <div className="w-full">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-white">
                  Indian Institute of Information Technology
                </h3>
                <span className="bg-pink-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                  3.20/4.00
                </span>
              </div>
              <p className="text-sm text-gray-400">
                Aug 2016 – May 2020 | Bachelor of Technology in Computer Science Engineering
              </p>
              <p className="text-gray-300 text-sm">Kota, Rajasthan</p>
            </div>
          </div>
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
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        {/* Left Column: Image */}
        <Image
          src="/images/about-image.png"
          alt="About Image"
          width={500}
          height={500}
          className="rounded-md"
        />

        {/* Right Column: Text & Tabs */}
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack software engineer and graduate student with a
            passion for building interactive and scalable applications. My
            experience spans React, Node.js, Python, AWS, and various other
            cutting-edge technologies. I love collaborating with teams,
            mentoring peers, and exploring emerging trends to continuously
            improve my skill set.
          </p>

          {/* Top-Level Tabs (Skills, Education, Certs) */}
          <div className="flex flex-row justify-start mt-8 space-x-4">
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

          {/* Gradient "Card" for Active Tab Content */}
          <div className="mt-8">
            {activeTabContent && (
              <div
                className="
                  p-6 
                  bg-gradient-to-br 
                  from-[#1f1f1f] 
                  to-[#2a2a2a] 
                  rounded-lg 
                  shadow-xl 
                  shadow-pink-600/20
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