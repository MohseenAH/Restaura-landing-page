import React from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";
import logo from "../assets/logo.webp";
import heroVideo from "../assets/heroVideo.webm";
import heroPoster from "../assets/heroPoster.webp";

const HeroSection = () => {
  return (
    <LazyMotion features={domAnimation}>
      <m.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative flex w-screen h-fit items-center justify-center lg:h-screen overflow-hidden"
        style={{ willChange: "opacity, transform" }}
      >
        {/* Background Video */}
        <div className="absolute inset-0 -z-20 w-screen">
          <video
            src={heroVideo}
            poster={heroPoster}
            className="h-full w-full object-cover object-center md:object-[center_top] will-change-transform"
            muted
            autoPlay
            loop
            playsInline
            preload="auto"
            disablePictureInPicture
            controlsList="nodownload nofullscreen noremoteplayback"
          />
        </div>

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-black/80 -z-10 pointer-events-none" />

        {/* Foreground Content */}
        <div className="relative z-20 flex w-screen h-screen flex-col justify-end pb-20 transform-gpu">
          <m.img
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            src={logo}
            alt="Restaurant"
            loading="eager"
            decoding="sync"
            className="relative w-full p-4 object-contain"
          />
          <m.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl p-4 tracking-tighter text-white text-center"
          >
            Pune
          </m.h1>
        </div>
      </m.section>
    </LazyMotion>
  );
};

export default HeroSection;
