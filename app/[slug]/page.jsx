"use client";
import "../globals.css";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { client } from "../../sanity/lib/client";
import { groq } from "next-sanity";

const renderText = (block) => {
  return block.children.map((child) => {
    if (child.marks && child.marks.includes("41335c562c9a")) {
      return (
        <a key={child._key} href="https://bc-mopane.vercel.app/">
          {child.text}
        </a>
      );
    }
    return <span key={child._key}>{child.text}</span>;
  });
};

export default async function Page() {
  
  const pathname = usePathname();
  const url = pathname.split("/").pop();

  const query = groq`*[_type == 'pageFooter' && slug.current == $url][0]`;
  const params = { url }; // Create an object with the parameter value
  const specificationData = await client.fetch(query, params);

  const querylink = groq`*[_type == 'pageFooter'] `;
  const pageData = await client.fetch(querylink);

  return (
    <>
      <div className="text-10px flex justify-between items-center h-12 text-soft-black uppercase px-6  w-full   md:text-11px md:px-12 md:h-40 sticky top-0">
        <Link href="./" className="flex-1 block ">
          <div className="flex">
      
            <p className="pl-2"> ← Retour</p>
          </div>
        </Link>

        <div className="logo w-28 h-28 md:h-48 md:w-48 ">
     
        </div>

        <div className="icon-langue flex-1 flex justify-end md:relative md:-top-10 cursor-pointer opacity-0">
         
       
        </div>
      </div>
      <div className="md:grid grid-cols-12 md:pr-36">
        <div className="py-12 md:col-span-2 md:py-0 md:pl-12 ">
         
      
        </div>
        <div className="md:col-span-9">
          <h1 className="md:text-7xl text-5xl pb-16 px-6">{specificationData.titre}</h1>
          <div className="px-6 text-16px-legale">
            {specificationData.editionText.map((block) => {
              if (block._type === "block") {
                if (block.style === "h2") {
                  return <h2 className="md:text-6xl  text-4xl pb-8" key={block._key}>{renderText(block)}</h2>;
                } else if (block.style === "h3") {
                  return (
                    <span
                      className="text-5xl uppercase pt-24 pb-6"
                      key={block._key}
                    >
                      {renderText(block)}
                    </span>
                  );
                } else {
                  return <div className="text-2xl pb-8" key={block._key}>{renderText(block)}</div>;
                }
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
