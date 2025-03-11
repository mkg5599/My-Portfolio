"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-6 md:p-12 flex flex-col md:flex-row justify-between items-center">
        <Link href="/" className="flex items-center mb-4 md:mb-0">
          <svg width="40" height="40" viewBox="0 0 100 100">
            {/* Static square border */}
            <rect
              x="5"
              y="5"
              width="90"
              height="90"
              fill="none"
              stroke="white"
              strokeWidth="2"
            />
            {/* Centered bold letter "M" */}
            <text
              x="50"
              y="55"
              dominantBaseline="middle"
              textAnchor="middle"
              fill="white"
              fontSize="50"
              fontWeight="bold"
              fontFamily="Helvetica, Arial, sans-serif"
            >
              M
            </text>
          </svg>
        </Link>
        <p className="text-xs text-slate-500 text-center md:text-right">
          Attribution: Internet illustrations by{" "}
          <a
            href="https://storyset.com/internet"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white"
          >
            Storyset
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;