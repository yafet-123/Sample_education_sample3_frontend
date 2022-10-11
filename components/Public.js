import React from "react";

export function Public() {
  return (
    <div className="h-full m-20">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold uppercase text-left my-5 w-full lg:w-1/4">
          public education is where my heart is
        </h1>
        <div className="hidden lg:block w-40 h-40 bg-amber-600 border-none rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <p className="font-serif font-medium tracking-wide leading-10 text-left capitalize w-full lg:w-2/4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <p className="font-serif font-medium tracking-wide leading-10 text-left capitalize w-full lg:w-2/4">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
          <span className="block w-32 p-2 bg-amber-700 text-white border rounded-lg">
            Learn More
          </span>
        </p>
      </div>

      <div className="mr-20 mt-56 w-full bg-amber-500 h-96 flex pr-28 px-20">
        <div className="w-full relative ">
          <div className="public-one-background w-1/4 h-full absolute -top-1/4 left-0"></div>
          <div className="public-two-background w-1/4 h-full absolute -top-1/4 left-1/4"></div>
          <div className="public-three-background w-1/4 h-full absolute -top-1/4 left-2/4"></div>
          <div className="public-four-background w-1/4 h-full absolute -top-1/4 left-3/4"></div>
        </div>
      </div>
    </div>
  );
}
