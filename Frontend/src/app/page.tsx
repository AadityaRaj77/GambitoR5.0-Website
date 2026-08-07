"use client";
import Image from "next/image";
import Header from "./_components/Header";
import AboutSection from "./_components/AboutSection";
import RoundDescription from "./_components/RoundDescription";
import NavButtons from "./_components/Navbuttons";
import Syllabus from "./_components/Syllabus";
import Prizes from "./_components/Prizes";
import Categories from "./_components/Categories";
import Footer from "./_components/Footer";
import Timeline from "./_components/Timeline";
import { useMediaQuery } from "react-responsive";
import Mobile from "./mobile/Mobile";
import Testimonials from "./_components/Testimonials";
import ScrollFade from "./_components/assets/ScrollFade";

export default function Home() {
    const isMobile = useMediaQuery({query: '(max-width: 900px)'})
    if (isMobile) return <Mobile />;
  return (
    <div>
      {isMobile ? (
        <Mobile />
      ) : (
        <div
          style={{
            backgroundImage: `url('/fullbg.svg')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top center',
          }}
        >
          <div className="">
            <ScrollFade>
              <Header />
            </ScrollFade>
            <ScrollFade>
              <AboutSection />
            </ScrollFade>
            <ScrollFade>
              <NavButtons />
            </ScrollFade>
            <ScrollFade>
              <RoundDescription />
            </ScrollFade>
            <ScrollFade>
               <Categories />
            </ScrollFade>
           <ScrollFade>
            <Syllabus />
           </ScrollFade>
            <ScrollFade>
              <Prizes />
            </ScrollFade>
            <ScrollFade>
              <Timeline />
            </ScrollFade>
            <ScrollFade>
              <Testimonials />
            </ScrollFade>
          </div>
          <ScrollFade>
            <Footer />
          </ScrollFade>
        </div>
      )}
    </div>
  );
}