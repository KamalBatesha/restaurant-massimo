import Price from "@/components/Price";
import { pizzas } from "@/data";
import Image from "next/image";
import React from "react";
export default function SingleProduct({
  params: { id },
}: {
  params: { id: number };
}) {
  return (
    <main>
      {pizzas.map((singleProduct) => {
        if (singleProduct.id == id) {
          return (
            <div
              key={singleProduct.id}
              className="flex flex-col gap-4 justify-around items-center text-red-500 p-8 lg:px-20 xl:px-40 md:flex-row h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)]"
            >
              {/* image container */}
              <div className=" relative w-full h-full flex-1">
                {singleProduct.img && (
                  <Image
                    src={singleProduct.img}
                    alt={singleProduct.title}
                    fill
                    className="object-contain"
                  />
                )}
              </div>
              {/* text container */}
              <div className="w-full flex-1 flex flex-col gap-4">
                <h2 className="text-3xl font-bold uppercase xl:text-5xl">
                  {singleProduct.title}
                </h2>
                {singleProduct.desc && <p className="">{singleProduct.desc}</p>}
                <Price
                  price={singleProduct.price}
                  options={singleProduct.options}
                />
              </div>
            </div>
          );
        }
      })}
    </main>
  );
}
