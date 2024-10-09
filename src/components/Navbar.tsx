import Image from "next/image";
import Menu from "./Menu";
import Link from "next/link";
import React from "react";
import CartIcon from "./CartIcon";

export default function Navbar() {
  // temperary
  const user=false
  return (
    <div className="h-12 md:h-24 flex items-center justify-between text-red-500 p-4 border-b-2 border-b-red-500  lg:px-[75px] xl:px-40">
      {/* left links */}
      <div className="hidden md:flex md:gap-4 md:items-center flex-1">
        <Link className=" capitalize" href="/">home page</Link>
        <Link className=" capitalize" href="/menu">menu</Link>
        <Link className=" capitalize" href="/">contact</Link>
      </div>
      {/* logo */}
      <div className="text-xl md:font-bold flex-1 md:text-center">
        <Link href="/">Massimo</Link>
      </div>
      {/* mobile menu */}
      <div className="md:hidden">
        <Menu />
      </div>
      {/* right links */}
      <div className="hidden md:flex md:gap-4 md:items-center flex-1 justify-end">
        <div className="flex items-center cursor-pointer gap-2 bg-orange-300 px-1 rounded-md md:absolute top-3 right-3 lg:static ">
          <Image src="/phone.png" alt="phone icon" width={20} height={20}/>
          <span>123 456 789</span>
        </div>
        {user?
        <Link className=" capitalize" href="/orders">orders</Link>
        :
        <Link className=" capitalize" href="/login">login</Link>
        }
        <CartIcon/>
      </div>
    </div>
  );
}
