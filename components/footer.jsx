import redCurl from "../public/images/red curl.png";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white my-24 relative">
      <Image
        src={redCurl}
        alt="footer logo"
        className="absolute top-8 -left-20"
      />
      <div className="flex items-center gap-x-28 justify-center  ">
        <p className="text-5xl font-extrabold w-[635px] leading-[55px]">
          Let&apos;s build something great together.
        </p>
        <button className="bg-red px-6 py-3 text-white font-extrabold hover:bg-hoverBg">
          Schedule a call
        </button>
      </div>
    </footer>
  );
}
