"use client";
import { useState, useEffect, useRef, useContext } from "react";

export default function Hero({ heroData }) {

  return (
    <div>
      <div className="h-screen relative flex items-end bg-light-blue ">

      <h1 className="p-12 text-dark-blue opacity-0 relative fade-in-up">{heroData[0].herotext}</h1>
      </div>
    </div>
  );
}
