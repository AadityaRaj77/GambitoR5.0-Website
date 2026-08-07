interface ButtongpProps {
  text: string;
}

export default function Buttongp({text}: ButtongpProps) {
  return (
    <a href={`#${text.toUpperCase()}`} className="w-full flex justify-center">
      <button className="transition ease-out duration-300 font-overpass font-medium border-2 w-full max-w-[300px] text-[18px] border-[#FFE016] rounded-full text-[#FAF4BE] h-[56px] hover:bg-[#A96104] active:bg-[#A96104] p-2">
        {text.replace(/'/g, '&apos;')}
      </button>
    </a>
  );
}
