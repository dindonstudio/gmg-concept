"use client";
import { useState, useEffect, useRef, useContext } from "react";

export default function Hero({ presentationData }) {

  return (
    <div>
      <div className="md:grid grid grid-cols-12 md:gap-12 md:px-12 md:pt-48 md:pb-40">

      <h2 className="md:col-start-3 md:col-end-11 text-center">{presentationData[0].texteLeft}</h2>
      <div className="md:col-start-1 md:col-end-10">
        <h3>{presentationData[0].textRight}</h3>
        {presentationData[0].code.map((code, index) => (
              <p key={code._key} className="">
         {code.titre}
              </p>
            ))} 
       </div>
      </div>
    </div>
  );
}
