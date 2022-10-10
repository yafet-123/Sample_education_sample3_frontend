import React from "react";

export function Hero() {
  return (
    <div className="w-full h-full">
      <div className="mx-20 z-10 relative">
        <div className="w-[45rem] h-screen bg-amber-500 mx-20 z-20"></div>
        <div className="absolute top-28 hero-background w-[55rem] h-[35rem] ">
          <div className="w-40 h-40 bg-amber-300 border-none rounded-full absolute top-24 -right-24"></div>
          <div className="p-10 bg-white w-[30rem] h-96 absolute -right-24 -bottom-2/4 mb-10">
            <h1 className="text-2xl font-bold uppercase text-left mb-5">
              Welcome
            </h1>
            <p className="font-serif font-medium text-slate-600 tracking-wide leading-10 text-left capitalize">
              bring to the table win-win survival strategy to ensure proactive
              domination. at the end of the day. going forward, a new normal
              that has evolved from genation x is on the runway heading towards
              a streamlined cloud solution.
            </p>
            <button className="bg-amber-500 border rounded-lg text-black py-2 px-5 w-32">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="-mt-48 w-full h-[40rem] bg-gray-300 relative">
        <div className="absolute bottom-20 left-1/4 right-1/4 font-normal uppercase text-center mb-5 text-slate-800">
          <h1 className="text-2xl">About our school</h1>
          <h1 className="text-4xl">
            We are inspiring the next{" "}
            <span className="text-black">generation</span> of the{" "}
            <span className="text-black">brighthest minds. </span>bring to the
            table win-win survival strategy to ensure proactive domination
          </h1>
        </div>
      </div>
    </div>
  );
}
