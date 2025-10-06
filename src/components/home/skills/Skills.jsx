import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import html from "/public/logos/html.png";
import css from "/public/logos/css.png";
import javascript from "/public/logos/javascript.png";
import react from "/public/logos/react.png";
import nextjs from "/public/logos/nextjs.webp";
import tailwind from "/public/logos/tailwind.png";
import firebase from "/public/logos/firebase.png";
import figma from "/public/logos/figma.png";
import photoshop from "/public/logos/photoshop.png";
import illustrator from "/public/logos/illustrator.png";
import redux from "/public/logos/redux.png";
import typescript from "/public/logos/typescript.png";
import angular from "/public/logos/angular.png";
import postgresql from "/public/logos/postgresql.png";


import Image from "next/image";
import Wrapper from "../../shared/wrapper/Wrapper";

const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { type: "spring", stiffness: 100 }
    },
    hover: { scale: 1.2, transition: { type: "spring", stiffness: 300 } },
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const Skills = () => {
    const controls = useAnimation();
    const { ref, inView } = useInView({ threshold: 0.2 });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [controls, inView]);

    const skillsData = [
        { id: 1, icon: html, name: "HTML" },
        { id: 2, icon: css, name: "CSS" },
        { id: 3, icon: javascript, name: "JavaScript" },
        { id: 4, icon: typescript, name: "TypeScript" },
        { id: 5, icon: react, name: "React" },
        { id: 6, icon: nextjs, name: "Next.js" },
        { id: 6, icon: angular, name: "Angular" },
        { id: 7, icon: redux, name: "Redux" },
        { id: 7, icon: postgresql, name: "PostgreSQL" },
        { id: 8, icon: tailwind, name: "TailwindCSS" },
        { id: 9, icon: firebase, name: "Firebase" },
        { id: 11, icon: photoshop, name: "Photoshop" },
        { id: 12, icon: illustrator, name: "Illustrator" },
    ];

    return (
        <Wrapper>
            <motion.div
            id="skills"
                ref={ref}
                className="div-container flex flex-wrap justify-center items-center gap-x-6 xl:gap-x-14 gap-y-6 xl:gap-y-10  py-20 xl:px-0 px-3"
            // variants={containerVariants}
            // initial="hidden"
            // animate={controls}
            >
                {skillsData.map((skill) => (
                    <motion.div
                        key={skill.id}
                        className="flex flex-col xl:gap-2 justify-center items-center"
                        variants={skillVariants}
                        whileHover="hover"
                    >
                        <div className="bg-gray-500/10 p-3 xl:p-4 rounded-xl flex justify-center items-center text-center">
                            <Image
                                src={skill.icon}
                                alt={skill.name}
                                className="w-[40px] h-[40px] xl:w-[50px] xl:h-[50px] object-contain"
                            />

                        </div>
                        <p className="text-center">{skill.name}</p>
                    </motion.div>
                ))}
            </motion.div>
        </Wrapper>
    );
};

export default Skills;
