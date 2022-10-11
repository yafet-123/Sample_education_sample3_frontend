import React from "react";

export function Contact() {
  return (
    <div className="bg-amber-500 p-20 grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="flex flex-col ">
        <h1 className="text-2xl font-extrabold uppercase text-center text-white mb-5">
          call us
        </h1>
        <h1 className="text-base font-extrabold uppercase text-center text-white mb-5">
          +2519-34-78-10-38
        </h1>
        <h1 className="text-2xl font-extrabold uppercase text-center text-white mb-5">
          Mail
        </h1>
        <h1 className="text-base font-extrabold uppercase text-center text-white mb-5">
          yafetaddisu@gmail.com
        </h1>
        <h1 className="text-2xl font-extrabold uppercase text-center text-white mb-5">
          Location
        </h1>
        <h1 className="text-base font-extrabold uppercase text-center text-white mb-5">
          Addis Ababa,Ethopia
        </h1>
      </div>

      <div className="relative">
        <input
          placeholder="Enter Your Name "
          type="text"
          className="w-full bg-transparent outline-none p-3 mb-3 placeholder:text-white border-b-2"
        />
        <input
          placeholder="Enter Your Valid Email"
          type="text"
          className="w-full bg-transparent outline-none p-3 mb-3 placeholder:text-white border-b-2"
        />
        <input
          placeholder="Enter Your Message"
          type="text"
          className="w-full bg-transparent outline-none p-3 mb-3 placeholder:text-white border-b-2"
        />

        <button className="border-2 py-2 px-5 mt-5">Submit</button>
      </div>
    </div>
  );
}
