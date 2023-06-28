"use client";
import Image from "next/image";
import { ReactLenis } from "@studio-freight/react-lenis";
import "./globals.css";
import Overlay from "@/components/overlay";
import Hero from "@/components/hero";
import Header from "@/components/header";
import Presentation from "@/components/presentation";
import AllProjects from "@/components/allProjects";
import Footer from "@/components/footer";
import {
  getHero,
  getPresentation,
  getProjects,
  getFooter,
} from "../sanity/sanity-util";
import { useEffect } from "react";
export default async function Home() {
  const heroData = await getHero();
  const presentationData = await getPresentation();
  const projectsData = await getProjects();
  const footerData = await getFooter();

  return (
    <>
      <ReactLenis root options={{ lerp: 0.08, wheelMultiplier: 0.8 }}>
        <Overlay />
        <Header />
        <Hero heroData={heroData} />
        <Presentation presentationData={presentationData} />
        <AllProjects projectsData={projectsData} />
        <Footer footerData={footerData} />
      </ReactLenis>
    </>
  );
}
