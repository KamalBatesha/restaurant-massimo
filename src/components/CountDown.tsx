"use client";
import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";

const endTime = new Date("2025-12-28");

export default function CountDown() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      {isMounted && (
        <Countdown
          className="text-yellow-500 text-5xl font-bold"
          date={endTime}
        />
      )}
    </>
  );
}
