import Image from "next/image";
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
      <Overlay />
      <Header/>
      <Hero heroData={heroData} />
      <Presentation presentationData={presentationData} />
      <AllProjects projectsData={projectsData} />
    </>
  );
}
