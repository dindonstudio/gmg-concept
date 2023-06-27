import React from "react";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
export default function Projet({ project, index }) {
  const flexDirection = index % 2 === 0 ? "row" : "row-reverse";

  return (
    <div
      className={`flex  md:justify-between single-project  flex-${flexDirection}`}
    >
      <div className="text-p-font-size flex-1 md:pt-24 md:pb-12">
        <div className="sticky top-24 md:px-24 ">
        <h2 className="">{project.titre}</h2>
        <h4 className="relative md:-top-6">{project.sousTitre}</h4>
        <h3 className=" md:pt-8">{project.text}</h3>
        </div>
      
      </div>
      <div className="flex flex-col flex-1">
        {project.images.map((image, imageIndex) => (
          <div className="image__container ">
            <Image
              key={image._key}
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
