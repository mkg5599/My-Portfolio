"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  // NEW PROJECT 1
  {
    id: 1,
    title: "Freedo Rental Services",
    description:
      "Freedo Rental Services is an innovative platform that streamlines bike rentals across India by offering secure payment integration and real-time, location-based availability. Built with modern technologies such as React, React Native, TypeScript, Node.js, Firebase, PostgreSQL, Redis, and AWS, the platform delivers a seamless and scalable user experience.",
    image: "/images/projects/freedo.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "#",
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
  // NEW PROJECT 2
  {
    id: 2,
    title: "SpeedScore",
    description:
      "SpeedScore is a dynamic application designed for speedgolf enthusiasts. It enables users to track rounds, view detailed course maps, and connect with a vibrant community. Developed using the MERN stack, Redux Thunk, and AWS, the application emphasizes high performance and an engaging user experience.",
    image: "/images/projects/speedscore.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "#",
    previewUrl: "https://www.speedscore.org/",
    skills: [
      "React",
      "React Native",
      "TypeScript",
      "MongoDB",
      "Express",
      "Node.js",
      "Redux Thunk",
      "AWS",
    ],
  },
  {
    id: 3,
    title: "Recommendation System",
    description:
      "The Recommendation System is an AI-powered engine that leverages convolutional neural networks, natural language processing, and TF-IDF techniques to deliver personalized product suggestions. This system enhances user engagement through data-driven, tailored recommendations.",
    image: "/images/projects/recommendation.png",
    tag: ["All"],
    gitUrl: "#",
    previewUrl: "#",
    skills: [
      "Python",
      "TensorFlow",
      "CNN",
      "NLP",
      "TF-IDF",
      "Data Processing",
    ],
  },
  {
    id: 4,
    title: "ML Projects",
    description:
      "ML Projects encompass a suite of advanced machine learning models addressing challenges such as housing price prediction, sentiment analysis, and binary classification. Utilizing Python, Scikit-learn, TensorFlow, and NLP, these models are optimized for accuracy and efficiency, providing robust data-driven insights.",
    image: "/images/projects/housing-price.png",
    tag: ["All"],
    gitUrl: "https://github.com/mkg5599/Machine-Learning-Projects",
    previewUrl:
      "https://www.kaggle.com/competitions/house-prices-advanced-regression-techniques",
    skills: [
      "Python",
      "Scikit-learn",
      "TensorFlow",
      "NLP",
      "Data Processing",
    ],
  },
  {
    id: 5,
    title: "Parallel Programming Projects",
    description:
      "Parallel Programming Projects showcase high-performance computing solutions that accelerate complex computations through advanced parallel programming techniques. Using MPI, OpenMP, OpenGL, GLUT and CUDA, these projects are optimized for resource-intensive applications and deliver significant performance enhancements.",
    image: "/images/projects/parallelprogramming.png",
    tag: ["All"],
    gitUrl: "#",
    previewUrl: "#",
    skills: ["C++", "CUDA", "MPI", "OpenGL", "GLUT"],
  },
  {
    id: 6,
    title: "Side Projects",
    description:
      "Side Projects highlight a diverse portfolio of software solutions, including a trust-based social game, a comprehensive library and contact management system in C++, and a centralized blood donation platform built with PHP and MySQL. These projects illustrate a broad spectrum of technology implementations and innovative software development approaches.",
    image: "/images/projects/other.png",
    tag: ["All"],
    gitUrl: "https://github.com/mkg5599?tab=repositories",
    previewUrl: "#",
    skills: ["C++", "C#", "PHP", "MySQL", "JavaScript"],
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
    : filteredProjects.slice(0, 2);

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>

      {/* Uncomment or update your tag buttons if needed */}
      {/* <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
        <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"} />
        <ProjectTag onClick={handleTagChange} name="Mobile" isSelected={tag === "Mobile"} />
      </div> */}

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
        {filteredProjects.length > 2 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center text-white hover:text-gray-300 transition-colors"
          >
            <span className="mr-2">
              {showAll ? "Show Less" : "Show More"}
            </span>
            <svg
              className={`w-6 h-6 transform transition-transform duration-300 ${showAll ? "rotate-180" : ""
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