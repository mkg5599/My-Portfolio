"use client";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";
import SkillsContent from "./SkillsContent";
import { FaGraduationCap } from "react-icons/fa";

const TAB_DATA = [
	{
		title: "Skills",
		id: "skills",
		content: <SkillsContent />,
	},
	{
		title: "Education",
		id: "education",
		content: (
			<div className="space-y-4 text-gray-200">
				<div className="bg-[#1e1e1e] rounded-lg p-4 md:p-6 shadow-lg shadow-blue-500/20">
					<div className="flex flex-col sm:flex-row justify-between items-center">
						<div className="flex flex-col sm:flex-row items-center gap-2">
							<div className="text-blue-400 text-xl sm:text-3xl">
								<FaGraduationCap />
							</div>
							<h3 className="text-lg sm:text-xl font-semibold text-white text-center sm:text-left">
								Oregon State University
							</h3>
						</div>
						<span className="mt-2 sm:mt-0 bg-gradient-to-r from-blue-500 to-green-500 bg-opacity-90 text-gray-900 px-2 sm:px-3 py-1 rounded-full text-xs font-bold shadow-md">
							GPA: 4.00 / 4.00
						</span>
					</div>

					<div className="mt-2 flex flex-col sm:flex-row sm:justify-between items-center gap-2">
						<p className="text-gray-300 font-medium text-sm sm:text-base text-center sm:text-left">
							Master of Science in Computer Science
						</p>
						<p className="text-sm text-gray-400 text-center">
							Sep 2023 – Dec 2025
						</p>
					</div>

					<p className="text-xs sm:text-sm text-gray-400 mt-2 text-center sm:text-left">
						Corvallis, Oregon
					</p>
				</div>

				<div className="bg-[#1e1e1e] rounded-lg p-4 md:p-6 shadow-lg shadow-blue-500/20">
					<div className="flex flex-col sm:flex-row justify-between items-center">
						<div className="flex flex-col sm:flex-row items-center gap-2">
							<div className="text-blue-400 text-xl sm:text-3xl">
								<FaGraduationCap />
							</div>
							<h3 className="text-lg sm:text-xl font-semibold text-white text-center sm:text-left">
								Indian Institute of Information Technology Kota
							</h3>
						</div>
						<span className="mt-2 sm:mt-0 bg-gradient-to-r from-blue-500 to-green-500 bg-opacity-90 text-gray-900 px-2 sm:px-3 py-1 rounded-full text-xs font-bold shadow-md">
							GPA: 3.20 / 4.00
						</span>
					</div>

					<div className="mt-2 flex flex-col sm:flex-row sm:justify-between items-center gap-2">
						<p className="text-gray-300 font-medium text-sm sm:text-base text-center sm:text-left">
							Bachelors in Computer Science
						</p>
						<p className="text-sm text-gray-400 text-center">
							Aug 2016 – May 2020
						</p>
					</div>

					<p className="text-xs sm:text-sm text-gray-400 mt-2 text-center sm:text-left">
						Kota, Rajasthan
					</p>
				</div>
			</div>
		),
	},
	{
		title: "Certifications & Achievements",
		id: "certifications",
		content: (
			<ul className="list-disc pl-4 space-y-2 text-gray-200 text-left">
				<li>
					<span className="font-bold">
						AWS Certified Solutions Architect - Associate
					</span>{" "}
					- (Expires 2028-12-29)
				</li>
				<li>
					Achieved a{" "}
					<span className="font-bold">70% salary increase</span> at Q3
					Technologies by consistently delivering{" "}
					<span className="font-bold">exceptional performance</span> and
					driving{" "}
					<span className="font-bold">impactful projects</span>.
				</li>
				<li>
					Organized and led{" "}
					<span className="font-bold">technical workshops</span> as an
					Event Coordinator for the Software Engineering Club and OSU
					App Club, fostering{" "}
					<span className="font-bold">collaboration</span> and{" "}
					<span className="font-bold">professional growth</span>.
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
		<section
			className="relative flex items-center justify-center min-h-screen bg-transparent text-white"
			id="about"
		>
			<div className="container mx-auto px-6">
				<div className="flex flex-col items-center text-center w-full">
					<h2 className="text-5xl font-bold text-white mb-8">
						About Me
					</h2>
					<p className="text-lg max-w-2xl">
						I am a software engineer and graduate student passionate about
						building interactive, scalable applications and AI-powered
						solutions. With hands-on experience in full-stack development,
						machine learning, and database systems, I've led teams to
						develop modern web and mobile platforms while enjoying
						mentoring and staying ahead of emerging trends in AI and cloud
						technologies.
					</p>

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