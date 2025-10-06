import { useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import { motion, useInView } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiLink } from "react-icons/fi";
import { Wrapper } from "../../shared/wrapper";


// images
import twitterBotImg from "/public/projects/twitter-bot.png";
import moviesImg from "/public/projects/movies.png";
import espacioBlank from "/public/projects/espacio-blank.png";
import spaceImg from "/public/projects/space-tourism.png";
import todoImg from "/public/projects/to-do.png";
import tesloShopImg from "/public/projects/teslo-shop.png";
import journalImg from "/public/projects/journal-app.png";
import valoImg from "/public/projects/valorant.png";
import calendarImg from "/public/projects/calendar.png";
import landing1Img from "/public/projects/landing1.png";
import landing2Img from "/public/projects/landing2.png";
import smashAppImg from "/public/projects/smash-app.png";
import oldPortfolioImg from "/public/projects/hernan-arevalo.png";


interface project {
    name: string,
    image: StaticImageData,
    link: string,
    githubLink: string
}

const Projects = () => {
    const [showMore, setShowMore] = useState(false);
    const router = useRouter();
    const portfolioCards: project[] = [
        {
            name: "Smash App",
            image: smashAppImg,
            link: "",
            githubLink: "https://github.com/HernanArevalo/XAcadamy"
        },
        {
            name: "Espacio Blank",
            image: espacioBlank,
            link: "",
            githubLink: "https://github.com/HernanArevalo/espacio-blank-app"
        },
        {
            name: "Teslo Shop",
            image: tesloShopImg,
            link: "https://shop.hernanarevalo.com.ar",
            githubLink: "https://github.com/HernanArevalo/teslo-shop"
        },
        {
            name: "Movies",
            image: moviesImg,
            link: "https://movies.hernanarevalo.com.ar",
            githubLink: "https://github.com/HernanArevalo/movies-app"
        },
        {
            name: "Old Portfolio",
            image: oldPortfolioImg,
            link: "https://old.hernanarevalo.com.ar",
            githubLink: "https://github.com/HernanArevalo/HernanArevalo"
        },
        {
            name: "ToDo App",
            image: todoImg,
            link: "https://todo.hernanarevalo.com.ar",
            githubLink: "https://github.com/HernanArevalo/todo-app"
        },
        {
            name: "Twitter Bot - 300k followers",
            image: twitterBotImg,
            link: "https://x.com/FrasesDeNTVG1",
            githubLink: "https://github.com/HernanArevalo/twitter-lyrics-bot"
        },
        {
            name: "Valo Wiki",
            image: valoImg,
            link: "https://valorant.hernanarevalo.com.ar/",
            githubLink: "https://github.com/HernanArevalo/valo-app"
        },
        {
            name: "Space Tourism",
            image: spaceImg,
            link: "https://space.hernanarevalo.com.ar/",
            githubLink: "https://github.com/HernanArevalo/space-tourism-app"
        },
        {
            name: "Journal App",
            image: journalImg,
            link: "https://journal-app-ha.vercel.app/",
            githubLink: "https://github.com/HernanArevalo/journal-app"
        },
        {
            name: "Calendar",
            image: calendarImg,
            link: "https://calendar-app-hernanarevalo.vercel.app",
            githubLink: "https://github.com/HernanArevalo/calendar-app"
        },
        {
            name: "Landing 1",
            image: landing1Img,
            link: "https://hernanarevalo.github.io/landing-1/",
            githubLink: "https://github.com/HernanArevalo/landing-1"
        },
        {
            name: "Landing 2",
            image: landing2Img,
            link: "https://hernanarevalo.github.io/landing-2",
            githubLink: "https://github.com/HernanArevalo/landing-2"
        },
    ];

    const visibleCards = showMore ? portfolioCards : portfolioCards.slice(0, 4);

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const h1Ref = useRef(null);
    const h2Ref = useRef(null);
    const isH1InView = useInView(h1Ref, { once: true });
    const isH2InView = useInView(h2Ref, { once: true });

    return (
        <Wrapper>
            <div
                id="portfolio"
                className="div-container min-h-screen h-full text-center items-start justify-start w-full flex md:mt-32 lg:mt-32 lg:px-0 md:px-0 px-3 pt-20"
            >
                <div className="flex flex-col w-full justify-start items-start text-start">
                    <motion.h1
                        ref={h1Ref}
                        className="text-primary-green text-lg font-medium"
                        variants={textVariants}
                        initial="hidden"
                        animate={isH1InView ? "visible" : "hidden"}
                    >
                        Portfolio
                    </motion.h1>
                    <motion.h2
                        ref={h2Ref}
                        className="text-primary-white text-[40px] sm:text-[40px] md:text-[40px] xl:text-7xl font-semibold py-3"
                        variants={textVariants}
                        initial="hidden"
                        animate={isH2InView ? "visible" : "hidden"}
                    >
                        Latest Projects
                    </motion.h2>
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 mt-6 md:mt-10 md:gap-x-20 lg:gap-x-20 gap-y-10 lg:gap-y-16 w-full">
                        {visibleCards.map((e, index) => (

                                <motion.div
                                    key={index}
                                    className={`w-full h-[400px]  md:max-h-[400px] rounded-2xl cursor-pointer relative overflow-hidden group ${index % 2 === 1 ? "xl:-mt-[10rem]" : ""
                                        }`}
                                    variants={textVariants}
                                    initial="hidden"
                                    animate={isH1InView ? "visible" : "hidden"}
                                >
                                    <div className="absolute top-50 left-0 w-full h-[30%] bg-gradient-to-b from-black/80 via-black/40 to-transparent flex items-start justify-start p-5">
                                        <h2 className="text-white text-xl font-semibold">{e.name}</h2>
                                    </div>
                                    <Image
                                        src={e.image}
                                        alt={e.name}
                                        width={1080}
                                        height={1080}
                                        className="w-full h-full object-cover rounded-2xl group-hover:scale-110 ease-in-out duration-500 transition-all"
                                    />
                                    <div className="flex items-center bg-gradient-to-t h-[50%] from-black via-black/50 to-transparent justify-center w-full gap-5 translate-y-56 group-hover:-translate-y-40 ease-linear transition-all duration-300">
                                        {e.githubLink !== "" &&
                                            <button onClick={() => window.open(e.githubLink, '_blank')} className="bg-primary-gray border border-primary-white/20  text-white hover:scale-110 ease-in-out duration-150 transition-all  rounded-xl w-14 h-14 flex justify-center items-center">
                                                <FaGithub size={25} />
                                            </button>
                                        }
                                        {e.link !== "" &&
                                            <button onClick={() => window.open(e.link, '_blank')} className="bg-primary-gray text-white  border border-primary-white/20 hover:scale-110 ease-in-out duration-150 transition-all  rounded-xl w-14 h-14  flex justify-center items-center">
                                                <FiLink size={25} />
                                            </button>
                                        }

                                    </div>
                                </motion.div>
                        ))}

                        {/* Empty div for the first column to create space */}
                        <div className="hidden md:block xl:block"></div>

                        {/* Show More/Show Less button */}
                        <div className="flex justify-center mb-10 xl:-mt-[10rem]">
                            <motion.button
                                onClick={() => setShowMore(!showMore)}
                                className="border text-lg max-h-[60px] lg:text-xl font-semibold hover:bg-primary-white hover:text-primary-gray transition-all ease-in-out duration-300 border-secondary-text/20 rounded-lg lg:rounded-xl py-3 lg:py-3 px-8 md:px-14 text-primary-white"
                            >
                                {showMore ? "Show Less" : "More Projects"}
                            </motion.button>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default Projects;
