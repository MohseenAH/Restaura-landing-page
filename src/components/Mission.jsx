import React from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";
import missionVideo from "../assets/mission.webm";
import missionPoster from "../assets/mission.webp"; // <-- use a static image for poster
import { MISSION } from "../constants";

const Mission = () => {
  return (
    <LazyMotion features={domAnimation}>
      <section id="mission" className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="mb-8 text-4xl tracking-tighter lg:text-6xl text-white">
            Our Mission
          </h2>

          <div className="relative flex items-center justify-center">
            {/* Background Video */}
            <video
              className="w-full rounded-3xl object-cover will-change-transform"
              src={missionVideo}
              poster={missionPoster}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              loading="lazy"
            />

            {/* Overlay */}
            <m.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 rounded-3xl bg-black/40"
            />

            {/* Mission Text */}
            <m.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute max-w-lg text-white tracking-tighter text-lg lg:text-3xl"
            >
              {MISSION}
            </m.p>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
};

export default Mission;
