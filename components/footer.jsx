import redCurl from "../public/images/red curl.png";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white md:my-24 lg:mt-[115%] md:pb-16 md:mt-[150%]  mt-[390%] pb-0 relative">
      <Image
        src={redCurl}
        alt="footer logo"
        className="absolute hidden lg:block top-8 -left-20 sm:hidden"
      />
      <div className="flex md:flex-row flex-col md:items-center items-start lg:gap-x-28 md:gap-x-20 justify-center md:mb-0 mb-16 md:pl-0 pl-6 md:mt-0 mt-16">
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
