"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import InteractiveImage from "./InteractiveImage";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-transparent">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="mb-8 md:mb-0 text-center md:text-left"
          >
            <h1 className="text-5xl sm:text-7xl font-bold text-white mb-4">
              Hi, I&apos;m{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">
                Manoj
              </span>
            </h1>
            <TypeAnimation
              sequence={[
                "Lead Software Engineer", 1500,
                "Full-Stack Engineer", 1500,
                "Machine Learning Engineer", 1500,
                "Technical Mentor", 1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="block text-2xl sm:text-3xl text-white mb-6"
            />
            <p className="text-white text-lg mb-8">
              I engineer robust, scalable digital solutions from full-stack applications to advanced AI systems - that drive innovation and empower teams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="/#contact"
                className="px-8 py-3 rounded-full bg-blue-500 text-white font-semibold hover:bg-blue-600 transition"
              >
                Contact Me
              </Link>
              <Link
                href="https://drive.google.com/file/d/1XWl6gValYyYDE0yCtQpBnGCs6BNxIMcZ/view?usp=sharing"
                target="_blank"
                className="px-8 py-3 rounded-full border border-blue-500 text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition"
              >
                Download CV
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex justify-center"
          >
            <InteractiveImage />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;