import Image from "next/image";
import heroImage from "@/public/images/desktop-pic-1.jpg";
import mobileHeroImage from "@/public/images/mobile-hero-pic.png";

export default function HeroSection() {
  return (
    <section className="flex md:flex-row flex-col w-full lg:pl-44 md:pl-10">
      <Image
        src={mobileHeroImage}
        alt="mobile hero image"
        className="md:hidden block object-cover w-full "
      />
      <div className="relative">
        <h1 className=" lg:text-6xl md:text-4xl text-2xl md:w-[90%] font-extrabold pt-6 md:pt-20">
          Branding & website design agency
        </h1>
        <p className="lg:text-lg md:text-base font-normal lg:w-[33rem] lg:mb-10 lg:my-10 md:my-6 md:mb-12 mb-8 md:w-[27rems] w-80">
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
        className="md:w-[65%] lg:h-[37rem] md:h-[35rem] hidden md:block"
      />
    </section>
  );
}
