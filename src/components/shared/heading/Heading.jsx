import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Heading = ({ tag: Tag = 'h1', text, styleType = 'default', animationType = 'default', maxWidth = '700px' }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const textVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    };

    const variants = animationType === 'default' ? textVariants : {};

    const classNames = {
        h1: 'text-primary-green text-center text-lg xl:text-xl font-medium w-full',
        h2: 'text-primary-white text-center text-[32px] md:text-6xl lg:text-7xl font-semibold py-3',
        default: 'text-primary-white',
    };

    return (
        <motion.div
            ref={ref}
            className={classNames[styleType] || classNames.default}
            style={{ maxWidth }}
            variants={variants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
        >
            <Tag>{text}</Tag>
        </motion.div>
    );
};

export default Heading;
