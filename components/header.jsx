"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo-cropped.svg";
import logoG from "../public/logo-g.svg";
import useScrollTranslate from "./utils/useScrollEffect";
import { useEffect, useState } from "react";
import { Lenis as ReactLenis, useLenis } from "@studio-freight/react-lenis";

export default function Header({ projectsData }) {
  const { scrollDirection, isVisible } = useScrollTranslate(100);
  const lenis = useLenis(({ scroll }) => {
    // Your scroll-related code here
  });
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    lenis.scrollTo("#hero");
  };
  const handleClickContact = () => {
    lenis.scrollTo("#contact");
  };
  const handleClickSection = () => {
    lenis.scrollTo(`#${project.slug}`);
  };
  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
  }
  useEffect(() => {
    setTimeout(() => {
      const tempFixedElement = document.querySelector(".tempFixed");

      if (tempFixedElement) {
        tempFixedElement.style.position = "relative";
      }
    }, 3300);
  }, []);

  return (
    <>
      <header className="fixed w-full h-44 group   z-10  transition-ease opacity-0 ">
        <div
          className="header__container md:grid  transition-ease py-12 px-extend-3rem grid-cols-12 bg-light-blue  h-full "
          style={{
            transform: isVisible ? "translateY(0)" : "translateY(-12rem)",
          }}
        >
          <a onClick={handleClick} href="#hero">
            <div className="image__container relative group h-full w-full">
              <Image
                className="w-auto h-full object-contain absolute left-0 top-0   "
                priority
                src={logo}
                width={20}
                height={30}
                alt="Logo Buffet Crampon"
              />
              {/* <Image
                className="w-full h-full object-contain  absolute left-0 top-0 opacity-0 md:group-hover:opacity-100 md:transition-ease "
                priority
                src={logo}
                width={30}
                height={50}
                alt="Logo Buffet Crampon"
              /> */}
            </div>
          </a>

          <div className="md:flex  hidden col-span-11 text-p-font-size justify-end">
            <div className="flex text-dark-blue gap-28">
              {projectsData.map((project, index) => (
                <a
                  key={index}
                  href={`#${project.slug.current}`}
                  onClick={() => lenis.scrollTo(`#${project.slug.current}`)}
                  className="flex items-center"
                >
                  <p className=" hover-underline-animation">{project.titre}</p>
                </a>
              ))}

              <a
                href="#contact"
                onClick={handleClickContact}
                className="flex items-center "
              >
                <p className="hover-underline-animation">Contact</p>
              </a>
            </div>
          </div>
      
        </div>
      </header>
      <div className="menu-mobile md:hidden fixed  right-10">
          <button onClick={toggleMenu} className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </button>
     
            <div className={`mobile-menu w-full fixed top-0 left-0 bg-light-blue flex h-auto px-6 justify-between ${isMenuOpen ? 'open' : ''}`}>
                 <button onClick={toggleMenu} className="hamburger close">
            <span></span>
            <span></span>
    
          </button>
            
              <div className="flex flex-col flex-1 items-end mt-24 h-auto pb-12 pt-12 gap-2">
                
              {projectsData.map((project, index) => (
                <a
                  key={index}
                  href={`#${project.slug.current}`}
                  onClick={() => {
                    lenis.scrollTo(`#${project.slug.current}`);
                    setMenuOpen(false); // Close the menu
                  }}                  className="flex items-center"
                >
                  <p className=" hover-underline-animation">{project.titre}</p>
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => {
                  handleClickContact();
                  setMenuOpen(false); // Close the menu
                }}                className="flex items-center "
              >
                <p className="hover-underline-animation">Contact</p>
              </a>
              </div>
         
            </div>
    
        </div>
    </>
  );
}
