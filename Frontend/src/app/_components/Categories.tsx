"use client";
import Image from 'next/image'
import Animations from './assets/AnimatedButton'
//import './Res.css'
//import Navbar from './NavBar1'
//import CatDiv from "./CatDiv";

export default function Categories() {
    return (
        <div className="text-white relative z-10 flex flex-col py-10 space-y-20 max-w-[1380px] mx-auto" id="CATEGORIES">
            <div className="mb-12 text-center space-y-12">
                <h1 className="text-[48px] sm:text-[48px] leading-[36px] sm:leading-[45px] my-2 font-normal font-dragon text-2xl bg-gradient-to-b from-[#5A3E17] via-[#FFF5B6] to-[#D4AF37] bg-clip-text text-transparent">
                    Categories
                </h1>

               
                <div className="relative px-4 sm:px-12 md:px-24 lg:px-32 h-[720px] md:h-[700px]" style={{ ['--r' as any]: 'min(20vw,280px)', ['--box-w' as any]: '241.33px', ['--box-h' as any]: '202.35px' }}>

                    {/* central decorative asset */}
                  <div 
                   className="absolute left-1/2 transform -translate-x-1/2 pointer-events-none z-10 top-1/2 -translate-y-1/2">
                         <Image
                            src="/categories.svg"
                            alt="Badge"
                            loading="eager"
                            width={320}
                            height={320} />
                   </div>

                   {/* Position boxes at pentagon vertices using CSS calc with --r */}

                   {/* Vertex 0 - Top (Class VIII) */}
                   <div className="hidden md:block absolute z-20 transform -translate-x-1/2 -translate-y-1/2" style={{ left: 'calc(50% + 0 * var(--r))', top: 'calc(50% - 1 * var(--r))' }}>
                    <Animations hoverEffect={{scale:1.02}} tapEffect={{scale:1.02}}>
                      <div className="border-4 border-[#F3E193] rounded-3xl bg-no-repeat bg-center flex items-center justify-center" style={{ width: 'var(--box-w)', height: 'var(--box-h)', backgroundColor: '#4B0B5A', backgroundImage: "url('/VIII.svg')", backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>
                        <div className="text-center">
                            <h2 className="mb-1 text-sm md:text-base font-dragon font-semibold">CLASS VIII</h2>
                            <h3 className="text-lg md:text-2xl font-dragon font-semibold">ASTROX</h3>
                        </div>
                      </div>
                    </Animations>
                   </div>

                   {/* Vertex 1 - Upper-right (Class IX) */}
                   <div className="hidden md:block absolute z-20 transform -translate-x-1/2 -translate-y-1/2" style={{ left: 'calc(50% + 0.95106 * var(--r))', top: 'calc(50% - 0.30902 * var(--r))' }}>
                    <Animations hoverEffect={{scale:1.02}} tapEffect={{scale:1.02}}>
                      <div className="border-4 border-[#F3E193] rounded-3xl bg-no-repeat bg-center flex items-center justify-center" style={{ width: 'var(--box-w)', height: 'var(--box-h)', backgroundColor: '#701100', backgroundImage: "url('/IXsvg.svg')", backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>
                        <div className="text-center">
                            <h2 className="mb-1 text-sm md:text-base font-dragon font-semibold">CLASS IX</h2>
                            <h3 className="text-lg md:text-2xl font-dragon font-semibold">ARETEOX</h3>
                        </div>
                      </div>
                    </Animations>
                   </div>

                   {/* Vertex 2 - Lower-right (Class X) */}
                   <div className="hidden md:block absolute z-20 transform -translate-x-1/2 -translate-y-1/2" style={{ left: 'calc(50% + 0.58779 * var(--r))', top: 'calc(50% + 0.80902 * var(--r))' }}>
                    <Animations hoverEffect={{scale:1.02}} tapEffect={{scale:1.02}}>
                      <div className="border-4 border-[#F3E193] rounded-3xl bg-no-repeat bg-center flex items-center justify-center" style={{ width: 'var(--box-w)', height: 'var(--box-h)', backgroundColor: '#3D8B57', backgroundImage: "url('/X.svg')", backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>
                        <div className="text-center">
                            <h2 className="mb-1 text-sm md:text-base font-dragon font-semibold">CLASS X</h2>
                            <h3 className="text-lg md:text-2xl font-dragon font-semibold">METIOX</h3>
                        </div>
                      </div>
                    </Animations>
                   </div>

                   {/* Vertex 3 - Lower-left (Class XI) */}
                   <div className="hidden md:block absolute z-20 transform -translate-x-1/2 -translate-y-1/2" style={{ left: 'calc(50% - 0.58779 * var(--r))', top: 'calc(50% + 0.80902 * var(--r))' }}>
                    <Animations hoverEffect={{scale:1.02}} tapEffect={{scale:1.02}}>
                      <div className="border-4 border-[#F3E193] rounded-3xl bg-no-repeat bg-center flex items-center justify-center" style={{ width: 'var(--box-w)', height: 'var(--box-h)', backgroundColor: '#FF7C04', backgroundImage: "url('/XI.svg')", backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>
                        <div className="text-center">
                            <h2 className="mb-1 text-sm md:text-base font-dragon font-semibold">CLASS XI</h2>
                            <h3 className="text-lg md:text-2xl font-dragon font-semibold">APOLLOX</h3>
                        </div>
                      </div>
                    </Animations>
                   </div>

                   {/* Vertex 4 - Upper-left (Class XII) */}
                   <div className="hidden md:block absolute z-20 transform -translate-x-1/2 -translate-y-1/2" style={{ left: 'calc(50% - 0.95106 * var(--r))', top: 'calc(50% - 0.30902 * var(--r))' }}>
                    <Animations hoverEffect={{scale:1.02}} tapEffect={{scale:1.02}}>
                      <div className="border-4 border-[#F3E193] rounded-3xl bg-no-repeat bg-center flex items-center justify-center" style={{ width: 'var(--box-w)', height: 'var(--box-h)', backgroundColor: '#06345B', backgroundImage: "url('/XII.svg')", backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>
                        <div className="text-center">
                            <h2 className="mb-1 text-sm md:text-base font-dragon font-semibold">CLASS XII</h2>
                            <h3 className="text-lg md:text-2xl font-dragon font-semibold">ATHENOX</h3>
                        </div>
                      </div>
                    </Animations>
                   </div>

                   {/* Mobile / small screens: stacked grid */}
                   <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <Animations hoverEffect={{scale:1.025}} tapEffect={{scale:1.025}}>
                      <div className="border-4 border-[#F3E193] rounded-3xl bg-no-repeat bg-center mx-auto" style={{ width: 'var(--box-w)', height: 'var(--box-h)', backgroundColor: '#4B0B5A', backgroundImage: "url('/VIII.svg')", backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>
                        <div className="px-6 py-8 flex flex-col items-center justify-center h-full">
                            <h2 className="mb-2 text-xl font-dragon font-semibold">CLASS VIII</h2>
                            <h3 className="text-2xl font-dragon font-semibold">ASTROX</h3>
                        </div>
                      </div>
                    </Animations>

                    <Animations hoverEffect={{scale:1.025}} tapEffect={{scale:1.025}}>
                      <div className="border-4 border-[#F3E193] rounded-3xl bg-no-repeat bg-center mx-auto" style={{ width: 'var(--box-w)', height: 'var(--box-h)', backgroundColor: '#06345B', backgroundImage: "url('/XII.svg')", backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>}
                        <div className="px-6 py-8 flex flex-col items-center justify-center h-full">
                            <h2 className="mb-2 text-xl font-dragon font-semibold">CLASS XII</h2>
                            <h3 className="text-2xl font-dragon font-semibold">ATHENOX</h3>
                        </div>
                      </div>
                    </Animations>

                    <Animations hoverEffect={{scale:1.025}} tapEffect={{scale:1.025}}>
                      <div className="border-4 border-[#F3E193] rounded-3xl bg-no-repeat bg-center mx-auto" style={{ width: 'var(--box-w)', height: 'var(--box-h)', backgroundColor: '#701100', backgroundImage: "url('/IXsvg.svg')", backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>
                        <div className="px-6 py-8 flex flex-col items-center justify-center h-full">
                            <h2 className="mb-2 text-xl font-dragon font-semibold">CLASS IX</h2>
                            <h3 className="text-2xl font-dragon font-semibold">ARETEOX</h3>
                        </div>
                      </div>
                    </Animations>

                    <Animations hoverEffect={{scale:1.025}} tapEffect={{scale:1.025}}>
                      <div className="border-4 border-[#F3E193] rounded-3xl bg-no-repeat bg-center mx-auto" style={{ width: 'var(--box-w)', height: 'var(--box-h)', backgroundColor: '#FF7C04', backgroundImage: "url('/XI.svg')", backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>
                        <div className="px-6 py-8 flex flex-col items-center justify-center h-full">
                            <h2 className="mb-2 text-xl font-dragon font-semibold">CLASS XI</h2>
                            <h3 className="text-2xl font-dragon font-semibold">APOLLOX</h3>
                        </div>
                      </div>
                    </Animations>

                    <Animations hoverEffect={{scale:1.025}} tapEffect={{scale:1.025}}>
                      <div className="border-4 border-[#F3E193] rounded-3xl bg-no-repeat bg-center mx-auto" style={{ width: 'var(--box-w)', height: 'var(--box-h)', backgroundColor: '#3D8B57', backgroundImage: "url('/X.svg')", backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>
                        <div className="px-6 py-8 flex flex-col items-center justify-center h-full">
                            <h2 className="mb-2 text-xl font-dragon font-semibold">CLASS X</h2>
                            <h3 className="text-2xl font-dragon font-semibold">METIOX</h3>
                        </div>
                      </div>
                    </Animations>
                   </div>

                </div>
            </div>
        </div>
    );
}
