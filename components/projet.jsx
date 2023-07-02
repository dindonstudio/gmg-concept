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
      className={`flex  md:justify-between single-project  flex-${flexDirection}`}
    >
      <div {...aosPropsFade} className="text-p-font-size flex-1  md:pb-12">
        <div className="sticky top-0 md:px-extend-3rem flex flex-col justify-between h-screen ">
          <div className=" md:pt-8 flex items-end justify-between">
            <h2 className="">{project.titre}</h2>
            <h4 className="relative text-p-font-size italic md:-top-5">{project.sousTitre}</h4>
          </div>

          <h3 className=" md:pb-12">{project.text}</h3>
        </div>
      </div>
      <div {...aosPropsFadeDelay}  className="flex flex-col flex-1">
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
