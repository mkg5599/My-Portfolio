"use client";
import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#121212] z-50">
      <svg width="80" height="80" viewBox="0 0 100 100">
        <rect
          x="5"
          y="5"
          width="90"
          height="90"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeDasharray="360"
          strokeDashoffset="360"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="360"
            to="0"
            dur="2s"
            fill="freeze"
          />
        </rect>
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
    </div>
  );
};

export default Loader;