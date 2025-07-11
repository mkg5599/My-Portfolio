"use client";
import React from "react";
import CountUp from "react-countup";

const achievementsList = [
    {
        metric: "Years of Experience",
        value: 4,
        postfix: "+",
    },
    {
        metric: "Projects",
        value: 10,
        postfix: "+",
    },
    {
        prefix: "~",
        metric: "Users",
        value: 1000000,
    },
];

const ExperienceHighlights = () => {
    return (
        <div className="py-8 px-4 sm:py-16 xl:px-16">
            <div className="border border-[#33353F] rounded-md py-8 px-4 sm:px-16 flex flex-col sm:flex-row items-center justify-between gap-4">
                {achievementsList.map((achievement, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center mx-2"
                    >
                        <h2 className="text-white text-3xl sm:text-4xl font-bold flex flex-row items-center">
                            {achievement.prefix && (
                                <span className="mr-1">{achievement.prefix}</span>
                            )}
                            <CountUp
                                start={0}
                                end={achievement.value}
                                duration={2}
                                separator=","
                                className="text-white font-bold"
                            />
                            {achievement.postfix && (
                                <span className="ml-1">{achievement.postfix}</span>
                            )}
                        </h2>
                        <p className="text-[#ADB7BE] text-sm sm:text-base mt-2">
                            {achievement.metric}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExperienceHighlights;