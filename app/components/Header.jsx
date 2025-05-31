import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { motion } from "motion/react";

const Header = () => {
  return (
    <div
      className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col 
        items-center justify-center gap-3 pt-15"
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image src={assets.profile_img} alt="" className="rounded-full w-40" />
      </motion.div>
     <motion.h3
        className="flex items-end gap-2 text-xl md:text-3xl mb-3 font-Ovo pt-5"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Hi! I'm Yasser Mohammed.
      </motion.h3>
 
      <motion.h1
        className="text-3xl sm:text-6xl lg:text-[64px] font-Ovo"
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        Frontend web developer based in Bangalore
      </motion.h1>
      <motion.p
        className="max-w-2xl mx-auto font-Ovo"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        I am a frontend developer from Bangalore, India with 4 years of
        experience in multiple companies like <span className="text-[18px]">Concentrix, 3i-infotech and OK2 Health Apps.</span>
      </motion.p>
      <div className=" flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black hover:bg-gray-950 
           text-white flex items-center gap-2 dark:bg-transparent dark:hover:bg-gray-950"
          initial={{ y:30, opacity: 0 }}
          whileInView={{ y:0 , opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          Contact Me
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </motion.a>

        <motion.a
          href="#/sample-resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 hover:bg-[#fcf4ff] 
            flex items-center gap-2 bg-white dark:text-black dark:hover:bg-[#fcf4ff]"
          initial={{ y:30 , opacity: 0 }}
          whileInView={{ y:0 , opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2}}
        >
          My resume
          <Image src={assets.download_icon} alt="" className="w-4" />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
