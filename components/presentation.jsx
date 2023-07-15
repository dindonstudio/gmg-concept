"use client";
import { useContext, useEffect } from "react";
import { useAOS, getAosProps } from "./utils/aosUtils";
export default function Hero({ presentationData }) {
  const shouldUseAOS = useAOS();
  const aosProps = getAosProps(shouldUseAOS);
  useEffect(() => {
    if (shouldUseAOS) {
      const AOS = require("aos");
      AOS.init();
    }
  }, [shouldUseAOS]);
  return (
    <div>
      <div className="w-full md:h-60 h-16 bg-light-blue"></div>
      <div className="flex md:px-extend-3rem md:pt-40 md:pb-16 px-6 pt-16 pb-12  bg-light-grey text-dark-blue gap justify-center">

      <h3   {...aosProps} className=" relative flex-1  ">{presentationData[0].texteLeft}</h3>
      {/* <div className=" flex-1">
        <h3>{presentationData[0].textRight}</h3>
        {presentationData[0].code.map((code, index) => (
              <p key={index} className="">
         {code.titre}
              </p>
            ))} 
       </div> */}
      </div>
    </div>
  );
}
