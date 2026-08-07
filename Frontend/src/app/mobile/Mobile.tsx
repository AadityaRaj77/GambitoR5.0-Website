"use client";

import About from "./About";
import Image from "next/image";
import Categories from "./Categories";
import Rounds from "./Rounds";
import Prize from "./Prize";
import Syllabus from "./Syllabus";
import PostAbout from "./PostAbout";
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
      className="overflow-x-hidden w-screen"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        backgroundColor: "#000",
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

      <ScrollFade>
        <Footer></Footer>
      </ScrollFade>
      <NavBar></NavBar>
    </div>
  );
};

export default Mobile;
