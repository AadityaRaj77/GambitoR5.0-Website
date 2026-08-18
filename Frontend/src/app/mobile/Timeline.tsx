import Image from "next/image";

export default function Timeline() {
  return (
    <div
      className="flex items-center justify-center flex-col py-8 relative z-[1]"
      id="TIMELINE"
    >
      <Image
        src="/timeline.webp"
        width={894}
        height={2042}
        className="w-full h-auto px-2"
        alt="Timeline"
      />
    </div>
  );
}