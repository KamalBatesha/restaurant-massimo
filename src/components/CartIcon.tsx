import { cartData } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CartIcon () {
  return (
    <Link href="/cart" className="flex items-center gap-4">
      <div className=" relative w-8 h-8 md:h-5 md:w-5">
        <Image src="/cart.png" alt="cart icon" fill sizes="(max-width: 32px)" />
      </div>
      <span>cart ({cartData.numberOfItems})</span>
    </Link>
  );
}
