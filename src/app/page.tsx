'use client';

import Navbar from '@/components/header/Header';
import CustomCursor from '@/components/shared/custom-cursor/custom-cursor';
import Hero from '@/components/home/hero/Hero';
import AnimText from '@/components/shared/parallaxtext/AnimText';
import Projects from '@/components/home/projects/Projects';
import About from '@/components/home/about/About';
import Skills from '@/components/home/skills/Skills';
import Services from '@/components/home/services/Services';
import Learning from '@/components/home/learning/Learning';
import Experience from '@/components/home/experience/Experience';
import Certificates from '@/components/home/certificates/Certificates';
import Footer from '@/components/footer/Footer';
import Intro from '@/components/intro/Intro';

export default function Home() {

  return (
    <div className="overflow-x-hidden">
      <Intro />
      <CustomCursor />
      <Navbar />
      <Hero />
      <AnimText text={'Fullstack Developer'} />
      <Projects />
      <About />
      <div className="min-h-screen flex flex-col justify-center items-center pt-20 xl:pt-0">
        <AnimText text={'My Skills'} />
        <Skills />
      </div>
      <Services />
      <Experience />
      <Certificates />
      <Learning />
      <Footer />
    </div>
  );
}
