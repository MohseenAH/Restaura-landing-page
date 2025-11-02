import React, { memo, Suspense } from "react";
import { DISHES } from "../constants";
import DishCard from "./DishCard";

const Dishes = () => {
  return (
    <section
      id="dishes"
      className="container mx-auto py-16 will-change-transform will-change-opacity"
    >
      {/* Heading */}
      <h2 className="mt-20 mb-20 text-center text-4xl lg:text-6xl tracking-tighter select-none">
        Our Dishes
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        <Suspense
          fallback={
            <div className="text-center text-neutral-500">Loading...</div>
          }
        >
          {DISHES.map((dish, index) => (
            <DishCard key={dish.id || index} project={dish} />
          ))}
        </Suspense>
      </div>
    </section>
  );
};

// Prevent re-render unless DISHES changes
export default memo(Dishes);
