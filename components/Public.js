import React from "react";

export function Public() {
  return (
    <div className="h-full m-20">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold uppercase text-left my-5 w-1/4">
          public education is where my heart is
        </h1>
        <div className="w-40 h-40 bg-amber-600 border-none rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <p className="font-serif font-medium tracking-wide leading-10 text-left capitalize w-2/4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <p className="font-serif font-medium tracking-wide leading-10 text-left capitalize w-2/4">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
          <span className="block w-32 p-2 bg-amber-700 text-white border rounded-lg">
            Learn More
          </span>
        </p>
      </div>

      <div className="mr-20 mt-96 w-full h-96 bg-amber-500 grid grid-cols-1 md:grid-cols-2 gap-10"></div>
    </div>
  );
}
