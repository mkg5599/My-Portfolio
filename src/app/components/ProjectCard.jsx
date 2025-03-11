import React from "react";
import Link from "next/link";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";

const ProjectCard = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
  skills = [],
  reverse = false,
}) => {
  return (
    <>
      <div className="hidden md:flex flex-col md:flex-row rounded-xl overflow-hidden shadow-lg">
        {!reverse && (
          <div className="md:w-1/2">
            <img
              src={imgUrl}
              alt={title}
              className="w-full h-80 object-cover filter grayscale hover:grayscale-0 transition duration-300"
            />
          </div>
        )}

        <div className="md:w-1/2 flex flex-col justify-start p-2">
          <h3
            className={`text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500 relative ${reverse ? "text-left" : "text-right"
              }`}
          >
            {title}
          </h3>

          <div
            className={`mt-14 relative z-10 w-[110%] mx-auto ${!reverse ? " -ml-[10%]" : ""
              }`}
          >
            <div
              className={`bg-gradient-to-br 
                    from-[#1f1f1f] 
                    to-[#2a2a2a] 
                    rounded-lg 
                    p-6
                    shadow-xl 
                    ${reverse ? "shadow-blue-600/20" : "shadow-green-600/20"}`}
            >
              <p className="text-[#ADB7BE] text-left">{description}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-2 justify-center">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-transparent text-[#ADB7BE] text-sm font-medium px-2 py-1 rounded"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="flex gap-4 mt-4 justify-center">
            <Link
              href={gitUrl}
              className="flex items-center justify-center h-10 w-10 border-2 border-transparent rounded-full bg-gradient-to-r from-blue-500 to-green-500 p-0.5"
            >
              <div className="flex items-center justify-center h-10 w-10 bg-[#181818] rounded-full hover:bg-transparent">
                <CodeBracketIcon className="h-6 w-6 text-[#ADB7BE]" />
              </div>
            </Link>
            <Link
              href={previewUrl}
              className="flex items-center justify-center h-10 w-10 border-2 border-transparent rounded-full bg-gradient-to-r from-blue-500 to-green-500 p-0.5"
            >
              <div className="flex items-center justify-center h-10 w-10 bg-[#181818] rounded-full hover:bg-transparent">
                <EyeIcon className="h-6 w-6 text-[#ADB7BE]" />
              </div>
            </Link>
          </div>
        </div>

        {reverse && (
          <div className="md:w-1/2">
            <img
              src={imgUrl}
              alt={title}
              className="w-full h-80 object-cover filter grayscale hover:grayscale-0 transition duration-300 align-bottom"
            />
          </div>
        )}
      </div>

      <div
        className="md:hidden relative rounded-xl overflow-hidden shadow-lg bg-cover bg-center"
        style={{ backgroundImage: `url(${imgUrl})` }}
      >
        <div className="bg-black bg-opacity-90 p-6">
          <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
          <p className="text-[#ADB7BE] text-start mb-4 ">{description}</p>
          <div className="flex flex-wrap gap-2 justify-start">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-transparent text-[#ADB7BE] text-sm font-medium px-2 py-1 rounded"
              >
                {skill}
              </span>
            ))}
          </div>
          <div className="flex gap-4 mt-4 justify-center">
            <Link
              href={gitUrl}
              className="flex items-center justify-center h-10 w-10 border-2 border-transparent rounded-full bg-gradient-to-r from-blue-500 to-green-500 p-0.5"
            >
              <div className="flex items-center justify-center h-10 w-10 bg-[#181818] rounded-full hover:bg-transparent">
                <CodeBracketIcon className="h-6 w-6 text-[#ADB7BE]" />
              </div>
            </Link>
            <Link
              href={previewUrl}
              className="flex items-center justify-center h-10 w-10 border-2 border-transparent rounded-full bg-gradient-to-r from-blue-500 to-green-500 p-0.5"
            >
              <div className="flex items-center justify-center h-10 w-10 bg-[#181818] rounded-full hover:bg-transparent">
                <EyeIcon className="h-6 w-6 text-[#ADB7BE]" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;