"use client";
import Image from "next/image";
import { useState } from "react";
import "./Res.css";


function NavButton({ text }: any) {
  return (
    <button
      id={`b${text}`}
      className="transition ease-out duration-300 border-4 border-[#FFE016] rounded-full w-[80vw] max-w-[300px] text-[18px] leading-[25px] text-[#FAF4BE] font-dragon font-regular h-[56px] cursor-pointer hover:bg-[#A96104] hover:border-[#FFE016] active:bg-[#BA8136] active:border-[#FFE645]"
    >
      {text}
    </button>
  );
}
export default function Syllabus() {
  const [selectedClass, setSelectedClass] = useState("XI");

  const showPara = (className: string) => {
    setSelectedClass(className);
  };
  const buttons = [
    { class: "CLASS 8",  pdf: "class8.pdf" },
    { class: "CLASS 9",  pdf: "class9.pdf" },
    { class: "CLASS 10", pdf: "class10.pdf" },
    { class: "CLASS 11", pdf: "class11.pdf" },
    { class: "CLASS 12", pdf: "class12.pdf" },
  ];

  return (
    <div
      id="SYLLABUS"
      className="relative z-[4] pt-14 w-full text-white justify-items-center space-y-12 mb-12"
    >
      <h1 className="text-[48px] leading-[45px] my-2 font-normal font-dragon bg-gradient-to-b from-white to-[#999999] bg-clip-text text-transparent">
        SYLLABUS
      </h1>
      <div className="">
        <ul className="flex flex-col items-center justify-center space-y-6">
          {buttons.map((object, index) => (
            <li key={index}>
              {" "}
              {/* Add key prop here */}
              <a href={object.pdf} download>
                <NavButton text={object.class} />
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* 
                <div className="font-overpass flex flex-col items-center w-[70%] absolute top-[300px] text-center text-[22px]">
                    {selectedClass === 'IX' && (
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta magna sed eleifend commodo. Maecenas eu tristique nulla. Nam vulputate, arcu euismod accumsan sodales, turpis dui auctor libero, vitae finibus metus ipsum quis tellus. Duis fermentum justo erat, eu porttitor lorem suscipit in. Sed pellentesque porta nunc eu facilisis. Praesent eu augue magna. Curabitur hendrerit lorem nibh, in finibus elit dictum sed. Praesent a ultricies mauris. Donec tincidunt ut leo nec suscipit. Etiam dictum orci in ante dapibus sagittis in ut justo. Cras mi risus, viverra nec.</p>
                    )}
                    {selectedClass === 'X' && (
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta magna sed eleifend commodo. Maecenas eu tristique nulla. Nam vulputate, arcu euismod accumsan sodales, turpis dui auctor libero, vitae finibus metus ipsum quis tellus. Duis fermentum justo erat, eu porttitor lorem suscipit in. Sed pellentesque porta nunc eu facilisis. Praesent eu augue magna. Curabitur hendrerit lorem nibh, in finibus elit dictum sed. Praesent a ultricies mauris. Donec tincidunt ut leo nec suscipit. Etiam dictum orci in ante dapibus sagittis in ut justo. Cras mi risus, viverra nec.</p>
                    )}
                    {selectedClass === 'XI' && (
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos vero expedita optio alias placeat ab officia, excepturi vitae impedit aut cum nulla obcaecati consequuntur eveniet deleniti laborum, voluptatem minus eaque?</p>
                    )}
                    {selectedClass === 'XII' && (
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sit corrupti earum fugiat distinctio repellendus ad facere doloribus eaque veniam nam minus ab, assumenda, iure qui facilis dolore? Sed, laudantium!</p>
                    )}
                </div> */}
    </div>
  );
}
