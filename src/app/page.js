"use client"
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import ExperienceSection from "./components/ExperienceSection";
import ThreeBackground from "./components/ThreeBackground";
import Loader from "./components/Loader";
import { useState, useEffect } from "react";
import ExperienceHighlights from "./components/ExperienceHighlights";

export default function Home() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
        <ExperienceHighlights />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
