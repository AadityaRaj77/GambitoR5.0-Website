import React, { useState, useEffect } from "react";

const slides = [
  { src: "/t1.svg" },
  { src: "/t2.svg" },
  { src: "/t3.svg" },
  { src: "/t4.svg" },
  { src: "/t5.svg" },
];

const HomePageCarousel: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const len = slides.length;

  const prev = () => setCurrent((c) => (c === 0 ? len - 1 : c - 1));
  const next = () => setCurrent((c) => (c === len - 1 ? 0 : c + 1));

  useEffect(() => {
    const iv = setInterval(next, 5000);
    return () => clearInterval(iv);
  }, [current]);

  const getOffset = (idx: number): number => {
    return (idx - current + len) % len;
  };

  return (
    <div
      id="TESTIMONIAL"
      className="relative z-[2] flex flex-col items-center justify-items-center py-[5vw] mt-[8rem] overflow-hidden space-y-12"
    >
      <h1 className="text-[72px] sm:text-[72px] font-normal font-dragon bg-gradient-to-b from-white to-[#999999] bg-clip-text text-transparent">
        ALUMNI INITIATIVE
      </h1>

      <div className="relative w-[90vw] max-w-6xl h-[380px] sm:mt-8">
        {slides.map((slide, idx) => {
          const offset = getOffset(idx);
          let translate = "";
          let scale = "";
          let opacity = "";
          let zIndex = "";

          if (offset === 0) {
            translate = "translate-x-0";
            scale = "scale-100";
            opacity = "opacity-100";
            zIndex = "z-30";
          } else if (offset === 1) {
            translate = "";
            scale = "scale-90";
            opacity = "opacity-60";
            zIndex = "z-20";
          } else if (offset === 2) {
            translate = "";
            scale = "scale-75";
            opacity = "opacity-30";
            zIndex = "z-10";
          } else if (offset === 3) {
            translate = "";
            scale = "scale-75";
            opacity = "opacity-30";
            zIndex = "z-10";
          } else if (offset === 4) {
            translate = "";
            scale = "scale-90";
            opacity = "opacity-60";
            zIndex = "z-20";
          }

          return (
            <div key={slide.src ?? idx} className="justify-items-center items-center">
              <img
                src={slide.src}
                alt={`Testimonial ${idx + 1}`}
              style={{
                position: 'absolute',
                top: 0,
                left: '50%',
                width: '320px',
                height: '360px',
                objectFit: 'contain',
                borderRadius: '0.75rem',
                transform: `translateX(-50%) ${
                  offset === 1 ? 'translateX(10vw) scale(0.9)' :
                  offset === 2 ? 'translateX(20vw) scale(0.75)' :
                  offset === 3 ? 'translateX(-20vw) scale(0.75)' :
                  offset === 4 ? 'translateX(-10vw) scale(0.9)' :
                  'scale(1)'
                }`,
                opacity: offset === 0 ? 1 : offset === 1 || offset === 4 ? 0.6 : 0.3,
                zIndex: offset === 0 ? 30 : offset === 1 || offset === 4 ? 20 : 10,
                transition: 'all 700ms ease-in-out',
              }}
              />
            </div>
          );
        })}

        {/*<button
          onClick={prev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-75 z-50"
        >
          &#10094;
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-75 z-50"
        >
          &#10095;
        </button>*/}
      </div>
    </div>
  );
};

export default HomePageCarousel;
