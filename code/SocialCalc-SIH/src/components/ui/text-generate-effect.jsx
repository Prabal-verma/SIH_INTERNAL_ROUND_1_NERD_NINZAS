"use client";
import { useEffect } from "react";
import { motion, useAnimate, stagger } from "framer-motion"; // Import stagger here
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words = "", // Default value to prevent undefined error
  className,
  filter = true,
  duration = 0.5
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(""); // Now it will split an empty string if words is not provided

  useEffect(() => {
    if (scope.current) {
      animate(
        scope.current.querySelectorAll("span"),
        {
          opacity: 1,
          filter: filter ? "blur(0px)" : "none",
        },
        {
          duration: duration,
          delay: stagger(0.2), // Now stagger is defined
        }
      );
    }
  }, [scope, animate, duration, filter]);

  const renderWords = () => {
    return (
      <div ref={scope}>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className="dark:text-white text-black opacity-0"
            style={{
              filter: filter ? "blur(10px)" : "none",
            }}
          >
            {word}{" "}
          </motion.span>
        ))}
      </div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="dark:text-white text-black text-2xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
