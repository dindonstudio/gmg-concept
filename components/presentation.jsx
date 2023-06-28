"use client";
import { useState, useEffect, useRef, useContext } from "react";

export default function Hero({ presentationData }) {

  return (
    <div>
      <div className="flex px-extend-3rem py-24 bg-light-grey text-dark-blue gap">

      <h3 className=" flex-1 ">{presentationData[0].texteLeft}</h3>
      <div className=" flex-1">
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
