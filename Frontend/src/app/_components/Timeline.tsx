import Image from "next/image";

export default function Timeline() {
  return (
    <div
      className="flex items-center justify-center flex-col mt-[5vw] relative z-1"
      id="DATE/VENUE"
    >
      <Image
        src="/timeline.webp"
        width={894}
        height={2042}
        className="w-full max-w-[900px] h-auto"
        alt="Timeline"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}