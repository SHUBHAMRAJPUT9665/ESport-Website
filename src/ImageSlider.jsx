"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./components/ui/images-slider";
export function ImageSlider() {
  const images = [
    "https://media.assettype.com/afkgaming/2022-12/abc8bab1-a685-46fd-869e-871bf8ed2088/12062022_eoy_2022_16x9_banner.jpg?w=1200&h=675&auto=format%2Ccompress&fit=max",
    "https://www.pngitem.com/pimgs/m/61-617553_photo-pubg-character-male-pubg-mobile-tournament-poster.png",
    'https://e1.pxfuel.com/desktop-wallpaper/461/142/desktop-wallpaper-pubg-team-pubg-tournament.jpg'
  ];
  return (
    <ImagesSlider className="h-[40rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
         Registration Started 
        </motion.p>
        <motion.p className="font-bold text-xl md:text-3xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
        </motion.p>
        <button className="px-4 py- backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span> <a target='blank'  href="https://forms.gle/o2Eq79VLqtVJUxFQA">Register</a></span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
}
