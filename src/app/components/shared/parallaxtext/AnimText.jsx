"use client"
import StarIcon from "./StarIcon"
import { useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity
} from "framer-motion";
import { wrap } from "@motionone/utils";

function ParallaxText({ children, baseVelocity = 50 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 200
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);

  useEffect(() => {
    let animationFrameId;

    const updateX = (timestamp) => {
      const delta = timestamp - lastTimestamp.current;
      lastTimestamp.current = timestamp;

      let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

      if (velocityFactor.get() < 0) {
        directionFactor.current = -1;
      } else if (velocityFactor.get() > 0) {
        directionFactor.current = 1;
      }

      moveBy += directionFactor.current * moveBy * velocityFactor.get();

      baseX.set(baseX.get() + moveBy);

      animationFrameId = requestAnimationFrame(updateX);
    };

    const lastTimestamp = { current: performance.now() };

    if (typeof window !== 'undefined') {
      animationFrameId = requestAnimationFrame(updateX);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [baseVelocity, velocityFactor, baseX]);

  return (
    <div className="parallax">
      <motion.div className="scroller text-primary-white/5 " style={{ x }}>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </div>
  );
}

const AnimText = ({ text }) => {
  return (
    <section className="relative w-screen overflow-hidden ">
      <ParallaxText baseVelocity={-1}>
        {text}
        <span>
          <StarIcon />
        </span>
        {text}
        <span>
          <StarIcon />
        </span>
      </ParallaxText>
    </section>
  );
};




export default AnimText;
