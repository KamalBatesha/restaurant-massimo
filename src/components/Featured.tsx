import { featuredProducts } from "@/data";
import Image from "next/image";
import React from "react";

export default function Featured() {
  return (
    <div className="w-screen overflow-x-scroll text-red-500">
      {/* wrapper  */}
      <div className="flex w-max">
        {/* single item */}
        {featuredProducts.map((item) => {
          return (
            <div key={item.id} className="flex flex-col justify-around items-center w-screen h-[60vh] p-4 hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] xl:w-[33.3vw] xl:h-[90vh]">
              {/* image container */}
              {item.img && (

                <div className="relative w-full flex-1 hover:rotate-[60deg] transition-all duration-300">
                <Image src={item.img} alt={item.title} fill className=" object-contain"/>
              </div>
              )}
              {/* text container */}
              <div className="flex-1 flex flex-col gap-4 items-center justify-center text-center">
                <h2 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">{item.title}</h2>
                <p className="p-4 2xl:p-8">{item.desc}</p>
                <span className="text-xl font-bold">{item.price}</span>
                <button className="bg-red-500 text-white p-2 rounded-md">
                  add to cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
