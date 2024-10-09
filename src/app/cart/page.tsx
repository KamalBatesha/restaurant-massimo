import { cartData } from "@/data";
import Image from "next/image";
import React from "react";

export default function Cart() {
  return (
    <main className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500 lg:flex-row w-full">
      {/* PRODUCTS CONTAINER */}
      <div className="h-1/2 p-4 gap-4 flex flex-col overflow-y-scroll lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-10 xl:px-20">
        {cartData.products.map((product)=>{
          return(
            <>
            <div className="flex items-center justify-between  ">
            {/*  SINGLE ITEM  */}
            {product.img&&  
            <div className="w-2/12">

          <Image  src={product.img} alt={product.title} width={100} height={100} />
            </div>
            }
          <div className="lg:w-8/12 w-7/12  md:pl-5 pl-2 ">
            <h1 className="uppercase text-xl font-bold truncate">{product.title}</h1>
            <span>{product.size}</span>
          </div>
          <h2 className="font-bold lg:w-1/12 w-2/12 text-left">${product.priceForOne}({product.quantity})</h2>
          <span className="cursor-pointer w-1/12 text-right">X</span>
        </div>
            </>
          )
        })}
      
        
      </div>
      {/* PAYMENT CONTAINER */}
      <div className="h-1/2 p-4 max-w-full bg-fuchsia-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-10 xl:px-20 2xl:text-xl 2xl:gap-6">
        <div className="flex justify-between">
          <span className="">Subtotal ({cartData.numberOfItems} items)</span>
          <span className="">${cartData.totalCost}</span>
        </div>
        <div className="flex justify-between">
          <span className="">Service Cost</span>
          <span className="">$0.00</span>
        </div>
        <div className="flex justify-between">
          <span className="">Delivery Cost</span>
          <span className="text-green-500">FREE!</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between">
          <span className="">TOTAL(INCL. VAT)</span>
          <span className="font-bold">${cartData.totalCost}</span>
        </div>
        <button className="bg-red-500 text-white p-3 rounded-md w-1/2 self-end">
          CHECKOUT
        </button>
      </div>
    </main>
  );
}
