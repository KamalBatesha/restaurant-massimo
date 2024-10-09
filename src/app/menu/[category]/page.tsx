import { pizzas } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Category() {
  return (
    <main className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-red-500 border border-fuchsia-50 border-t-0 w-full   ">
      {pizzas.map((item)=>{
        return (
          <Link href={`/product/${item.id}`} key={item.id} className="group-even:bg-red-50 h-[60vh] border border-red-500 flex flex-col justify-between items-center p-4 group even:bg-red-50 ">
            {/* image container */}
            <div className="w-full h-4/5  relative">
            {item.img && <Image src={item.img} alt={item.title} fill className="object-contain p-5"/>}
            </div>
            {/* text container */}
            <div className="flex  justify-between items-center w-full font-bold">
              <h2 className="text-2xl p-2 uppercase truncate	">{item.title}</h2>
              <p className="group-hover:hidden text-xl">${item.price}</p>
              <button className="bg-red-500 text-white p-2 rounded-md uppercase hidden text-nowrap   group-hover:block">add to cart</button>

            </div>

          </Link>
        )
      })}
    </main>
  );
}
