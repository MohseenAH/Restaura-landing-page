import React, { memo } from "react";
import { CONTACT } from "../constants";

const Contact = () => {
  return (
    <section
      id="contact"
      className="container mx-auto py-16 will-change-opacity will-change-transform"
    >
      {/* Heading */}
      <h2 className="mb-8 text-center text-3xl lg:text-4xl select-none">
        Contact Us
      </h2>

      {/* Contact Details */}
      <div className="text-neutral-400 text-center">
        {CONTACT.map((detail) => (
          <p
            key={detail.key}
            className="mt-20 my-15 border-dotted border-neutral-700 pb-12 text-center text-2xl tracking-tighter lg:text-3xl select-none"
          >
            {detail.value}
          </p>
        ))}
      </div>
    </section>
  );
};

// memo prevents re-rendering unless CONTACT changes
export default memo(Contact);
