import Image from "next/image";
import heroImage from "@/public/images/desktop-pic-1.jpg";
import mobileHeroImage from "@/public/images/mobile-hero-pic.png";

export default function HeroSection() {
  return (
    <section className="flex md:flex-row flex-col w-full items-center ">
      <Image
        src={mobileHeroImage}
        alt="mobile hero image"
        className="md:hidden block object-cover w-[100%] h-[200px]"
      />
      <div className="relative lg:pl-44 md:pl-10 pl-6">
        <h1 className=" lg:text-6xl md:text-4xl text-3xl md:w-[90%] w-[90%] font-extrabold pt-8 md:pt-12 ">
          Branding & website design agency
        </h1>
        <p className="lg:text-lg md:text-base text-[0.9305rem] font-normal lg:w-[33rem] lg:mb-10 lg:my-10 md:my-6 my-4  md:mb-12 mb-9 md:w-[27rems] w-[90%]">
          We specialize in visual storytelling by creating cohesive brand and
          website design solutions for small businesses, giving lasting
          impressions to audiences in a digital world.
        </p>
        <button className="bg-red text-white px-5 py-3  hover:bg-hoverBg font-normal">
          Learn more
        </button>
      </div>
      <Image
        src={heroImage}
        alt="hero Image"
        className="lg:w-[65%] md:w-[55%] lg:h-[37rem] md:h-[35rem] hidden md:block"
      />
    </section>
  );
}
