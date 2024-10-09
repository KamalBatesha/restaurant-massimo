import Image from "next/image";
import React from "react";
import CountDown from "./CountDown";

export default function Offer() {
  return (
    <div className="flex flex-col md:flex-row bg-black h-screen md:bg-[url(/offerBg.png)] bg-cover md:h-[70vh]">
      {/* text container */}
      <div className="flex-1 flex flex-col justify-center items-center gap-8 p-6">
        <h1 className="text-5xl xl:text-6xl font-bold text-center text-white">
          Delicious Burger & French Fry
        </h1>
        <p className=" text-white text-center xl:text-xl">
          Progressively simplify effective e-toilers and process-centric methods
          of empowerment. Quickly pontificate parallel.
        </p>
        <CountDown/>
        <button className="py-3 px-6 bg-red-500 text-white rounded-md">
          order now
        </button>
      </div>
      {/* image container */}
      <div className="flex-1 relative md:h-full">
        <Image
          src="/offerProduct.png"
          alt="burger image"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}
