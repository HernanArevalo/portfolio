import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { 
  javascript,
  react,
  nextjs,
  tailwind,
  firebase,
  photoshop,
  illustrator,
  redux,
  typescript,
  angular,
  postgresql,
  nodejs,
  python,
  sql,
} from "@/../public/logos";



import Image from "next/image";
import { Wrapper } from "../../shared/wrapper";

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
        { icon: javascript, name: "JavaScript" },
        { icon: typescript, name: "TypeScript" },
        { icon: react, name: "React" },
        { icon: nextjs, name: "Next.js" },
        { icon: angular, name: "Angular" },
        { icon: redux, name: "Redux" },
        { icon: nodejs, name: "NodeJS" },
        { icon: postgresql, name: "PostgreSQL" },
        { icon: python, name: "Python" },
        { icon: tailwind, name: "TailwindCSS" },
        { icon: firebase, name: "Firebase" },
        { icon: sql, name: "SQL" },
        { icon: photoshop, name: "Photoshop" },
        { icon: illustrator, name: "Illustrator" },
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
                {skillsData.map((skill, idx) => (
                    <motion.div
                        key={idx}
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
