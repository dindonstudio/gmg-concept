"use client";
import { useEffect } from "react";
import { useAOS, getAosPropsFadeShort, getAosPropsFadeShortDelay1, getAosPropsFadeShortDelay2 } from "./utils/aosUtils";
import ContactForm from "./contactForm";
export default function Footer({ footerData }) {
  const shouldUseAOS = useAOS();
  const aosProps = getAosPropsFadeShort(shouldUseAOS);
  const aosPropsFadeDelay1 = getAosPropsFadeShortDelay1(shouldUseAOS);
  const aosPropsFadeDelay2 = getAosPropsFadeShortDelay2(shouldUseAOS);
  // const aosPropsFadeDelay = getAosPropsFadeDelay(shouldUseAOS);

  useEffect(() => {
    if (shouldUseAOS) {
      const AOS = require("aos");
      AOS.init();
    }
  }, [shouldUseAOS]);
  return (
    <>
      <footer
        id="contact"
        className=" relative px-extend-3rem pb-60 bg-light-blue text-dark-blue"
      >
        <h2  {...aosProps} className="pt-12 pb-40 text-center">Contactez-nous</h2>
        <div className="flex">
          <div  {...aosPropsFadeDelay1} className="flex w-full gap-16 flex-1 flex-col">
            <h3>{footerData[0].footerText}</h3>
            <div className="footer__info">
              {footerData[0].texts.map((texts, index) => (
                <p key={index} className="text-p-font-size">
                  {texts.text}
                </p>
              ))}
            </div>
          </div>
          <div {...aosPropsFadeDelay2}  className="flex-1 ">
          <ContactForm />
          </div>
    
        </div>
        <p className="absolute bottom-3 text-p-font-size copyright ">© 2023 GMG-Concept</p>
      </footer>
    </>
  );
}
