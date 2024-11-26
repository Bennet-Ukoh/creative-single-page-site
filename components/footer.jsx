import redCurl from "../public/images/red curl.png";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white sm:my-24 mt-64 sm:mt-28  relative">
      <Image
        src={redCurl}
        alt="footer logo"
        className="absolute hidden lg:block top-8 -left-20 sm:hidden"
      />
      <div className="flex sm:flex-row flex-col sm:items-center items-start lg:gap-x-28 sm:gap-x-20 justify-center sm:mb-0 mb-20 sm:pl-0 pl-16">
        <p className="lg:text-5xl font-extrabold lg:w-[635px] lg:leading-[55px] sm:w-[398px] sm:text-3xl text-2xl sm:my-0 my-10 w-[327px] ">
          Let&apos;s build something great together.
        </p>
        <button className="bg-red px-6 py-3 text-white font-extrabold hover:bg-hoverBg">
          Schedule a call
        </button>
      </div>
    </footer>
  );
}
