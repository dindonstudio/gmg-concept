"use client";
import Image from "next/image";
import logo from "../public/logo-cropped.svg";
import logoG from "../public/logo-g.svg";
import useScrollTranslate from "./utils/useScrollEffect";
import { useEffect, useState } from "react";
export default function Header() {
  const scrollDirection = useScrollTranslate(100);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let timeoutId;

    const handleScrollDirection = () => {
      if (scrollDirection === 'down') {
        clearTimeout(timeoutId);
        setVisible(false);
        timeoutId = setTimeout(() => {
          setVisible(true);
        }, 300);
      } else {
        setVisible(true);
      }
    };

    handleScrollDirection();

    return () => {
      clearTimeout(timeoutId);
    };
  }, [scrollDirection]);
  return (
    <>
      <header className="fixed w-full h-36 pt-12 px-12  z-10 bg-transparent transition-ease opacity-0 ">
        <div
          className="grid transition-ease grid-cols-12  h-full"
          style={{ transform: visible ? 'translateY(0)' : 'translateY(-100%)' }}        >
          <div className="image__container relative group">
            <Image
              className="w-full h-full object-contain absolute left-0 top-0   "
              priority
              src={logoG}
              width={30}
              height={50}
              alt="Logo Buffet Crampon"
            />
            <Image
              className="w-full h-full object-contain  absolute left-0 top-0 opacity-0 md:group-hover:opacity-100 md:transition-ease "
              priority
              src={logo}
              width={30}
              height={50}
              alt="Logo Buffet Crampon"
            />
          </div>
          <div className="flex col-span-11 text-p-font-size justify-end">
            <div className="flex text-dark-blue gap-28">
              <div className="flex items-center">
                <p>Identité visuelle</p>
              </div>
              <div className="flex items-center">
                {" "}
                <p>Edition</p>
              </div>
              <div className="flex items-center">
                {" "}
                <p>Digital</p>
              </div>
              <div className="flex items-center">
                <p>Contact</p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
