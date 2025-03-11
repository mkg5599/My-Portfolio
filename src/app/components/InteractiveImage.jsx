"use client";
import React from "react";
import { motion } from "framer-motion";

const InteractiveImage = () => {
    return (
        <motion.div
            whileHover={{ scale: 1.05, rotate: 5 }}
            whileTap={{ scale: 0.95, rotate: -5 }}
            className="relative w-64 h-64 rounded-full overflow-hidden bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center"
        >
            {/* Abstract SVG Graphic */}
            <svg viewBox="0 0 100 100" className="w-40 h-40">
                <defs>
                    <linearGradient id="graphicGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ffffff" />
                        <stop offset="100%" stopColor="#000000" />
                    </linearGradient>
                </defs>
                <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="url(#graphicGradient)"
                    strokeWidth="5"
                    fill="none"
                />
            </svg>
        </motion.div>
    );
};

export default InteractiveImage;