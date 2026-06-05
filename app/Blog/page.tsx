import Image from "next/image";
import Nav from "../elements/nav";
import NextJsWatermark from "../elements/NextJsWatermark";
import React from "react";
export default function Home() {
  return (
    <div className="flex font-sans flex-col justify-center items-center">
      <Nav activePage="Blog" />
      <div className="w-full h-[50vh] items-center justify-center zackBLOGGGGimage m-5">
        {/* <div className="logo flex w-1/4 h-1/4 border-black border-1 bg-gray-400/80
        rounded-md text-white text-center align-items-center p-0 m-0
        font-bold">
        ZACHS AWESOME BLOG!!
        </div> */}
      </div>
      <div className="flex w-[90%] h-0.5 bg-black rounded justify-center align-center items-center mb-5"></div>
      <div className="w-full flex flex-row justify-center"> {/** container of containers */}
        <div className="flex flex-col w-1/2 h-full">
          <div className="flex w-full h-full justify-center items-center align-center text-center flex-col">
            <h1 className="text-center font-bold">The First of Many</h1>
            <p className="text-center">04 / 06 / 2026</p>
          </div>
          <p className="flex w-full h-full italic font-bold text-center">

            I've spent a long time wishing i had a place to express my thoughts and boast about my life. I’m not one to enjoy boasting in person. it feels like a poor reflection onto my character and rude to those who may also have interesting things in their own life. {/**<img src="./file.svg" height={100} width={75} className="float-right m-5"></img>**/}
            This, however, seems to have backfired to the point at which i feel i never talk about myself and i take no time to appreciate what ive done and what ive learned. And god damn it, i’m gonna boast my ass off! I think i’m an interesting person,
            and i’m gonna shove it down every persons throat! (if they choose to read that is.)

          </p>
        </div>
        <div className="flex w-1/4 sickexplosion"></div>
        {/* <img src="./sickassexplosion.png" className="flex mr-5 w-1/2 h-full"></img> */}
      </div>
    </div>
  );
}
