import { menu } from "@/data";
import Link from "next/link";
import React from "react";

export default function MenuPage() {
  return (
    <div className="p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] w-screen overflow-x-hidden flex flex-col md:flex-row items-center">
      {menu.map((category) => (
        <Link
          href={`/menu/${category.slug}`}
          key={category.id}
          className="w-full h-1/3 md:w-1/3  bg-cover p-8 md:min-h-[50%]"
          style={{ backgroundImage: `url(${category.img})` }}
        >
          <div className={`text-${category.color} w-1/2 flex flex-col justify-between gap-8`}>
            <h1 className="uppercase font-bold text-2xl sm:text-3xl ">{category.title}</h1>
            <p className="text-sm ">{category.desc}</p>
            <button
              className={`hidden 2xl:block ${
                category.color === "white" ? "bg-white" : `bg-${category.color}`
              } text-${
                category.color === "black" ? "white" : "red-500"
              } py-2 px-4 rounded-md w-fit`}
            >
              Explore
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
}
