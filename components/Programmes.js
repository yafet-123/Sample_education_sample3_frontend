import React from "react";

export function Programmes() {
  return (
    <div className="p-20 w-full h-full bg-gray-300">
      <div className="max-w-2xl mx-auto flex flex-col items-center mb-5">
        <h1 className="text-2xl font-bold uppercase text-center mb-5">
          New Programmes
        </h1>
        <p className="font-serif font-medium tracking-wide leading-10 text-center capitalize">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <button className="bg-amber-500 border rounded-lg text-black py-2 px-5 w-32">
          Learn More
        </button>
      </div>

      <div className="w-full relative">
        <div className="w-96 h-[40rem] bg-amber-500 mx-20"></div>
        <div className="absolute top-10 w-full h-[30rem] bg-white"></div>
      </div>
    </div>
  );
}
