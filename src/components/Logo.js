import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="w-16 h-16 bg-dark border border-solid border-transparent dark:border-light text-light flex items-center justify-center rounded-lg text-2xl"
        whileHover={{
          backgroundColor: [
            "#121212",
            "#003087",
            "#6c63ff",
            // "rgba(131,58,180,1)",
            // "rgba(253,29,29,1)",
            // "rgba(252,176,69,1)",
            // "rgba(131,58,180,1)",
            "#121212",
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        USK
      </MotionLink>
    </div>
  );
};

export default Logo;
