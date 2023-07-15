"use client";
import { useEffect } from "react";
import {
  useAOS,
  getAosPropsFadeShort,
  getAosPropsFadeShortDelay1,
  getAosPropsFadeShortDelay2,
} from "./utils/aosUtils";
import ContactForm from "./contactForm";
import Link from "next/link";
export default function Footer({ footerData, pageData }) {
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
        className=" relative md:px-extend-3rem px-6  pb-60  bg-light-blue text-dark-blue"
      >
        <h2 {...aosProps} className="pt-12 md:pb-40 pb-16 text-center">
          Contactez-nous
        </h2>
        <div className="flex md:gap-48 gap-20 md:flex-row flex-col">
          <div
            {...aosPropsFadeDelay1}
            className="flex w-full gap-16 flex-1 flex-col"
          >
            <div>
              <h3>{footerData[0].footerText}</h3>
              <h3 className="md:pt-4">{footerData[0].footerTextsecond}</h3>
            </div>

            <div className="footer__info md:pt-10 border-t border-dark-blue pt-12">
              {footerData[0].texts.map((texts, index) => (
                <p key={index} className="text-p-bigger-font-size">
                  {texts.text}
                </p>
              ))}
            </div>
          </div>
          <div {...aosPropsFadeDelay2} className="flex-1 md:pt-0 pt-0 ">
            <h3 className="md:hidden block text-center pb-6">Formulaire de contact</h3>
            <ContactForm />
          </div>
        </div>
        <div className="flex md:flex-row  flex-col-reverse justify-center left-0 w-full absolute bottom-3 md:justify-between px-extend-3rem md:gap-0 gap-2 ">
        <p className=" text-p-font-size md:text-left text-center">© 2023 GMG-Concept</p>
        <div className="flex md:flex-row md:gap-8 flex-col gap-2">
          {pageData.map((page, index) => (
            <Link
            key={index}
              className=" text-p-font-size hover-underline-animation md:text-left text-center"
              href={page.slug.current}
            >
              {page.titre}
            </Link>
          ))}
        </div>
        </div>
       
      </footer>
    </>
  );
}
