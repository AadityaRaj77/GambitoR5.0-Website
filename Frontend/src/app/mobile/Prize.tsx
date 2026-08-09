"use client";
import Image from 'next/image'

import { useState } from "react";


import firstPrize from './assets/Prize/firstPrize.svg'
import secondPrize from './assets/Prize/secondPrize.svg'
import thirdPrize from './assets/Prize/thirdPrize.svg'





export default function Prize() {
    
    return (
        <section id="PRIZES" className="relative z-[2] flex flex-col items-center justify-items-center py-8 space-y-8">
<h1 className="text-[48px] leading-[45px] my-2 font-normal font-dragon bg-gradient-to-b from-white to-[#999999] bg-clip-text text-transparent leading-60px">PRIZES</h1>
            <div className="flex space-x-8 justify-items-center">
                 <div className="mt-20">
                    <a  target="_blank" rel="noreferrer" className="flex flex-col items-center">
                        <Image alt="img" src={secondPrize} className="w-[22vw] min-w-[70px] max-w-[110px]" />
                    </a>
            </div>
            <div className="flex flex-col items-center">
                    <a  target="_blank" rel="noreferrer" className="flex flex-col items-center">
                        <Image alt="img" src={firstPrize} className="w-[24vw] min-w-[80px] max-w-[120px]" />
                    </a>
                </div>  

            <div className="mt-20">
                    <a target="_blank" rel="noreferrer" className="flex flex-col items-center">
                     <Image alt="img" src={thirdPrize} className="w-[19vw] min-w-[60px] max-w-[95px]" />
                    </a>
            </div>
                
            </div>
  
        </section>
    );
}
