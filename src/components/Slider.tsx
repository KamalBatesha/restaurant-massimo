"use client";
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const data = [
  {
    id: 1,
    title: "always fresh & always crispy & always hot",
    image: "/slide1.png",
  },
  {
    id: 2,
    title: "we deliver your order wherever you are in NY",
    image: "/slide2.png",
  },
  {
    id: 3,
    title: "the best pizza to share with your family",
    image: "/slide3.jpg",
  },
];

export default function Slider() {
  const [currentSlide,setCurrentSlide]=useState(0)
  useEffect(()=>{
    const interval = setInterval(()=>{
      setCurrentSlide(currentSlide=>currentSlide==data.length-1?0:currentSlide+1)
    },2000)

    return  ()=>clearInterval(interval)


  },[])
  return (
    <div className='flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row '>
      {/* text container  */}
      <div className='flex-1 w-full lg:w-auto flex flex-col gap-8 text-red-500 font-bold justify-center items-center bg-fuchsia-50'>
        <h1 className='text-5xl md:text-6xl xl:text-7xl p-4 md:p-10 text-center uppercase'>{data[currentSlide].title}</h1>
        <button className='bg-red-500 text-white px-8 py-4'>order now</button>
      </div>
      {/* image container  */}
      <div className='w-full lg:w-auto relative flex-1'>
        <Image src={data[currentSlide].image} alt='a woman catching two slices of pizaa' fill className='object-cover object-center' />
      </div>

    </div>
  )
}
