"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo-cropped.svg";
import logoG from "../public/logo-g.svg";
import useScrollTranslate from "./utils/useScrollEffect";
import { useEffect, useState } from "react";
import { Lenis as ReactLenis, useLenis } from "@studio-freight/react-lenis";

export default function Header({ projectsData }) {
  const scrollDirection = useScrollTranslate(100);
  const [visible, setVisible] = useState(true);

  const lenis = useLenis(({ scroll }) => {
    // Your scroll-related code here
  });
  const handleClick = () => {
    lenis.scrollTo("#hero");
  };
  const handleClickContact = () => {
    lenis.scrollTo("#contact");
  };
  const handleClickSection = () => {
    lenis.scrollTo(`#${project.slug}`);
  };

  useEffect(() => {
    const tempFixedElement = document.querySelector(".tempFixed");
  console.log(tempFixedElement)
    setTimeout(() => {
      if (tempFixedElement) {
        tempFixedElement.style.position = "relative";
      }
    }, 3300);
  }, []);
  
  useEffect(() => {
    let timeoutId;

    const handleScrollDirection = () => {
      if (scrollDirection === "down") {
        clearTimeout(timeoutId);
        // setVisible(false);
        timeoutId = setTimeout(() => {
          setVisible(false);
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
          style={{
            transform: visible ? "translateY(0)" : "translateY(-12rem)",
          }}
        >
          <Link onClick={handleClick} href="#hero">
            <div className="image__container relative group h-full w-full">
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
          </Link>

          <div className="flex col-span-11 text-p-font-size justify-end">
            <div className="flex text-dark-blue gap-28">
              {projectsData.map((project, index) => (
                <Link
                key={index}
                  href={`#${project.slug.current}`}
                  onClick={() => lenis.scrollTo(`#${project.slug.current}`)}
                  className="flex items-center"
                >
                  <p className=" hover-underline-animation">{project.titre}</p>
                </Link>
              ))}
            
              <Link
                href="#contact"
                onClick={handleClickContact}
                className="flex items-center "
              >
                <p className="hover-underline-animation">Contact</p>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
