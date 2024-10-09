"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import CartIcon from "./CartIcon";

const links = [
  { id: 1, title: "home page", url: "/" },
  { id: 2, title: "menu", url: "/menu" },
  { id: 3, title: "working hours", url: "/" },
  { id: 4, title: "contact", url: "/" },
];

export default function Menu() {
  const [open, setOpen] = useState(false);

  //   temperory
  const user = false;
  return (
    <div>
      {!open ? (
        <Image src="/open.png" alt="open icon" width={20} height={20} onClick={() => {setOpen(true);}} className="cursor-pointer"/>
      ) : (
        <Image src="/close.png" alt="close icon" width={20} height={20} onClick={() => {setOpen(false);}} className="cursor-pointer"/>
      )}
      {open && (
        <div className=" absolute left-0 top-24 w-full h-[calc(100vh-6rem)] bg-red-500 text-white flex flex-col justify-center items-center gap-8 z-20 text-3xl text-center">
          {links.map((item) => {
            return (
              <Link href={item.url} key={item.id} onClick={()=>{setOpen(false)}}>
                {item.title}
              </Link>
            );
          })}
          {user ? (
            <Link href="/orders" onClick={()=>{setOpen(false)}}>orders</Link>
          ) : (
            <Link href="/login" onClick={()=>{setOpen(false)}}>login</Link>
          )}
          <Link href="/cart" onClick={()=>{setOpen(false)}}>
            <CartIcon />
          </Link>
        </div>
      )}
    </div>
  );
}
