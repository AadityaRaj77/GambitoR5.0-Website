"use client";
import Image from "next/image";
import Animations from "./assets/AnimatedButton";

export default function Categories() {
  return (
    <div
      className="text-white relative z-10 flex flex-col py-10 w-full"
      id="CATEGORIES"
    >
      <div className="text-center mb-4">
        <h1 className="text-[48px] leading-[48px] my-2 font-normal font-dragon bg-gradient-to-b from-white to-[#999999] bg-clip-text text-transparent">
          Categories
        </h1>
      </div>

      <div
        className="relative w-full"
        style={{
          height: "min(92vw, 600px)",
          ["--r" as any]: "min(35vw, 280px)",
          ["--bw" as any]: "min(30vw, 241px)",
          ["--bh" as any]: "min(28vw, 202px)",
        }}
      >
        {/* ── Central badge ── */}
        <div
          className="absolute pointer-events-none z-10"
          style={{
            left: "50%",
            top: "50%",
            transform: "translate(-50%,-50%)",
            width: "min(50vw, 280px)",
          }}
        >
          <Image
            src="/categories.svg"
            alt="Badge"
            loading="eager"
            width={420}
            height={420}
            className="w-full h-auto"
          />
        </div>

        {/* ── Vertex 0 · Top · CLASS VIII / ASTROX ── */}
        <div
          className="absolute z-20 transform -translate-x-1/2 -translate-y-1/2"
          style={{ left: "50%", top: "calc(50% - var(--r))" }}
        >
          <Animations hoverEffect={{ scale: 1.02 }} tapEffect={{ scale: 1.02 }}>
            <div
              className="border-4 border-[#F3E193] rounded-3xl bg-no-repeat bg-center flex items-center justify-center"
              style={{
                width: "var(--bw)",
                height: "var(--bh)",
                backgroundColor: "#4B0B5A",
                backgroundImage: "url('/VIII.svg')",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="text-center">
                <h2 className="mb-1 text-[clamp(0.55rem,3.5vw,0.9rem)] font-dragon font-semibold">CLASS VIII</h2>
                <h3 className="text-[clamp(0.7rem,4.5vw,1.1rem)] font-dragon font-semibold">ASTROX</h3>
              </div>
            </div>
          </Animations>
        </div>

        {/* ── Vertex 1 · Upper-right · CLASS IX / ARETEOX ── */}
        <div
          className="absolute z-20 transform -translate-x-1/2 -translate-y-1/2"
          style={{
            left: "calc(50% + 0.95106 * var(--r))",
            top: "calc(50% - 0.30902 * var(--r))",
          }}
        >
          <Animations hoverEffect={{ scale: 1.02 }} tapEffect={{ scale: 1.02 }}>
            <div
              className="border-4 border-[#F3E193] rounded-3xl bg-no-repeat bg-center flex items-center justify-center"
              style={{
                width: "var(--bw)",
                height: "var(--bh)",
                backgroundColor: "#701100",
                backgroundImage: "url('/IXsvg.svg')",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="text-center">
                <h2 className="mb-1 text-[clamp(0.55rem,3.5vw,0.9rem)] font-dragon font-semibold">CLASS IX</h2>
                <h3 className="text-[clamp(0.7rem,4.5vw,1.1rem)] font-dragon font-semibold">ARETEOX</h3>
              </div>
            </div>
          </Animations>
        </div>

        {/* ── Vertex 2 · Lower-right · CLASS X / METIOX ── */}
        <div
          className="absolute z-20 transform -translate-x-1/2 -translate-y-1/2"
          style={{
            left: "calc(50% + 0.58779 * var(--r))",
            top: "calc(50% + 0.80902 * var(--r))",
          }}
        >
          <Animations hoverEffect={{ scale: 1.02 }} tapEffect={{ scale: 1.02 }}>
            <div
              className="border-4 border-[#F3E193] rounded-3xl bg-no-repeat bg-center flex items-center justify-center"
              style={{
                width: "var(--bw)",
                height: "var(--bh)",
                backgroundColor: "#3D8B57",
                backgroundImage: "url('/X.svg')",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="text-center">
                <h2 className="mb-1 text-[clamp(0.55rem,3.5vw,0.9rem)] font-dragon font-semibold">CLASS X</h2>
                <h3 className="text-[clamp(0.7rem,4.5vw,1.1rem)] font-dragon font-semibold">METIOX</h3>
              </div>
            </div>
          </Animations>
        </div>

        {/* ── Vertex 3 · Lower-left · CLASS XI / APOLLOX ── */}
        <div
          className="absolute z-20 transform -translate-x-1/2 -translate-y-1/2"
          style={{
            left: "calc(50% - 0.58779 * var(--r))",
            top: "calc(50% + 0.80902 * var(--r))",
          }}
        >
          <Animations hoverEffect={{ scale: 1.02 }} tapEffect={{ scale: 1.02 }}>
            <div
              className="border-4 border-[#F3E193] rounded-3xl bg-no-repeat bg-center flex items-center justify-center"
              style={{
                width: "var(--bw)",
                height: "var(--bh)",
                backgroundColor: "#FF7C04",
                backgroundImage: "url('/XI.svg')",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="text-center">
                <h2 className="mb-1 text-[clamp(0.55rem,3.5vw,0.9rem)] font-dragon font-semibold">CLASS XI</h2>
                <h3 className="text-[clamp(0.7rem,4.5vw,1.1rem)] font-dragon font-semibold">APOLLOX</h3>
              </div>
            </div>
          </Animations>
        </div>

        {/* ── Vertex 4 · Upper-left · CLASS XII / ATHENOX ── */}
        <div
          className="absolute z-20 transform -translate-x-1/2 -translate-y-1/2"
          style={{
            left: "calc(50% - 0.95106 * var(--r))",
            top: "calc(50% - 0.30902 * var(--r))",
          }}
        >
          <Animations hoverEffect={{ scale: 1.02 }} tapEffect={{ scale: 1.02 }}>
            <div
              className="border-4 border-[#F3E193] rounded-3xl bg-no-repeat bg-center flex items-center justify-center"
              style={{
                width: "var(--bw)",
                height: "var(--bh)",
                backgroundColor: "#06345B",
                backgroundImage: "url('/XII.svg')",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="text-center">
                <h2 className="mb-1 text-[clamp(0.55rem,3.5vw,0.9rem)] font-dragon font-semibold">CLASS XII</h2>
                <h3 className="text-[clamp(0.7rem,4.5vw,1.1rem)] font-dragon font-semibold">ATHENOX</h3>
              </div>
            </div>
          </Animations>
        </div>
      </div>
    </div>
  );
}
