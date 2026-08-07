"use client";

interface content {
  text: string;
}

function NavButton({ text }: content) {
  return (
    <button
      id={`b${text}`}
      className="transition ease-out duration-300 font-overpass leading-[25px] font-medium border-2 border-[#FFE016] rounded-full text-[#FAF4BE] hover:bg-[#A96104] active:bg-[#A96104]
        /* responsive sizing */
        text-[clamp(12px,1.4vw,20px)]
        h-[clamp(44px,4.5vw,60px)]
        px-[clamp(8px,1.2vw,20px)]
        w-full"
    >
      {text}
    </button>
  );
}

export default function NavButtons() {
  const buttons = ['ROUNDS', 'CATEGORIES', 'PRIZES', 'SYLLABUS', 'DATE/VENUE', 'TESTIMONIAL'];

  return (
    <div className="pb-[4rem] pt-[15rem] z-[1] relative block max-w-[1380px] mx-auto px-4 lg:px-10">
      <ul
        className="flex flex-row justify-between gap-2"
        onClick={(event) => {
          const anchor = (event.target as HTMLElement).closest("a");
          const id = anchor?.getAttribute("href")?.replace("#", "");
          const element = document.getElementById(id || "");
          element?.scrollIntoView({ behavior: "smooth", block: "start" });
        }}
      >
        {buttons.map((text) => (
          <li key={text} className="flex-1 min-w-0">
            <a href={`#${text}`} className="block" onClick={(event) => { console.log(event.target) }}>
              <NavButton text={text} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}