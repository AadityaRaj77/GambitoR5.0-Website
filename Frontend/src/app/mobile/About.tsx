"use client";
import Animations from './assets/AnimatedButton';
import Navbar from './NavBar'

export default function Res() {
    return (
        <div className="w-full flex flex-col justify-items-center items-center space-y-16 mb-20">
           
            <div className="mt-8 w-full px-6 text-center">
                <h1 className="text-[36px] text-center mb-4 my-2 font-normal font-dragon bg-gradient-to-b from-white to-[#999999] bg-clip-text text-transparent">ABOUT GAMBITOR</h1>
                <p className="text-[15px] leading-[24px] font-overpass font-medium mb-8 text-[#FAF4BE] text-center">
                    GambitoR is a prestigious national-level exam tailored specifically for students from classes 9th to 12th who strive for excellence and have a passion for tackling and conquering challenges. This unique competition evaluates students' logical and analytical skills through questions designed by our student community, all within the exciting and adventurous theme of Harry Potter. Organized by the Outreach Cell of IIT Roorkee, this year marks the fourth edition of GambitoR, promising to bring out the best in each participant. Get ready to sail on this adventure and discover what you're truly capable of!
                </p>
            </div>

            <div className="flex justify-center items-center w-full ">
                <a href="https://unstop.com/o/vyXIDa1?lb=useMQmX7&utm_medium=Share&utm_source=quizzes&utm_campaign=Outregam75554" target="_blank" rel="noreferrer">
                <Animations>
                    <button className="mt-4 transition ease-out duration-300 bg-[#C9A454] border-4 border-[#C37227] rounded-full xl:w-[261px] w-full text-[20px] leading-[25px] text-[#A50034] font-bold h-[60px] cursor-pointer hover:bg-[#C49B44] hover:border-[#BC6E26] hover:shadow-[-1px_1px_4px_5px_rgba(188,110,38,0.30)] active:bg-[#B28B38] active:shadow-[-1px_1px_4px_5px_rgba(188,110,38,0.30)] active:border-[#AA6322] font-dragon tracking-wider p-4	">REGISTER NOW !</button>
                </Animations>
                
                </a>

            </div>
        </div>
    );
}
