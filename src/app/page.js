"use client";

import Navbar from "@/components/header/Header";
import CustomCursor from "@/components/shared/custom-cursor/custom-cursor";
import Hero from "@/components/home/hero/Hero";
import AnimText from "@/components/shared/parallaxtext/AnimText";
import Projects from "@/components/home/projects/Projects";
import About from "@/components/home/about/About";
import Skills from "@/components/home/skills/Skills";
import Services from "@/components/home/services/Services";
import Learning from "@/components/home/learning/Learning";
import Footer from "@/components/footer/Footer";
import Intro from "@/components/intro/Intro";
import { useEffect } from "react";
import { getViews, updateViews } from "@/utils/getViews";

export default function Home() {
  useEffect(() => {
    updateViews();
    getViews();
  }, [])

  return (
    <div className="overflow-x-hidden">
      <Intro />
      <CustomCursor />
      <Navbar />
      <Hero />
      <AnimText text={"Fullstack Developer"} />
      <Projects />
      <About />
      <div className="min-h-screen flex flex-col justify-center items-center pt-20 xl:pt-0">
        <AnimText text={"My Abilities"} />
        <Skills />
      </div>
      <Services />
      <Learning />
      <Footer />
    </div>
  );
}
