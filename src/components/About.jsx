import React, { memo } from "react";
import about from "../assets/about.webp";
import { ABOUT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="container mx-auto mb-8 will-change-transform will-change-opacity"
    >
      {/* Heading */}
      <h2 className="mb-20 text-center text-6xl tracking-tighter lg:text-6xl">
        About Us
      </h2>

      <div className="flex flex-wrap">
        {/* Left Image */}
        <div className="w-full p-4 lg:w-1/2">
          <img
            src={about}
            alt="about"
            loading="lazy"
            decoding="async"
            width="600"
            height="400"
            className="rounded-3xl lg:-rotate-3 select-none"
          />
        </div>

        {/* Right Text */}
        <div className="w-full px-2 lg:w-1/2">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            className="mt-10 text-5xl tracking-tighter lg:text-6xl"
          >
            {ABOUT.header}
          </motion.h2>

          <div className="m-8 mt-1 h-1 w-60 lg:w-80 bg-amber-50"></div>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            className="m-8 text-2xl leading-relaxed tracking-tight lg:max-w-xl"
          >
            {ABOUT.content}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

// memo prevents re-renders if ABOUT doesn’t change
export default memo(About);
