import Link from "next/link";
import React from "react";

export function Mission() {
  return (
    <div className="bg-white grid grid-cols-1 md:grid-cols-2 gap-10 m-20">
      <div className="">
        <h1 className="text-2xl font-bold uppercase text-left mb-5">
          Our Mission
        </h1>
        <div className="flex flex-col w-1/2 text-slate-600">
          <p className="font-serif font-medium tracking-wide leading-10 text-left capitalize">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <Link href="">
            <a className="font-bold underline text-left">Read More</a>
          </Link>
        </div>

        <div className="flex flex-col w-1/2 float-right text-slate-600">
          <p className="font-serif font-medium tracking-wide leading-10 text-left capitalize">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="hidden md:block absolute top-1/4 w-full h-56 bg-amber-500"></div>
        <div className="absolute top-0 left-0 lg:left-1/4 mission-background w-full md:w-96 h-[30rem] "></div>
      </div>
    </div>
  );
}
