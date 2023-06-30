"use client";
import { useAddRemoveOpacity } from './utils/useAddRemoveOpacity';
import SvgComponent from './svg-animated';
import "../app/svg-animation.css";

export default function Overlay() {
  const addRemoveOpacity = useAddRemoveOpacity();

  return (
    <>
      <div className="overlay bg-light-blue z-10 fixed top-0 left-0 h-screen w-screen removeOpacity  opacity-100 ">
        <div className="svg-container w-full h-full flex justify-center items-center fade-out-down ">
          <SvgComponent />
        </div>
      </div>
    </>
  );
}
