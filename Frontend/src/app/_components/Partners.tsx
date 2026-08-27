import React from "react";

const partners = [
  {
    name: "School2Startup",
    logo: "/partners/s2spartner.svg",
    url: "https://school2startup.co.in",
  },
  // Add more partners here when needed:
  // { name: "Partner Name", logo: "/partners/partner2.svg", url: "https://partner2.com" },
];

const Partners: React.FC = () => {
  if (partners.length === 0) return null;

  return (
    <div
      id="PARTNERS"
      className="relative z-[2] flex flex-col items-center py-12 mt-4 px-6"
    >
      {/* Section Heading */}
      <h1 className="text-[clamp(36px,8vw,72px)] font-normal font-dragon bg-gradient-to-b from-white to-[#999999] bg-clip-text text-transparent mb-10">
        OUR PARTNERS
      </h1>

      {/* Partner Cards - centered, wraps automatically when more are added */}
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 max-w-5xl w-full">
        {partners.map((partner, idx) => (
          <a
            key={idx}
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
            title={partner.name}
            className="group transition-all duration-300 hover:scale-105"
            style={{
              /* Exact Figma outer card specs */
              display: "flex",
              width: "346px",
              padding: "37px 12px 0 12px",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: "13px",
              borderRadius: "10px",
              background: "linear-gradient(0deg, rgba(255,255,255,0.30) 0%, rgba(255,255,255,0.30) 100%)",
              textDecoration: "none",
            }}
          >
            {/* Inner black logo box — exact Figma specs: 286×311, border-radius 10, bg #010001 */}
            <div
              style={{
                width: "286px",
                height: "311px",
                borderRadius: "10px",
                background: "#010001",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
              }}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                style={{
                  width: "260px",
                  height: "auto",
                  maxHeight: "290px",
                  objectFit: "contain",
                }}
              />
            </div>

            {/* Partner name — exact Figma specs */}
            <span
              style={{
                width: "322px",
                height: "57px",
                color: "#010001",
                textAlign: "center",
                fontFamily: "'Lekton', sans-serif",
                fontSize: "40px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "normal",
                letterSpacing: "1.2px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                paddingBottom: "13px",
              }}
            >
              {partner.name}
            </span>
          </a>
        ))}
      </div>

      {/* Divider */}
      <div className="mt-12 w-[80%] max-w-2xl h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent" />
    </div>
  );
};

export default Partners;
