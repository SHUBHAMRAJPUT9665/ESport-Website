"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./components/ui/images-slider";
import CountDown from "../public/CountDown";
export function ImageSlider() {
  const images = [
    "https://sm.ign.com/ign_in/screenshot/default/valorant-2_mdt7.jpg",
    "https://media.assettype.com/afkgaming/2022-12/abc8bab1-a685-46fd-869e-871bf8ed2088/12062022_eoy_2022_16x9_banner.jpg?w=1200&h=675&auto=format%2Ccompress&fit=max",
    "https://www.financialexpress.com/wp-content/uploads/2022/08/BGMI.jpg",
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
         Coming Soon...
        </motion.p>
        <motion.p className="font-bold text-xl md:text-3xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          <CountDown /> day's to Go
        </motion.p>
        <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Join now →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
}
