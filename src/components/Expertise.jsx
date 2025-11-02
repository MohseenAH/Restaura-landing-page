import React, { memo } from "react";
import { CUSINES } from "../constants";
import { motion } from "framer-motion";

// ✅ Optimized animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // smoother stagger
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const Expertise = () => {
  return (
    <section id="expertise" className="container mx-auto mb-20 px-4">
      {/* Heading */}
      <h2 className="my-8 text-center text-3xl tracking-tighter lg:text-4xl select-none">
        Our Expertise
      </h2>

      {/* Animated List */}
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={containerVariants}
        viewport={{ once: true, amount: 0.15 }}
      >
        {CUSINES.map((cusine, index) => (
          <motion.div
            key={cusine.id || index}
            variants={itemVariants}
            className="flex flex-col md:flex-row items-center border-b-4 border-dotted border-neutral-700/40 py-6"
          >
            {/* Left Number */}
            <div className="shrink-0 pr-8 text-2xl select-none text-neutral-400">
              {cusine.number}
            </div>

            {/* Image */}
            <div className="w-full md:w-1/3 shrink-0">
              <img
                src={cusine.image}
                alt={cusine.title}
                loading="lazy"
                decoding="async"
                className="h-auto w-full rounded-3xl object-cover"
              />
            </div>

            {/* Text Section */}
            <div className="md:pl-8 mt-4 md:mt-0 text-center md:text-left">
              <h3 className="text-2xl uppercase tracking-tighter text-rose-300">
                {cusine.title}
              </h3>
              <p className="mt-4 text-lg tracking-tight text-neutral-300 leading-relaxed">
                {cusine.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default memo(Expertise);
