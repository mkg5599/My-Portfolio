"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const EmailSection = () => {
  return (
    <section id="contact" className="relative my-12 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent opacity-10"></div>
      <div className="relative z-10 container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="flex-1 text-center md:text-left">
          <h5 className="text-3xl font-bold text-white mb-4">Get In Touch</h5>
          <p className="text-[#ADB7BE] mb-6">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open!
          </p>
          <div className="flex flex-row gap-4 justify-center md:justify-start mb-6">
            <Link href="https://github.com/mkg5599" target="_blank">
              <FaGithub className="text-5xl text-white drop-shadow-[0_0_8px_rgba(59,130,246,0.8)] hover:text-blue-400 hover:scale-110 transition-transform duration-300" />
            </Link>
            <Link href="https://www.linkedin.com/in/manoj-kumar-gummadi/" target="_blank">
              <FaLinkedin className="text-5xl text-white drop-shadow-[0_0_8px_rgba(59,130,246,0.8)] hover:text-blue-400 hover:scale-110 transition-transform duration-300" />
            </Link>
            <Link href="mailto:manojgummadik@gmail.com" target="_blank">
              <FiMail className="text-5xl text-white drop-shadow-[0_0_8px_rgba(59,130,246,0.8)] hover:text-blue-400 hover:scale-110 transition-transform duration-300" />
            </Link>
          </div>
        </div>
        <div className="flex-1 relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
          <Image
            src="/images/emailContact.svg"
            alt="Contact Illustration"
            fill
            className="object-contain rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default EmailSection;