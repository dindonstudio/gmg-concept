"use client";
import Image from "next/image";

import logo from "../public/logo-cropped.svg";
import ContactForm from "./contactForm";
export default function Footer({ footerData }) {
  return (
    <>
      <footer className=" ">
        <div className="flex ">
          <div className="footer__info">
          {footerData[0].texts.map((texts, index) => (
              <p key={index} className="">
         {texts.text}
              </p>
            ))} 
          </div>
        </div>
        <ContactForm/>
      </footer>
    </>
  );
}
