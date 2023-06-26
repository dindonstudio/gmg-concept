"use client";
import { useState, useEffect, useRef, useContext } from "react";
import Projet from "./projet"; // Import the Projet component

export default function AllProjects({ projectsData }) {
  return (
    <div>
      {projectsData.map((project, index) => (

        <Projet key={project._id} project={project} index={index} />
      ))}
    </div>
  );
}
