'use client'
import Image from "next/image";
import { ReactLenis } from "@studio-freight/react-lenis";
import "./globals.css";
import Overlay from "@/components/overlay";
import Hero from "@/components/hero";
import Header from "@/components/header";
import Presentation from '@/components/presentation'
import AllProjects from "@/components/allProjects";
import { getHero, getPresentation, getProjects } from "../sanity/sanity-util";
export default async function Home() {
  const heroData = await getHero();
  const presentationData = await getPresentation();
  const projectsData = await getProjects();
  return (
    <>
        <ReactLenis root options={{ lerp: 0.08, wheelMultiplier: 0.8}}>

      <Overlay />
      <Header/>
      <Hero heroData={heroData} />
      {/* <Presentation presentationData={presentationData} /> */}
      <AllProjects projectsData={projectsData} />
      </ReactLenis>
    </>
  );
}
