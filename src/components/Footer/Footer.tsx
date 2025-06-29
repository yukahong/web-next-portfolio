"use client";

import { motion } from "motion/react";

export const Footer = () => {
  return (
    <footer
      className={`fixed bottom-0 w-full h-36 bg-primary rounded-t-md opacity-85
        sm:h-10
    `}
    >
      <motion.div
        className="h-full w-4/5 m-auto flex gap-3 items-center justify-end text-primary text-base sm:text-sm"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <label className="font-medium">mail:</label>
        <a className="text-body" href="mailto:advice5540@gmail.com">
          advice5540@gmail.com
        </a>
      </motion.div>
    </footer>
  );
};

export default Footer;
