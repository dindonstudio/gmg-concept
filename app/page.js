"use client";
import "./globals.css";

import Image from "next/image";
import { Lenis as ReactLenis, useLenis } from '@studio-freight/react-lenis'
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
  getPage
} from "../sanity/sanity-util";

export default async function Home() {
  const heroData = await getHero();
  const presentationData = await getPresentation();
  const projectsData = await getProjects();
  const footerData = await getFooter();
  const pageData = await getPage();
  return (
    <>
     <ReactLenis root options={{ lerp: 0.08, wheelMultiplier: 0.5 }}>
        <Overlay />
        <div className="fixed tempFixed ">
        <Header projectsData={projectsData} />
        <Hero heroData={heroData} />
        <Presentation presentationData={presentationData} />
        <Solutions presentationData={presentationData} />

        <AllProjects projectsData={projectsData} />

        <Footer footerData={footerData} pageData={pageData} />
        </div>
        </ReactLenis>

    </>
  );
}
