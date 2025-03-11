"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { FaGitSquare, FaGithub, FaLinkedin } from "react-icons/fa";
import { DiGit } from "react-icons/di";
import { SiGit } from "react-icons/si";

const EmailSection = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center my-12 py-24 gap-4 relative text-center"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="z-10 max-w-md">
        <h5 className="text-3xl font-bold text-white my-2">Get In Touch</h5>
        <p className="text-[#ADB7BE] mb-4">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open!
        </p>
        <div className="socials flex flex-row gap-4 justify-center mb-6 ">
          <Link href="https://github.com/mkg5599" target="_blank">
            <FaGithub className="text-5xl text-white rop-shadow-[0_0_8px_rgba(59,130,246,0.8)] hover:text-blue-400 hover:scale-110 transition-transform duration-300" />
          </Link>
          <Link href="https://www.linkedin.com/in/manoj-kumar-gummadi/" target="_blank">
            <FaLinkedin className="text-5xl text-white drop-shadow-[0_0_8px_rgba(59,130,246,0.8)] hover:text-blue-400 hover:scale-110 transition-transform duration-300" />
          </Link>
          <Link href="mailto:your-email@example.com" target="_blank">
            <FiMail className="text-5xl text-white drop-shadow-[0_0_8px_rgba(59,130,246,0.8)] hover:text-blue-400 hover:scale-110 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;