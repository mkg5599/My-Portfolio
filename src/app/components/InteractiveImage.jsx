"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const InteractiveImage = () => {
    return (
        <motion.div
            whileHover={{ scale: 1.05, rotate: 5 }}
            whileTap={{ scale: 0.95, rotate: -5 }}
            className="relative w-[20rem] h-[20rem] md:w-[30rem] md:h-[30rem] lg:w-[40rem] lg:h-[40rem]  overflow-hidden flex items-center justify-center"
        >
            <motion.div
                whileHover={{ scale: 1.1 }}
                className="relative w-full h-full"
            >
                <Image
                    src="/images/character.svg"
                    alt="Character"
                    fill
                    className="object-contain"
                />
            </motion.div>
        </motion.div>
    );
};

export default InteractiveImage;