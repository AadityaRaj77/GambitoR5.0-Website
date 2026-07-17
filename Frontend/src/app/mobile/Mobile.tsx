"use client";

import About from "./About";
import Image from "next/image";
import HomePageCarousel from "../_components/HomePageCarousel";
import Categories from "./Categories";
import Rounds from "./Rounds";
import Prize from "./Prize";
import Syllabus from "./Syllabus";
import PostAbout from "./PostAbout";
import bottomgp from "./assets/bottomgp.svg";
import Timeline from "./Timeline";
import Navbar from "./NavBar";

import Footer from "../_components/Footer";

import OpenPage from "./OpenPage";
import Testimonials from "../_components/Testimonials";
import bg from "./assets/fullbg.svg";
import ScrollFade from "./assets/ScrollFade";
import NavBar from "./NavBar";

const Mobile = () => {
  return (
    <div
      className="bg-no-repeat bg-top bg-[length:100%_auto] overflow-x-hidden w-screen"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "100% auto",
      }}
    >
      <ScrollFade>
        <OpenPage></OpenPage>
      </ScrollFade>

      <ScrollFade>
        <About></About>
      </ScrollFade>

      <ScrollFade>
        <PostAbout></PostAbout>
      </ScrollFade>

      <ScrollFade>
        {" "}
        <div id="Rounds">
          <Rounds></Rounds>
        </div>
      </ScrollFade>

      {/* <NavBar1></NavBar1> */}
      <ScrollFade>
        <Categories></Categories>
      </ScrollFade>
      <ScrollFade>
        <Syllabus></Syllabus>
      </ScrollFade>
      <ScrollFade>
        <Prize></Prize>
      </ScrollFade>
      <ScrollFade>
        <Timeline></Timeline>
      </ScrollFade>

      <ScrollFade>
        <Testimonials></Testimonials>
      </ScrollFade>

      <div className=" relative z-20">
        <ScrollFade>
          {" "}
          <HomePageCarousel></HomePageCarousel>
        </ScrollFade>
        <ScrollFade>
          <Footer></Footer>
        </ScrollFade>
      </div>
      <NavBar></NavBar>
    </div>
  );
};

export default Mobile;
