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
      <div className="flex px-extend-3rem py-60 bg-light-grey text-dark-blue gap justify-center">

      <h3   {...aosProps} className=" relative flex-1 big-intro ">{presentationData[0].texteLeft}</h3>
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
