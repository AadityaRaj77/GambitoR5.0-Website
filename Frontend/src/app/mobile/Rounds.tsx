"use client";
import Image from "next/image";
import { useState } from "react";
import "./Res.css";

export default function Rounds() {
  return (
    <div id="ROUNDS" className="relative z-[4] w-full text-white m-0 space-y-4 mb-12">
      <div className="flex justify-center">
        <h1 className="text-[48px] leading-[45px] my-2 font-normal font-dragon bg-gradient-to-b from-white to-[#999999] bg-clip-text text-transparent">
          ROUNDS
        </h1>
      </div>
      <div>
        <div className="flex-row space-y-8 justify-items-center mx-8">
          <div className="flex justify-between items-center w-1/1">
            <div className="w-[100%] lg:w-1/1 justify-items-center space-y-1">
              <div className="flex">
                <h1 className="text-[28px] my-2 font-medium leading-[45px] font-dragon tracking-wider text-[#FFB400]">
                  INCEPTION ROUND
                </h1>
              </div>
              <div className="relative w-full h-auto overflow-hidden p-4  border-2 border-[#A56733] rounded-tr-xl rounded-bl-xl">
                <div className="absolute inset-0 bg-[radial-gradient(circle,#E88221_0%,#462608_100%)] opacity-[0.15] pointer-events-none"></div>
                <p className="text-[16px] text-[#FAF4BE] font-allrounder leading-[25px] font-light text-justify">
                  For the first round of GambitoR, a 90 minutes question paper consisting of math,
                  puzzles, science etc., will be waiting for you in the deep sea, you need to put
                  your logical skills, guile and perception up for a challenge. The top 20 students
                  from each category{" "}
                  <span className="text-[#FFB400]">
                    (Astrox, Areteox, Metiox, Apollox, Athenox)
                  </span>
                  {" "}will get to visit IIT Roorkee for the second round,{" "}
                  <span className="text-[#FFB400]">&apos;Pinnacle&apos;</span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-between w-1/1">
            <div className="w-full lg:w-1/1 justify-items-center space-y-1 mt-8">
              <div className="flex">
                <h1 className="text-[28px] font-medium leading-[45px] font-dragon tracking-wider text-[#FFB400]">
                  PINNACLE
                </h1>
              </div>
              <div className="relative w-full h-auto overflow-hidden p-4  border-2 border-[#A56733] rounded-tr-xl rounded-bl-xl">
                <div className="absolute inset-0 bg-[radial-gradient(circle,#E88221_0%,#462608_100%)] opacity-[0.15] pointer-events-none"></div>
                <p className="text-[16px] text-[#FAF4BE] font-allrounder font-light leading-[25px] text-justify">
                  Once you&apos;ve made it through, an exciting visit to the IITR campus awaits
                  you. Taking in the beauty, the rich history and the elegance of our campus,
                  and adding that to the excitement of the various technical events for the
                  second round, it will be a glorious and exhilarating experience. Push your
                  limits, gauge your potential, and have fun while exploring the ins and outs
                  of the campus. The top performers in the events will be{" "}
                  <span className="text-[#FFB400]">
                    awarded cash prizes and certificates of excellence.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
