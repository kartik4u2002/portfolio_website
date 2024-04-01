import React from "react";
import { motion } from "framer-motion";

function Slide() {
  return (
    <div className="w-screen py-20 bg-white rounded-t-[20px]">
      <div className="relative flex border-t-2 border-b-2 border-zinc-800 whitespace-nowrap leading-none font-semibold overflow-hidden">
        <motion.h2
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", duration: 10, repeat: Infinity }}
          className="text-[15vw] text-zinc-600  mb-8 pr-20"
        >
          PROJECTS
        </motion.h2>
        { <motion.h2
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", duration: 10, repeat: Infinity }}
          className="text-[15vw] text-zinc-700  mb-8 pr-20"
        >
          PROJECTS
        </motion.h2>}
        { <motion.h2
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", duration: 10, repeat: Infinity }}
          className="text-[15vw] text-zinc-500  mb-8 pr-20"
        >
          PROJECTS
        </motion.h2>}
      </div>
    </div>
  );
}

export default Slide;
