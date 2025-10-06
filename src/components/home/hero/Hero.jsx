import { Wrapper } from '@/components/shared/wrapper';
import user from '/public/profile.png';

import Image from 'next/image';
import { TiSocialLinkedin } from 'react-icons/ti';
import { TbBrandGithubFilled } from 'react-icons/tb';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import {
  curriculumURL,
  githubURL,
  instagramURL,
  linkedinURL,
  whatsappURL,
} from '@/constants/socials';

const Hero = () => {
  const router = useRouter();
  const seeWorkHandle = () => {
    router.push('#portfolio');
  };

  const socialIcon = [
    {
      icon: <TbBrandGithubFilled size={28} />,
      link: githubURL,
    },
    {
      icon: <TiSocialLinkedin size={28} />,
      link: linkedinURL,
    },
    {
      icon: <FaInstagram size={28} />,
      link: instagramURL,
    },
    { icon: <FaWhatsapp size={28} />, link: whatsappURL },
  ];
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: 'easeOut' },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: 'easeOut' },
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      rotate: 2,
      transition: {
        duration: 0.5,
        ease: [0.6, 0.01, -0.05, 0.95],
      },
    },
  };

  const socialIconVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.2, ease: 'easeOut' },
    },
  };
  const svgVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.2, ease: 'easeOut' },
    },
  };
  return (
    <div
      id="home"
      className="div-container flex md:flex-row flex-col relative group  md:max-w-screen-lg xl:max-w-screen-2xl mx-auto "
    >
      <div className="absolute inset-0 top-[15%] left-0 md:ml-[-0.5rem] ml-0 xl:block md:hidden sm:hidden hidden">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={svgVariants}
          className="hidden-element"
        >
          <svg
            width="109"
            height="113"
            viewBox="0 0 109 113"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-primary-green transition-transform duration-300 transform group-hover:scale-110 group-hover:translate-x-2 group-hover:-translate-y-2" // Add transition and transform properties
            style={{
              transform:
                'perspective(800px) translateX(-9.53653px) translateY(-5.08558px) scale(1.04)',
            }}
          >
            <g clipPath="url(#clip0_98_223)">
              <path
                d="M70.7054 108.76C68.9961 107.094 69.2151 105.594 71.2943 104.417C73.6631 103.097 76.0024 101.794 78.3712 100.475C78.6377 100.326 78.881 100.171 79.2492 99.9275C78.5599 99.71 78.0394 99.515 77.4893 99.3365C70.1496 97.0623 63.1994 93.9309 57.0401 89.3115C49.1048 83.3535 43.5163 75.7974 41.5877 65.9696C41.1014 63.5054 41.0671 60.9445 40.9207 58.4266C40.8789 57.7709 40.7434 57.3614 40.2046 56.9632C33.1174 51.6385 27.3894 45.2076 23.7299 37.1006C19.3567 27.4319 19.0614 17.6643 22.9663 7.80735C23.6526 6.06712 24.4781 4.36578 25.3603 2.72982C25.9429 1.62937 27.3054 1.31659 28.3247 1.87392C29.4303 2.48016 29.8602 3.71496 29.3408 4.85783C29.0001 5.62956 28.5963 6.35888 28.2388 7.10115C22.435 19.5484 24.1874 31.259 32.0394 42.3458C34.6042 45.9607 37.6775 49.0984 41.115 51.9168C41.2413 52.0017 41.3444 52.08 41.5738 52.2432C41.6701 51.8986 41.7407 51.6459 41.8178 51.3702C43.4815 44.7014 46.5267 38.815 51.9971 34.4487C56.4662 30.8923 61.6039 29.0585 67.4006 29.7868C73.1741 30.5087 77.5455 33.5634 80.6292 38.3636C83.7464 43.2227 84.6755 48.4859 82.9928 54.0595C81.5131 58.9963 78.0833 62.3229 73.6313 64.7446C69.0905 67.2158 64.3481 67.2776 59.4476 66.2052C54.8318 65.1877 50.5167 63.3625 46.4124 61.0512C46.1934 60.9405 46.0039 60.8132 45.7784 60.7255C45.7321 60.7125 45.6561 60.716 45.3753 60.7366C45.7054 62.6866 45.9131 64.6272 46.3847 66.5177C48.3129 74.2894 52.8415 80.3603 59.1285 85.2384C64.2014 89.1827 69.9225 91.9706 75.9882 94.0621C77.4235 94.5623 78.8948 95.023 80.5388 95.5816C80.3169 95.1232 80.2123 94.8711 80.0782 94.6354C78.6593 92.1087 77.2172 89.5754 75.7982 87.0487C75.312 86.1944 75.3112 85.3025 75.8799 84.5202C76.4125 83.7773 77.1991 83.3779 78.0739 83.6472C78.6704 83.8387 79.3779 84.2593 79.6862 84.7665C82.1601 88.9753 84.5748 93.217 86.9598 97.4752C87.7751 98.9415 87.3103 100.694 85.8529 101.525C81.5761 103.946 77.2826 106.338 72.9722 108.7C72.6169 108.898 72.1842 108.926 71.7785 109.036C71.4011 108.955 71.0532 108.858 70.7054 108.76ZM46.4703 51.6301C46.3112 52.3783 46.0661 53.5235 45.8842 54.7112C45.8536 54.9998 46.0227 55.4682 46.2521 55.6314C50.4752 58.3226 54.9683 60.4948 59.8663 61.6655C64.3173 62.7361 68.6038 62.6955 72.6112 60.0753C77.3782 56.9737 79.8915 52.7221 79.0547 47.0389C78.1958 41.077 74.9438 36.7003 69.0778 34.7885C64.0171 33.1264 59.3957 34.6339 55.2894 37.6971C50.6901 41.0933 48.158 45.8597 46.4703 51.6301Z"
                fill="currentColor"
              />
            </g>
            <defs>
              <clipPath id="clip0_98_223">
                <rect
                  width="91.5823"
                  height="86.8987"
                  fill="white"
                  transform="translate(108.342 24.1873) rotate(105.614)"
                />
              </clipPath>
            </defs>
          </svg>
        </motion.div>
      </div>
      <Wrapper>
        <motion.div
          initial="hidden"
          animate="visible"
          className="flex md:flex-col lg:flex-row sm:flex-col flex-col w-full items-center justify-center lg:justify-between h-full pt-32 pb-24 lg:px-0 px-3"
        >
          <motion.div
            variants={textVariants}
            className="max-w-full sm:max-w-full md:max-w-full lg:max-w-[70%] w-full flex flex-col lg:justify-start justify-center lg:text-left text-center md:gap-y-4 ml-[0rem] xl:ml-[-2.5rem]"
          >
            <h2 className="text-lg md:text-2xl font-bold text-secondary-text">
              Hello There,
            </h2>
            <h1 className="sm:text-5xl text-5xl lg:text-6xl xl:text-7xl font-semibold">
              I am <span className="name">Hernán</span>
            </h1>
            <h3 className="sm:text-5xl text-5xl lg:text-6xl xl:text-7xl font-semibold">
              FullStack Developer
            </h3>
            <p className="text-lg lg:text-xl lg:text-left text-center lg:mx-0 mx-auto max-w-[500px] text-secondary-text tracking-wide">
              My passion for design, code, and web interaction fuels my journey
              in the development realm.
            </p>
            <motion.div
              variants={buttonVariants}
              className="flex flex-wrap gap-4 xl:gap-x-6 lg:justify-start justify-center items-center mt-6 z-10"
            >
              <button
                onClick={() => seeWorkHandle()}
                className="border text-lg lg:text-xl font-semibold hover:bg-primary-white hover:text-primary-gray transition-all ease-in-out duration-300 border-secondary-text/20 rounded-lg lg:rounded-xl py-3 lg:py-3 px-8 md:px-10 text-primary-white"
              >
                See my Work
              </button>
              <a href={curriculumURL} target="_blank">
                <button className="text-secondary-text text-lg lg:text-xl font-semibold hover:text-primary-white ease-in-out duration-300 transition-all">
                  Download CV
                </button>
              </a>
            </motion.div>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={svgVariants}
            className="hidden-element w-full lg:w-[40%] mt-5 transition-transform duration-300 border-primary-white/30 border-4 rounded-3xl overflow-hidden"
          >
            <Image
              src={user}
              alt="profile photo"
              height={1080}
              width={1080}
              className="lg:w-[500px] w-full object-cover h-[400px] lg:h-[500px]"
            />
          </motion.div>
        </motion.div>
      </Wrapper>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={socialIconVariants}
        className="absolute hidden-element top-[40%] xl:right-7 md:right-[-4.5rem] xl:block md:hidden sm:hidden hidden"
      >
        <div className="flex flex-col items-center gap-y-8">
          {socialIcon.map((e, index) => (
            <a
              href={e.link}
              target="_blank"
              key={index}
              className="bg-secondary-text/10 cursor-pointer hover:bg-primary-white/30 ease-linear duration-200 transition-all rounded-lg text-secondary-text flex flex-col justify-center items-center p-3"
            >
              <span>{e.icon}</span>
            </a>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
