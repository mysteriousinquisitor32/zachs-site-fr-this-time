import Image from "next/image";
import Nav from "./elements/nav";
import NextJsWatermark from "./elements/NextJsWatermark";
import React from "react";
export default function Home() {
  
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans bg-[#f2d6a2]">
      <Nav activePage="Home" />
      
      <div className="w-full h-[50vh] items-center justify-center zackbackimage m-5">
        {/* <div className="logo flex w-1/4 h-1/4 border-black border-1 bg-gray-400/80
        rounded-md text-white text-center align-items-center p-0 m-0
        font-bold">
        ZACHS AWESOME BLOG!!
        </div> */}
      </div>
      {/* <Image
          className="dark:invert static"
          src="/next.svg"
          alt="Next.js logo"
          width={700}
          height={30}
          style={{zIndex: "0"}}
        /> */}
      o
      <h1 className="flex w-full mt-5 justify-center text-black text-xl font-bold text-center">Updates:<br />1.0 Release</h1>
      <ol>
        <li></li>
        <li>Hello!</li>
      </ol>
      <div className="w-full h-100"></div>
      hello
    </div>
  );
  
}


