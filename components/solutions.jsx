"use client";
import { useContext, useEffect } from "react";
import { useAOS, getAosProps, getAosPropsWidth,  getAosPropsFadeShortOffset, getAosPropsFadeShortOffsetDelay, getAosPropsFadeShortDelay2 } from "./utils/aosUtils";
export default function Solutions({ presentationData }) {
  const shouldUseAOS = useAOS();
  const aosProps = getAosPropsFadeShortOffset(shouldUseAOS);
  const aosPropsFadeDelay1 = getAosPropsFadeShortOffsetDelay(shouldUseAOS);
  const aosPropsWidth = getAosPropsWidth(shouldUseAOS)
  useEffect(() => {
    if (shouldUseAOS) {
      const AOS = require("aos");
      AOS.init();
    }
  }, [shouldUseAOS]);
  return (
    <div className="solutions">
      <div className="md:px-extend-3rem px-6" >
        <div {...aosPropsWidth} className="line-solutions"></div>
        <div className="flex md:flex-row flex-col  md:gap-48 gap-12 md:pb-60 md:pt-24 pt-12 pb-32  bg-light-grey text-dark-blue gap justify-center">
          <h3 {...aosProps} className="flex-1">{presentationData[0].textRight}</h3>
          <ul className="flex flex-col flex-1 md:text-p-font-size md:gap-8 md:pl-0 pl-6 gap-4">
            {presentationData[0].code.map((code, index) => (
              <li
                {...aosPropsFadeDelay1}
                key={index}
                className="list-disc"
                style={{ transitionDelay: `${(index + 1) * 0.2}s` }} // Add this line
                >
                {code.titre}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
  
}
