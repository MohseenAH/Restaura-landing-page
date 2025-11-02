import React, { useState, memo } from "react";

const DishCard = memo(({ project }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="rounded-2xl overflow-hidden bg-neutral-900/80 shadow-md">
      <div className="relative">
        <img
          src={project.imageLow} // low-quality version
          alt={project.title}
          className={`absolute inset-0 w-full h-48 object-cover blur-md scale-105 transition-opacity duration-700 ${
            loaded ? "opacity-0" : "opacity-100"
          }`}
        />
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          className={`w-full h-48 object-cover transition-opacity duration-700 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white">{project.title}</h3>
        <p className="text-sm text-neutral-400">{project.description}</p>
      </div>
    </div>
  );
});

export default DishCard;
