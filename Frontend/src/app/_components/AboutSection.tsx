import Image from "next/image";
import Animations from './assets/AnimatedButton'
export default function AboutSection(){
    return (
      <section
        id="ABOUT"
        className="flex flex-col lg:justify-between lg:text-black text-white lg:flex-row relative z-[1] max-w-[1380px] mx-auto"
      >
        <div className="lg:w-[50%] order-2 lg:order-1 flex flex-col justify-center lg:mt-0 mt-[12rem] gap-4">
          <h1 className="text-[36px] leading-[45px] my-2 font-normal font-dragon text-2xl bg-gradient-to-b from-white to-[#999999] bg-clip-text text-transparent">
            ABOUT GAMBITOR
          </h1>
          <p className="text-[20px] font-overpass leading-[25px]  font-medium text-justify mb-8 text-[#FAF4BE]">
            GambitoR is a prestigious national-level exam designed specifically for students of
            Classes 8 to 12 who strive for excellence and enjoy solving challenging problems. This
            unique competition evaluates students&apos; logical and analytical skills through
            questions crafted by the student community of IIT Roorkee, all set within the exciting
            and immersive world of Minecraft. Organized by the Outreach Cell of IIT Roorkee, this
            year marks the <span className="font-bold">fifth edition</span> of GambitoR, promising
            an adventurous experience that encourages participants to think creatively, overcome
            challenges, and showcase their true potential. Get ready to embark on this exciting
            journey and discover what you&apos;re truly capable of!{" "}
          </p>
          <div className="flex justify-center lg:justify-start">
            <a href="https://unstop.com/o/vyXIDa1?lb=useMQmX7&utm_medium=Share&utm_source=quizzes&utm_campaign=Outregam75554" target="_blank" rel="noreferrer">
              <Animations>
                <button className="mt-4 transition ease-out duration-300 bg-[#C9A454] border-4 border-[#C37227] rounded-full xl:w-[261px] w-[20vw] min-w-[180px] text-[20px] leading-[25px] text-[#A50034] font-bold h-[60px] cursor-pointer hover:bg-[#C49B44] hover:border-[#BC6E26] hover:shadow-[-1px_1px_4px_5px_rgba(188,110,38,0.30)] active:bg-[#B28B38] active:shadow-[-1px_1px_4px_5px_rgba(188,110,38,0.30)] active:border-[#AA6322] font-dragon tracking-wider">
                  REGISTER NOW !
                </button>
              </Animations>
            </a>
          </div>
        </div>
          <div className="pl-0 lg:pl-[3vw] xl:pl-[6vw] flex relative order-1 flex-col items-center lg:w-[50%] top-[2rem] justify-center">
          {/*<div className="grid grid-cols-2 gap-6 w-full">*/}
          {/*    /!* Registrations *!/*/}
          {/*    <div className="flex flex-col items-start">*/}
          {/*        <p className="text-[#FFB800] text-sm font-overpass font-medium mb-2">Registrations</p>*/}
          {/*        <h3 className="text-[28px] lg:text-[36px] font-dragon font-bold text-white">40000+</h3>*/}
          {/*    </div>*/}
          {/*    */}
          {/*    /!* Cities *!/*/}
          {/*    <div className="flex flex-col items-end">*/}
          {/*        <p className="text-[#FFB800] text-sm font-overpass font-medium mb-2">CITIES</p>*/}
          {/*        <h3 className="text-[28px] lg:text-[36px] font-dragon font-bold text-white">200+</h3>*/}
          {/*    </div>*/}
          {/*    */}
          {/*    /!* Pool Prize *!/*/}
          {/*    <div className="flex flex-col items-start">*/}
          {/*        <p className="text-[#FFB800] text-sm font-overpass font-medium mb-2">POOL PRIZE</p>*/}
          {/*        <h3 className="text-[28px] lg:text-[36px] font-dragon font-bold text-white">100000</h3>*/}
          {/*    </div>*/}
          {/*    */}
          {/*    /!* Trip to IIT R *!/*/}
          {/*    <div className="flex flex-col items-end">*/}
          {/*        <p className="text-[#FFB800] text-sm font-overpass font-medium mb-2">TRIP TO IIT R</p>*/}
          {/*        <h3 className="text-[28px] lg:text-[36px] font-dragon font-bold text-white">3 DAYS</h3>*/}
          {/*    </div>*/}
          {/*</div>*/}

          <div className="mt-12 w-full">
            <Image
              alt="Gambitor showcase"
              className="w-full h-auto"
              loading="eager"
              width={500}
              height={330}
              src="/aboutimg.svg"
            ></Image>
          </div>
        </div>
      </section>
    );
}