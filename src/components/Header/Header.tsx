"use client";

import { links } from "@/lib/data";
import { motion } from "motion/react";

export const Header = () => {
  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full bg-white bg-opacity-80 rounded-none 
         md:w-[36rem] sm:w-full sm:top-6 sm:h-[3rem] sm:rounded-full"
        initial={{ x: "-50%", y: -100, opacity: 0 }}
        animate={{ x: "-50%", y: 0, opacity: 1 }}
      >
        <nav className="w-full h-full p-2">
          <ul className="flex w-full h-full justify-evenly items-center text-gray-500">
            {links.map((link) => {
              return (
                <li className="hover:text-gray-900" key={link.hash}>
                  <a href={link.hash}>{link.name}</a>
                </li>
              );
            })}
          </ul>
        </nav>
      </motion.div>
    </header>
  );
};

export default Header;
