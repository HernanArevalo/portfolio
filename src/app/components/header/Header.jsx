import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import FlipLink from "./components/FlipLinks";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("#FCFCFC");
  const [blurLevel, setBlurLevel] = useState(0);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const textVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.1, ease: "easeOut" } },
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (!ticking.current) {
      window.requestAnimationFrame(() => {
        if (currentScrollY > lastScrollY.current && currentScrollY > window.innerHeight) {
          setIsScrollingUp(false);
        } else if (currentScrollY < lastScrollY.current) {
          setIsScrollingUp(true);
        }
        lastScrollY.current = currentScrollY;
        ticking.current = false;
      });

      ticking.current = true;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#11111180");
        setTextColor("#FCFCFC");
        setBlurLevel(5);
      } else {
        setColor("transparent");
        setTextColor("#FCFCFC");
        setBlurLevel(0);
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  // Prevent scrolling when the menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto"; // Cleanup on unmount
    };
  }, [isOpen]);

  const menuVariants = {
    open: {
      opacity: 1,
      y: 0,
      display: "block",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    closed: {
      opacity: 0,
      y: -100,
      transition: { duration: 0.3, ease: "easeInOut" },
      transitionEnd: { display: "none" },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.1, ease: "easeOut" },
    },
  };

  return (
    <>
      <motion.div
        className={`flex flex-col justify-center items-center ease-linear w-full h-[80px] md:h-[80px] transition-all duration-300 fixed top-0 z-50 ${isOpen ? 'bg-primary-gray ' : ""}`}
        animate={{ y: isScrollingUp ? 0 : -100 }}
        initial={{ y: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut", }}
        style={{
          backgroundColor: isOpen ? "#151515" : color,
          backdropFilter: isOpen ? "none" : `blur(${blurLevel}px)`,
        }}
      >
        <div className="flex justify-between md:max-w-screen-lg xl:max-w-screen-xl items-center w-full mx-auto px-3">
          <div className="flex-shrink-0">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
              <FlipLink href="/" textSize="text-2xl" textFontSize="font-[700]" textTransform="normal-case">
                Hernán Arévalo
              </FlipLink>
            </motion.div>
          </div>

          <div className="hidden lg:block">
            <nav className={`space-x-6 flex justify-between gap-x-5 ${isOpen ? "text-black" : "text-white"}`}>
              {["Home", "Portfolio", "About", "Testimonial", "Contact"].map((text, index) => (
                <motion.div
                  key={text}
                  initial="hidden"
                  animate="visible"
                  variants={linkVariants}
                  transition={{ delay: 0.2 * index }}
                >
                  <FlipLink href={`#${text.toLowerCase()}`}>{text}</FlipLink>
                </motion.div>
              ))}
            </nav>
          </div>

          <motion.div  initial="hidden"
              animate="visible"
              variants={textVariants} className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="focus:outline-none h-[20px] flex flex-col justify-center items-center gap-y-2"
            >
              <div
               
                className={`w-10 h-[1px] rounded-full mt-[1px] transition-all duration-300 ${isOpen ? "bg-primary-white rotate-45 translate-y-[0.4rem]" : "bg-white"}`}
              />
              <div
               
                className={`w-10 h-[1px] rounded-full transition-all duration-300 ${isOpen ? "bg-primary-white translate-x-full opacity-0" : "bg-white"}`}
              />
              <div
               
                className={`w-10 h-[1px] rounded-full mt-[1px] transition-all duration-300 ${isOpen ? "bg-primary-white -rotate-45 -translate-y-[0.75rem]" : "bg-white"}`}
              />
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Mobile menu */}
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        className="lg:hidden fixed top-20 left-0 w-full h-full bg-primary-gray z-30 flex items-center justify-center"
      >
        <nav className="space-y-8 text-left text-black px-3 pt-6">
          {["Home", "Portfolio", "About", "Resume", "Testimonial", "Contact"].map((text, index) => (
            <motion.div
              key={text}
              initial="hidden"
              animate="visible"
              variants={linkVariants}
              transition={{ delay: 0.2 * index }}
              onClick={() => setIsOpen(false)}
            >
              <FlipLink textSize="text-2xl" textFontSize="font-[700]" href={`#${text.toLowerCase()}`} >
                {text}
              </FlipLink>
            </motion.div>
          ))}
        </nav>
      </motion.div>
    </>
  );
};

export default Navbar;
