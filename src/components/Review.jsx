import React, { memo } from "react";
import { REVIEW } from "../constants";
import xaviour from "../assets/xaviour.webp";
import customer1 from "../assets/customer1.webp";
import customer2 from "../assets/customer2.webp";
import customer3 from "../assets/customer3.webp";
import customer4 from "../assets/customer4.webp";
import { motion } from "framer-motion";

// ✅ Faster, smoother staggering
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      ease: "easeOut",
    },
  },
};

// ✅ GPU-friendly transition
const ItemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Review = () => {
  return (
    <section
      id="review"
      className="container mx-auto my-16 will-change-transform will-change-opacity"
    >
      {/* Review Text */}
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={containerVariants}
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col items-center"
      >
        <motion.p
          variants={ItemVariants}
          className="mb-10 text-center text-3xl font-light leading-normal tracking-tighter lg:mx-40 lg:text-[3.5rem] select-none"
        >
          {REVIEW.content}
        </motion.p>

        {/* Reviewer Info */}
        <motion.div
          variants={ItemVariants}
          className="flex items-center justify-center gap-6"
        >
          <img
            src={xaviour}
            alt={REVIEW.name}
            width={80}
            height={80}
            loading="lazy"
            decoding="async"
            className="rounded-full border object-cover will-change-transform"
          />
          <div className="tracking-tighter text-center select-none">
            <h6>{REVIEW.name}</h6>
            <p className="text-sm text-neutral-500">{REVIEW.profession}</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Customer Gallery */}
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={containerVariants}
        viewport={{ once: true, amount: 0.3 }}
        className="mt-14 flex flex-col items-center justify-center gap-4 md:flex-row"
      >
        {[customer1, customer2, customer3, customer4].map((customer, index) => (
          <motion.img
            key={index}
            variants={ItemVariants}
            src={customer}
            alt={`customer-${index + 1}`}
            loading="lazy"
            decoding="async"
            className="h-[300px] w-[200px] rounded-br-3xl rounded-tl-3xl object-cover will-change-transform"
          />
        ))}
      </motion.div>
    </section>
  );
};

// ✅ Prevents re-renders unless REVIEW changes
export default memo(Review);
