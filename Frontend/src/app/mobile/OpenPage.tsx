import Image from "next/image";
import harry from "./assets/aboutimg.svg";

const OpenPage = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center pt-[10vh] pb-28">
      <Image src={harry} alt="" className="max-h-[60vh] w-auto object-contain" />
    </div>
  );
};

export default OpenPage;
