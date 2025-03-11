"use client"
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import ExperienceSection from "./components/ExperienceSection";
import ThreeBackground from "./components/ThreeBackground";
import Loader from "./components/Loader";
import { useState, useEffect } from "react";

export default function Home() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set a timer to hide the loader after 3 seconds (adjust as needed)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <ThreeBackground />
      <div className="container mt-24 mx-auto px-12 py-4 z-10">

        <HeroSection />
        {/* <AchievementsSection /> */}
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
