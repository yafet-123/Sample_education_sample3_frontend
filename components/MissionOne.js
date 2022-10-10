import React from "react";

export function MissionOne() {
  return (
    <div className="m-20 h-full ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="font-serif font-semibold text-amber-700 tracking-wide leading-10 text-justify capitalize w-1/2 float-right">
          our mission is to be a caring community of lifelong learners. with
          collaberatives teaching in a workshop model where students are doing
          most of the talking and heavy lifting of their learning.
        </div>

        <div className="flex flex-col w-1/2">
          <h1 className="text-2xl font-bold uppercase text-left mb-5">
            Welcome to School for children
          </h1>
          <p className="font-serif font-medium text-black tracking-wide leading-10 text-left capitalize">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button className="bg-amber-500 border rounded-lg text-black py-2 px-5 w-32">
            Learn More
          </button>
        </div>
      </div>

      <div className="mt-20 h-screen mb-56">
        <div className="w-[55rem] h-[45rem] bg-amber-500 float-right">
          <div className="hero-background w-[80rem] h-[45rem] mt-28 -mx-[30rem] relative">
            <div className="p-10 bg-white w-[30rem] h-96 absolute left-24 top-3/4 mb-10 border-4 border-orange-700">
              <h1 className="text-2xl font-bold uppercase text-left mb-5">
                Our Teachers
              </h1>
              <p className="font-serif font-medium text-slate-600 tracking-wide leading-10 text-left capitalize">
                bring to the table win-win survival strategy to ensure proactive
                domination. at the end of the day. going forward, a new normal
                that has evolved from genation x is on the runway heading
                towards a streamlined cloud solution.
              </p>
              <button className="bg-white border border-black rounded-lg text-black py-2 px-5 w-32">
                Learn More
              </button>
            </div>
          </div>
          <div className="p-10 w-[30rem] h-96 mt-10 bg-amber-700 float-right">
            <h1 className="text-2xl font-bold uppercase text-left mb-5 text-white">
              About us
            </h1>
            <h1 className="text-6xl font-serif font-medium text-white tracking-wide leading-[5rem] text-left capitalize w-1/4">
              Best Education Channels
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}