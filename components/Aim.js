import React from "react";

export function Aim() {
  return (
    <div className="bg-gray-300 w-full h-screen relative">
      <div className="hidden lg:block lg:absolute top-0 left-0 lg:left-1/2 w-[32rem] h-full bg-amber-500"></div>
      <div className="lg:absolute lg:left-1/4 lg:top-32 aim-background w-full lg:w-[70rem] h-[35rem] ">
        <div className="p-32 lg:p-10 bg-transparent lg:bg-white w-[30rem] h-60 lg:-mt-10 lg:float-right lg:-mx-32 m-auto">
          <h1 className="text-black text-2xl font-extrabold uppercase text-center lg:text-left">
            Helping each child find and follow their best learning path.
          </h1>
        </div>

        <div className="grid grid-cols-4 lg:grid-cols-2 gap-10 absolute bottom-10 lg:-bottom-40 mx-20 lg:mx-0">
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
