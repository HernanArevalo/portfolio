import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, href, textSize = "text-[18px]", textTransform = "uppercase", textFontSize = "font-[600]", textColor = "text-white" }) => {
  return (
    <Link href={href} passHref>
      <motion.div
        initial="initial"
        whileHover="hovered"
        className={`relative block overflow-hidden whitespace-nowrap hover:text-primary-green ${textSize} ${textFontSize} ${textTransform} ${textColor}`}
        style={{
          lineHeight: "1.5em",
        }}
      >
        <div>
          {children.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: {
                  y: 0,
                },
                hovered: {
                  y: "-100%",
                },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </div>
        <div className="absolute inset-0">
          {children.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: {
                  y: "100%",
                },
                hovered: {
                  y: 0,
                },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </Link>
  );
};

export default FlipLink;
