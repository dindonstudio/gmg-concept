"use client";
import Image from "next/image";

import logo from "../public/logo-cropped.svg";
import ContactForm from "./contactForm";
export default function Footer({ footerData }) {
  return (
    <>
      <footer className="  px-extend-3rem pb-60 bg-light-blue text-dark-blue">
        <h2 className="pt-12 pb-56">Contactez-nous</h2>
        <div className="flex">
        <div className="flex w-full justify-between flex-1">
          <div className="footer__info">
          {footerData[0].texts.map((texts, index) => (
              <p key={index} className="">
         {texts.text}
              </p>
            ))} 
          </div>
        </div>
        <ContactForm/>
        </div>
      
      </footer>
    </>
  );
}
