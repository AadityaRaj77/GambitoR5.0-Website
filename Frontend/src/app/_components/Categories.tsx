"use client";
import Image from "next/image";
import Animations from "./assets/AnimatedButton";

export default function Categories() {
  const boxStyle = (bg: string, img: string): React.CSSProperties => ({
    backgroundColor: bg,
    backgroundImage: `url('${img}')`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  });

  // Reusable vertex div — positions a category box at a given pentagon point
  const vertex = (
    leftExpr: string,
    topExpr: string,
    bg: string,
    img: string,
    label: string,
    name: string,
    fontSize: { label: string; name: string }
  ) => (
    <div
      className="absolute z-20 transform -translate-x-1/2 -translate-y-1/2"
      style={{ left: leftExpr, top: topExpr }}
    >
      <Animations hoverEffect={{ scale: 1.04 }} tapEffect={{ scale: 0.97 }}>
        <div
          className="border-4 border-[#F3E193] rounded-3xl flex items-center justify-center"
          style={{ width: "var(--bw)", height: "var(--bh)", ...boxStyle(bg, img) }}
        >
          <div className="text-center px-1">
            <h2 className="font-dragon font-semibold leading-tight" style={{ fontSize: fontSize.label }}>
              {label}
            </h2>
            <h3 className="font-dragon font-semibold leading-tight" style={{ fontSize: fontSize.name }}>
              {name}
            </h3>
          </div>
        </div>
      </Animations>
    </div>
  );

  const categories = [
    { label: "CLASS VIII", name: "ASTROX",  bg: "#4B0B5A", img: "/VIII.svg",    left: "calc(50%)",                        top: "calc(50% - var(--r))"               },
    { label: "CLASS IX",   name: "ARETEOX", bg: "#701100", img: "/IXsvg.svg",   left: "calc(50% + 0.95106 * var(--r))",   top: "calc(50% - 0.30902 * var(--r))"     },
    { label: "CLASS X",    name: "METIOX",  bg: "#3D8B57", img: "/X.svg",       left: "calc(50% + 0.58779 * var(--r))",   top: "calc(50% + 0.80902 * var(--r))"     },
    { label: "CLASS XI",   name: "APOLLOX", bg: "#FF7C04", img: "/XI.svg",      left: "calc(50% - 0.58779 * var(--r))",   top: "calc(50% + 0.80902 * var(--r))"     },
    { label: "CLASS XII",  name: "ATHENOX", bg: "#06345B", img: "/XII.svg",     left: "calc(50% - 0.95106 * var(--r))",   top: "calc(50% - 0.30902 * var(--r))"     },
  ];

  return (
    <div
      className="text-white relative z-10 flex flex-col py-10 space-y-20 max-w-[1380px] mx-auto"
      id="CATEGORIES"
    >
      <div className="mb-12 text-center space-y-12">
        <h1 className="text-[72px] sm:text-[72px] leading-[72px] sm:leading-[72px] my-2 font-normal font-dragon text-2xl bg-gradient-to-b from-white to-[#999999] bg-clip-text text-transparent">
          Categories
        </h1>

        {/* ══════════════════════════════════════════════════════
            MOBILE pentagon  (hidden on sm+)
            --r : min(35vw, 280px)   → at 390px phone = 136.5px
            --bw: min(30vw, 241px)   → at 390px phone = 117px
            --bh: min(25vw, 202px)   → at 390px phone = 97.5px
            Height is computed so the whole pentagon always fits.
        ══════════════════════════════════════════════════════ */}
        <div
          className="relative sm:hidden w-full"
          style={{
            ["--r"  as string]: "min(35vw, 280px)",
            ["--bw" as string]: "min(30vw, 241px)",
            ["--bh" as string]: "min(25vw, 202px)",
            height: "calc(1.82 * min(35vw, 280px) * 2 + min(25vw, 202px) + 24px)",
          } as React.CSSProperties}
        >
          {/* Central badge — min(30vw, 260px) so it's nicely sized on mobile */}
          <div
            className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 pointer-events-none z-10"
            style={{ width: "min(30vw, 260px)" }}
          >
            <Image src="/categories.svg" alt="Badge" loading="eager" width={420} height={420} className="w-full h-auto" />
          </div>

          {categories.map((c) =>
            vertex(c.left, c.top, c.bg, c.img, c.label, c.name, {
              label: "min(3.5vw, 1rem)",
              name:  "min(5.5vw, 1.5rem)",
            })
          )}
        </div>

        {/* ══════════════════════════════════════════════════════
            DESKTOP pentagon  (hidden below sm)
            --r : clamp(120px, 22vw, 280px)
            --bw: clamp(160px, 22vw, 241px)
            --bh: clamp(134px, 18vw, 202px)
        ══════════════════════════════════════════════════════ */}
        <div
          className="relative hidden sm:block px-12 md:px-24 lg:px-32 h-[560px] md:h-[700px]"
          style={{
            ["--r"  as string]: "clamp(120px, 22vw, 280px)",
            ["--bw" as string]: "clamp(160px, 22vw, 241px)",
            ["--bh" as string]: "clamp(134px, 18vw, 202px)",
          } as React.CSSProperties}
        >
          {/* Central badge — bigger on desktop */}
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 pointer-events-none z-10 w-[clamp(200px,22vw,320px)]">
            <Image src="/categories.svg" alt="Badge" loading="eager" width={420} height={420} className="w-full h-auto" />
          </div>

          {categories.map((c) =>
            vertex(c.left, c.top, c.bg, c.img, c.label, c.name, {
              label: "clamp(0.6rem, 1.2vw, 1rem)",
              name:  "clamp(0.9rem, 1.8vw, 1.5rem)",
            })
          )}
        </div>
      </div>
    </div>
  );
}
