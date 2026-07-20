import Image from "next/image";



export default function Timeline(){
    return (
      <div
        className="flex items-center justify-center flex-col mt-[5vw] relative z-1 space-y-12"
        id="DATE/VENUE"
      >
        <h1 className="text-[88px] sm:text-[96px] lg:text-[166.13px] leading-[1.1] my-2 font-normal font-dragon text-2xl bg-gradient-to-b from-white to-[#999999] bg-clip-text text-transparent">
          TIMELINE
        </h1>
        <Image
          src="map1.svg"
          width="997"
          height="1036"
          className="-translate-y-[120px]"
          alt=""
        ></Image>
      </div>
    );
}