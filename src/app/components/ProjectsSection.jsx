"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
	{
		id: 1,
		title: "Agentic AI Product Catalog",
		description:
			"Engineered full-stack AI-powered product search platform with voice-enabled natural language queries, implementing Model Context Protocol (MCP) architecture with Gemini 2.0 Flash function calling, OpenAI Whisper transcription, and FastAPI microservices. Built a RAG chatbot with LangChain, OpenAI embeddings, and intelligent tool selection system with 4 specialized MCP tools for context-aware query routing, enabling sub 200 ms semantic product search.",
		image: "/images/projects/ai-catalog.png",
		tag: ["All", "Web", "AI"],
    gitUrl: "https://github.com/mkg5599/mcp-voice-app",
		previewUrl: "https://mcp-voice-app.manojkumargummadi.com/",
		skills: [
			"FastAPI",
			"LangChain",
			"Gemini 2.0 Flash",
			"RAG Systems",
			"Docker",
			"Swagger UI",
			"JSON-RPC 2.0",
			"Voice Processing",
      "Pinecone",
      "Model Context Protocol",
      "Semantic Search",
      "LLMOps",
      "OpenAI Whisper"
		],
	},
	{
		id: 2,
		title: "SpeedScore",
		description:
			"SpeedScore is a dynamic application designed for speedgolf enthusiasts. It enables users to track rounds, view detailed course maps, and connect with a vibrant community. Developed using React Native for cross-platform development, integrating Mapbox API for geolocation services, and Expo for seamless mobile deployment, SpeedScore delivers a comprehensive and engaging user experience.",
		image: "/images/projects/speedscore.png",
		tag: ["All", "Web", "Mobile"],
		gitUrl: "https://github.com/mkg5599/SpeedScore",
		previewUrl: "https://www.speedscore.org/",
		skills: [
			"React",
			"React Native",
			"TypeScript",
			"MongoDB",
			"Express",
			"Node.js",
			"Mapbox API",
			"Expo",
		],
	},
	{
		id: 3,
		title: "Freedo Rental Services",
		description:
			"Freedo Rental Services is an innovative platform that streamlines bike rentals across India by offering secure payment integration and real-time, location-based availability. Built with modern technologies such as React, React Native, TypeScript, Node.js, Firebase, PostgreSQL, Redis, and AWS, the platform delivers a seamless and scalable user experience.",
		image: "/images/projects/freedo.png",
		tag: ["All", "Web", "Mobile"],
		gitUrl: "https://github.com/mkg5599/Freedo-Rental-Services",
		previewUrl: "https://freedo.rentals/",
		skills: [
			"React",
			"React Native",
			"TypeScript",
			"Node.js",
			"Express.js",
			"Firebase",
			"PostgreSQL",
			"Redis",
			"AWS",
		],
	},
	{
		id: 4,
		title: "Portfolio Website",
		description:
			"My personal portfolio website showcases my projects, skills, and experiences in an interactive and responsive design. Built with Next.js, three.js, Tailwind CSS, Framer Motion, and React, it delivers a modern and engaging user experience.",
		image: "/images/projects/portfolio.png",
		tag: ["All", "Web"],
		gitUrl: "https://github.com/mkg5599/My-Portfolio",
		previewUrl: "https://manojkumargummadi.com",
		skills: ["Next.js", "React", "three.js", "Tailwind CSS", "Framer Motion"],
	},
	{
		id: 5,
		title: "ML Classification & Recommendation Systems",
		description:
			"Engineered comprehensive machine learning pipeline implementing TF-IDF vectorization, Word2Vec embeddings, and collaborative filtering algorithms for sentiment analysis and document classification using Kaggle datasets with 90%+ accuracy. Developed end-to-end ML workflows with feature engineering, hyperparameter optimization, and multi-class classification problems.",
		image: "/images/projects/recommendation.png",
		tag: ["All", "AI"],
		gitUrl: "https://github.com/mkg5599/Machine-Learning-Projects",
		previewUrl:
			"https://www.kaggle.com/competitions/house-prices-advanced-regression-techniques",
		skills: [
			"Python",
			"TensorFlow",
			"PyTorch",
			"scikit-learn",
			"TF-IDF",
			"Word2Vec",
			"Collaborative Filtering",
			"Data Processing",
		],
	},
	{
		id: 6,
		title: "Side Projects",
		description:
			"Side Projects highlight a diverse portfolio of software solutions, including a trust-based social game, a comprehensive library and contact management system in C++, and a centralized blood donation platform built with PHP and MySQL. Additionally, high-performance computing projects utilizing MPI, OpenMP, CUDA, OpenGL, and GLUT showcase my ability to optimize complex computations.",
		image: "/images/projects/other.png",
		tag: ["All"],
		gitUrl: "https://github.com/mkg5599?tab=repositories",
		previewUrl: "#",
		skills: [
			"C++",
			"C#",
			"PHP",
			"MySQL",
			"JavaScript",
			"CUDA",
			"MPI",
			"OpenGL",
			"GLUT",
		],
	},
];

const ProjectsSection = () => {
	const [tag, setTag] = useState("All");
	const [showAll, setShowAll] = useState(false);
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	const handleTagChange = (newTag) => {
		setTag(newTag);
	};

	const filteredProjects = projectsData.filter((project) =>
		project.tag.includes(tag)
	);

	const displayedProjects = showAll
		? filteredProjects
		: filteredProjects.slice(0, 3);

	const cardVariants = {
		initial: { y: 50, opacity: 0 },
		animate: { y: 0, opacity: 1 },
	};

	return (
		<section id="projects">
			<h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
				My Projects
			</h2>

			<div className="text-white flex flex-row justify-center items-center gap-2 py-6">
				<ProjectTag
					onClick={handleTagChange}
					name="All"
					isSelected={tag === "All"}
				/>
				<ProjectTag
					onClick={handleTagChange}
					name="Web"
					isSelected={tag === "Web"}
				/>
				<ProjectTag
					onClick={handleTagChange}
					name="Mobile"
					isSelected={tag === "Mobile"}
				/>
				<ProjectTag
					onClick={handleTagChange}
					name="AI"
					isSelected={tag === "AI"}
				/>
			</div>

			<ul ref={ref} className="grid md:grid-cols-1 gap-8 md:gap-12">
				{displayedProjects.map((project, index) => (
					<motion.li
						key={project.id}
						variants={cardVariants}
						initial="initial"
						animate={isInView ? "animate" : "initial"}
						transition={{ duration: 0.3, delay: index * 0.4 }}
					>
						<ProjectCard
							title={project.title}
							description={project.description}
							imgUrl={project.image}
							gitUrl={project.gitUrl}
							previewUrl={project.previewUrl}
							skills={project.skills}
							reverse={index % 2 === 1}
						/>
					</motion.li>
				))}
			</ul>

			<div className="flex justify-center mt-8">
				{filteredProjects.length > 3 && (
					<button
						onClick={() => setShowAll(!showAll)}
						className="flex items-center text-white hover:text-gray-300 transition-colors"
					>
						<span className="mr-2">
							{showAll ? "Show Less" : "Show More"}
						</span>
						<svg
							className={`w-6 h-6 transform transition-transform duration-300 ${
								showAll ? "rotate-180" : ""
							}`}
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M19 9l-7 7-7-7"
							/>
						</svg>
					</button>
				)}
			</div>
		</section>
	);
};

export default ProjectsSection;