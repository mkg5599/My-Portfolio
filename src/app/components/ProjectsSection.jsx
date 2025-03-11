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
      "Led the frontend development for Freedo Rental Services, a web and mobile application for bike rentals across India. Implemented secure payments, location-based availability (React, React Native, TypeScript, Node.js, Firebase, PostgreSQL, Redis, AWS). Utilized Agile methodologies and optimized app performance.",
    image: "/images/projects/freedo.png", // Update this path to your real screenshot
    tag: ["All", "Web", "Mobile"],
    gitUrl: "#", // If no public repo, keep "#"
    previewUrl: "https://freedo.rentals/",
  },
  // NEW PROJECT 2
  {
    id: 2,
    title: "SpeedScore",
    description:
      "Developed the mobile application for SpeedScore, a platform for speedgolf enthusiasts to track rounds, view course maps, and engage with the community. Built using the MERN stack (MongoDB, Express, React, Node.js) with Redux Thunk, AWS, and Agile methodologies.",
    image: "/images/projects/speedscore.png", // Update this path to your real screenshot
    tag: ["All", "Web", "Mobile"],
    gitUrl: "#",
    previewUrl: "https://www.speedscore.org/",
  },
  {
    id: 3,
    title: "Recommendation System",
    description:
      "AI-powered recommendation engine using CNN, NLP, and TF-IDF for personalized product suggestions. Bachelor's Capstone Project.",
    image: "/images/projects/recommendation.png",
    tag: ["All"],
    gitUrl: "#",
    previewUrl: "#",
  },
  {
    id: 4,
    title: "ML Projects",
    description:
      "Built ML models for housing price prediction, sentiment analysis, and binary classification using Python, Scikit-learn, TensorFlow, and NLP, optimizing accuracy and efficiency.",
    image: "/images/projects/housing-price.png",
    tag: ["All"],
    gitUrl: "https://github.com/mkg5599/Machine-Learning-Projects",
    previewUrl: "https://www.kaggle.com/competitions/house-prices-advanced-regression-techniques",
  },
  {
    id: 5,
    title: "Parallel Programming Projects",
    description:
      "Accelerated computations using MPI, OpenMP, and CUDA for various HPC tasks.",
    image: "/images/projects/parallelprogramming.png",
    tag: ["All"],
    gitUrl: "#",
    previewUrl: "#",
  },
  {
    id: 6,
    title: "Side Projects",
    description:
      "Developed various software solutions, including a trust-based social game, a library and contact management system in C++, and a centralized blood donation platform using PHP and MySQL.",
    image: "/images/projects/other.jpg",
    tag: ["All"],
    gitUrl: "https://github.com/mkg5599?tab=repositories",
    previewUrl: "#",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>

      {/* Tag Buttons: All, Web, Mobile */}
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
      </div>

      <ul ref={ref} className="grid md:grid-cols-1 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
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
              skills={[
                "React.js",
                "React Native",
                "Redux",
                "TypeScript",
                "Node.js",
                "AWS"
              ]}
              reverse={index % 2 === 1}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;