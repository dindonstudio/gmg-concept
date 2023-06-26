import React from "react";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
export default function Projet({ project, index }) {
  const flexDirection = index % 2 === 0 ? "row" : "row-reverse";

  return (
    <div
      className={`flex  md:justify-between  md:flex-${flexDirection}`}
    >
      <div className="md:px-12 text-p-font-size flex-1">
        <div className="sticky top-48">
        <h2 className="">{project.titre}</h2>
        <h4>{project.sousTitre}</h4>
        <h3 className="text-p-font-size md:pt-8">{project.text}</h3>
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
              height={1200}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
