"use client";
import Image from "next/image";
import { Lenis as ReactLenis, useLenis } from '@studio-freight/react-lenis'
import "./globals.css";
import Overlay from "@/components/overlay";
import Hero from "@/components/hero";
import Header from "@/components/header";
import Presentation from "@/components/presentation";
import Solutions from "@/components/solutions";
import AllProjects from "@/components/allProjects";
import Footer from "@/components/footer";
import {
  getHero,
  getPresentation,
  getProjects,
  getFooter,
} from "../sanity/sanity-util";

export default async function Home() {
  const heroData = await getHero();
  const presentationData = await getPresentation();
  const projectsData = await getProjects();
  const footerData = await getFooter();

  return (
    <>
        <Overlay />
        <div className="fixed tempFixed ">
        <Header projectsData={projectsData} />
        <Hero heroData={heroData} />
        <Presentation presentationData={presentationData} />
        <Solutions presentationData={presentationData} />

        <AllProjects projectsData={projectsData} />

        <Footer footerData={footerData} />
        </div>
    
    </>
  );
}
