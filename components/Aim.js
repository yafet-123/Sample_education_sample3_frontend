import React from "react";

export function Aim() {
  return (
    <div className="bg-gray-300 w-full h-screen relative">
      <div className="absolute top-0 left-0 lg:left-1/2 w-[32rem] h-full bg-amber-500"></div>
      <div className="absolute lg:left-1/4 lg:top-32 mission-background w-full lg:w-[70rem] h-[35rem]">
        <div className="p-10 bg-white w-[30rem] h-60 -mt-10 float-right -mx-32">
          <h1 className="text-2xl font-extrabold uppercase text-left">
            Helping each child find and follow their best learning path.
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 absolute -bottom-40">
          <div className="bg-white py-12 px-2 text-center text-xl font-extrabold uppercase text-amber-700">
            Maths
          </div>
          <div className="bg-white py-12 px-2 text-center text-xl font-extrabold uppercase text-amber-700">
            Computer Science
          </div>
          <div className="bg-white py-12 px-2 text-center text-xl font-extrabold uppercase text-amber-700">
            Physics
          </div>
          <div className="bg-white py-12 px-2 text-center text-xl font-extrabold uppercase text-amber-700">
            History
          </div>
        </div>
      </div>
    </div>
  );
}
