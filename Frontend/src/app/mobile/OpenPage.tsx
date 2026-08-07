import Image from "next/image";
import harry from "./assets/aboutimg.svg";

const OpenPage = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center pt-[10vh]">
      <Image src={harry} alt="" className="max-h-[60vh] w-auto object-contain" />
    </div>
  );
};

export default OpenPage;
