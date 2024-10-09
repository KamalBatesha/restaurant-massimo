import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="h-12  flex items-center justify-between text-red-500 p-4 lg:p-10 xl:p-20  border-t border-red-500  ">
      <Link  href="/" className="uppercase font-bold text-xl">Massimo</Link>
      <p className="uppercase">© all rights reserved</p>


    </div>
  );
}
