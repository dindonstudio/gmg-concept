import React from "react";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import { useContext, useEffect } from "react";
import { useAOS, getAosPropsFade, getAosPropsFadeDelay } from "./utils/aosUtils";
export default function Projet({ project, index }) {
  const flexDirection = index % 2 === 0 ? "row" : "row-reverse";
  const shouldUseAOS = useAOS();
  const aosPropsFade = getAosPropsFade(shouldUseAOS);
  const aosPropsFadeDelay = getAosPropsFadeDelay(shouldUseAOS);
  useEffect(() => {
    if (shouldUseAOS) {
      const AOS = require("aos");
      AOS.init();
    }
  }, [shouldUseAOS]);
  return (
    <div id={project.slug.current}
      className={`flex md:pb-0 pb-12 md:justify-between single-project flex-col md:flex-${flexDirection}`}
    >
      <div {...aosPropsFade} className="text-p-font-size flex-1  md:pb-12">
        <div className="sticky top-0 md:px-extend-3rem px-6 flex flex-col justify-between md:h-screen h-auto pt-8 md:pt-0 pb-12 md:pb-0  ">
          <div className=" md:pt-8 flex md:items-end justify-start md:justify-between md:flex-row flex-col md:pb-0 pb-12">
            <h2 className="">{project.titre}</h2>
            <h4 className="relative text-p-font-size italic md:-top-5 -top-2">{project.sousTitre}</h4>
          </div>

          <h3 className=" md:pb-12 text-justify">{project.text}</h3>
        </div>
      </div>
      <div {...aosPropsFadeDelay}  className="flex flex-col flex-1 md:gap-0 md:px-0 gap-8 px-6">
        {project.images.map((image, imageIndex) => (
          <div key={image._key} className="image__container">
            <Image
              
              className="w-full h-full object-contain   "
              priority
              src={urlForImage(image.image.asset._ref)}
              alt="Details instruments"
              width={1560}
              height={1800}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
