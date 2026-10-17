import React from "react";

const partners = [
  {
    name: "Neerja Modi School",
    tagline: "as our Exclusive School Partner",
    logo: "/partners/neerja-modi-school.png",
    url: "https://www.nmsindia.org",
  },
  {
    name: "Competishun",
    tagline: "as our Digital Outreach Partner",
    logo: "/partners/competishun.png",
    url: "https://competishun.com",
  },
  {
    name: "School2Startup",
    tagline: "",
    logo: "/partners/school2startup.png",
    url: "https://school2startup.co.in",
  },
];

const Partners: React.FC = () => {
  if (partners.length === 0) return null;

  return (
    <div
      id="PARTNERS"
      className="relative z-[2] mt-4 flex flex-col items-center px-6 py-12"
    >
      <h1 className="mb-10 bg-gradient-to-b from-white to-[#999999] bg-clip-text text-[clamp(36px,8vw,72px)] font-normal text-transparent font-dragon">
        OUR PARTNERS
      </h1>

      <div className="grid w-full max-w-5xl grid-cols-1 items-stretch justify-items-center gap-8 md:grid-cols-3 md:gap-6">
        {partners.map((partner) => (
          <a
            key={partner.name}
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
            title={partner.name}
            className="group flex w-full max-w-[346px] flex-col items-center rounded-[10px] bg-white/50 p-3 transition-transform duration-300 hover:scale-[1.02]"
          >
            <div className="flex h-[220px] w-full items-center justify-center overflow-hidden p-3">
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="h-full w-full object-contain"
              />
            </div>

            <span className="mt-4 text-center font-[Lekton,sans-serif] text-2xl font-bold tracking-wide text-[#010001] md:text-3xl">
              {partner.name}
            </span>
            {partner.tagline && (
              <span className="mt-1 min-h-12 text-center font-[Lekton,sans-serif] text-base text-[#010001] md:text-lg">
                {partner.tagline}
              </span>
            )}
          </a>
        ))}
      </div>

      <div className="mt-12 h-px w-[80%] max-w-2xl bg-gradient-to-r from-transparent via-gray-600 to-transparent" />
    </div>
  );
};

export default Partners;
