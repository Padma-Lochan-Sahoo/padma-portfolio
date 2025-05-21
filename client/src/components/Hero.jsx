import { motion } from "framer-motion";
import { HERO_CONTENT } from "../constants";
import padma from "../assets/padma.webp";
import { clipPath } from "framer-motion/client";

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const contaionerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const imageVariants = {
  hidden: { clipPath: "inset(0 50% 0 50%)" },
  visible: {
    clipPath: "inset(0 0% 0 0%)",
    transition: { duration: 1.2,
       ease: "easeInOut" },
  },
};

const Hero = () => {
  return (
    <section >
      <div className="relative z-100 min-h-screen flex flex-col md:flex-row items-start justify-start max-w-7xl mx-auto px-8 py-4">
        <motion.div
          className="w-full md:w-1/2 p-8"
          initial="hidden"
          animate="visible"
          variants={contaionerVariants}
        >
          <motion.h1
            className="text-2xl md:text-3xl lg:text-5xl my-14"
            variants={textVariants}
          >
            {HERO_CONTENT.greeting}
            <motion.span
              className="ml-2 inline-block"
              animate={{ rotate: [0, 20, -20, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
            >
              👋
            </motion.span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl lg:text-4xl mb-4"
            variants={textVariants}
          >
            {HERO_CONTENT.introduction}
          </motion.p>
          <motion.p
            className="text-xl md:text-2xl lg:text-4xl"
            variants={textVariants}
          >
            {HERO_CONTENT.description}
          </motion.p>
        
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-stone-50 text-stone-900 p-3 lg:p-4 mt-8 inline-block rounded-2xl"
          href={HERO_CONTENT.resumeLink}
          download
          target="_blank"
          rel="noopener noreferrer"
          variants={textVariants}
        >
          {HERO_CONTENT.resumeLinkText}
        </motion.a>
    </motion.div>
        <motion.div
          className="w-full md:w-1/2 p-6 md:p-12 flex justify-center items-center"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <motion.img
            src={padma}
            alt="padma lochan"
            className="w-full h-auto max-w-[400px] md:max-w-[500px] lg:max-w-[650px] rounded-3xl object-cover shadow-xl"
            whileHover={{ scale: 1.02, rotate: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
