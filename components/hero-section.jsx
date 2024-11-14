import Image from "next/image";
import heroImage from "@/public/images/desktop-pic-1.jpg";
import mobileHeroImage from "@/public/images/mobile-hero-pic.png";

export default function HeroSection() {
  return (
    <section className="ss:flex flex-col w-full relative">
      <Image
        src={mobileHeroImage}
        alt="mobile hero image"
        className="ss:hidden object-cover"
      />
      <div className="absolute lg:top-8 ss:top-16 top-50  lg:w-[70%] lg:h-[528px] ss:w-[70%] ss:h-[398px] w-[327px] h-[244px] pt-6 z-10">
        <h1 className="lg:text-h1 ss:text-h2 text-2xl font-extrabold py-6 pt-6">
          Branding & website design and agency
        </h1>
        <p className="lg:text-body sm:text-regular text-regular lg:w-[540px] lg:h-[96px] lg:mb-4 lg:my-2 ss:my-6 ss:mb-12 mb-8 ss:w-[426px]">
          We specialize in visual storytelling by creating cohesive brand and
          website design solutions for small businesses, giving lasting
          impressions to audiences in a digital world.
        </p>
        <button className="bg-red text-white px-5 py-3">Learn more</button>
      </div>
      <Image
        src={heroImage}
        alt="hero Image"
        className="absolute right-0 lg:w-[55%] lg:h-[528px] ss:w-[58%] ss:h-[602px] hidden ss:block"
      />
    </section>
  );
}
