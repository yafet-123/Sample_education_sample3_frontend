import React from "react";

export function Programmes() {
  return (
    <div className="pt-20 px-20 w-full h-full bg-gray-300">
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

      <div className="w-full h-full lg:relative">
        <div className="hidden lg:block w-96 h-[40rem] bg-amber-500 mx-20"></div>
        <div className="lg:absolute lg:top-20 w-full h-[30rem] bg-white grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="hidden lg:block programmes-background w-full h-[30rem]"></div>
          <div className="flex flex-col">
            <h1 className="text-xl lg:text-4xl font-bold uppercase text-center lg:text-left px-5 lg:px-5 my-5 w-full lg:w-3/4">
              Getting Education Became Easier
              <span className="block w-full bg-amber-600 p-2 mt-5 border rounded-lg"></span>
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <p className="font-serif font-medium tracking-wide leading-10 text-center lg:text-left px-5 lg:px-5 capitalize w-full lg:w-3/4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <p className="font-serif font-medium tracking-wide leading-10 text-center lg:text-left px-5 lg:px-5 capitalize w-full lg:w-3/4">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
                <span className="block w-32 p-2 bg-amber-700 text-white border rounded-lg mt-5">
                  Learn More
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
