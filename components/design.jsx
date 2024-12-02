import Image from "next/image";
import DesignImage from "@/public/images/desktop-pic-2.jpg";
import RedCurl from "@/public/images/red curl.png";
import mobileDesignImage from "@/public/images/mobile-pic-4.jpg";

export default function Design() {
  return (
    <section className="flex justify-center">
      <Image
        src={mobileDesignImage}
        alt="Design Image"
        className="sm:hidden  mx-auto w-full"
      />
      <Image
        src={DesignImage}
        alt="Design Image"
        className=" lg:h-[55rem] md:w-[50%] md:h-[43rem] hidden md:block"
      />

      <div className="relative bg-blackBg  md:w-[50%] lg:h-[42rem] md:h-[36rem] w-[375px] h-[377px]">
        <Image
          className="absolute lg:top-52 md:top-40 top-[93%] lg:-left-16 md:-left-5 z-50 lg:w-32 lg:h-14 md:w-12 md:h-7 w-16 h-7 left-6"
          src={RedCurl}
          alt="redcurl"
        />
        <div className="md:w-[90%] lg:pl-20 md:pl-10 pl-6 mx-auto mt-16 lg:mt-40 md:mt-32 space-y-4">
          <h2 className="lg:text-7xl md:text-5xl text-4xl text-white font-extrabold">
            <span className="text-red">Design</span> is strategic.
          </h2>
          <p className="text-white lg:text-lg md:text-base text-sm md:w-[90%] w-[327px] py-6">
            “A well-crafted design strategy consistently produces desired
            outcomes and brand awareness. We are firm believers that success
            lies in creative collaboration with our clients.”
          </p>
          <button className="text-red border-b-2 border-red font-extrabold sm:text-[18px] text-[15px] hover:text-hoverBg hover:border-hoverBg">
            Shedule a call
          </button>
        </div>
      </div>
      <div className="bg-red lg:w-[60%] lg:h-[63rem] md:w-[30rem] sm:h-[50rem] absolute lg:top-[226%] md:top-[123.4%] top-[288%] w-[375px] h-[918px] md:right-0 lg:py-20 md:py-10 py-20 pl-10">
        <h2 className="text-white font-extrabold block md:hidden w-[327px] text-4xl absolute">
          Our approach for creating a winning brand
        </h2>
        <div className="text-white lg:w-[31.5rem] md:w-[23rem] relative mx-auto lg:mt-16 md:mt-14 mt-44">
          <h1 className="md:text-7xl text-6xl font-extrabold opacity-25">01</h1>
          <h3 className="text-xl md:text-2xl font-extrabold absolute md:top-6 top-4 left-2 md:left-6 lg:left-14">
            Brand Strategy
          </h3>
          <p className="md:text-lg lg:pl-14 md:pl-6 pl-3 mt-4 lg:w-[30rem] md:w-[24rem] w-[20rem] text-sm ">
            Brand strategy is critical for long-term success. Outshining
            competitors and capturing the target audience are key.
          </p>
        </div>
        <div className="text-white lg:w-[504px] sm:w-[355px] lg:h-[196px] sm:h-[159px]  relative mx-auto lg:mt-20 sm:mt-14 mt-16">
          <h1 className="md:text-7xl text-6xl font-extrabold opacity-25">02</h1>
          <h3 className="text-xl md:text-2xl font-extrabold absolute md:top-6 top-4 left-2 md:left-6 lg:left-14">
            Brand Design
          </h3>
          <p className="md:text-lg lg:pl-14 md:pl-6 pl-3 mt-4 lg:w-[30rem] md:w-[24rem] w-[20rem] text-sm ">
            Keeping the brand design unique and meaningful helps in
            communicating the brand’s timeless value effectively.
          </p>
        </div>
        <div className="text-white lg:w-[504px] sm:w-[355px] lg:h-[196px] sm:h-[159px]  relative mx-auto lg:mt-20 sm:mt-14 mt-16">
          <h1 className="md:text-7xl text-6xl font-extrabold opacity-25">03</h1>
          <h3 className="text-xl md:text-2xl font-extrabold absolute md:top-6 top-4 left-2 md:left-6 lg:left-14">
            Web Design
          </h3>
          <p className="md:text-lg lg:pl-14 md:pl-6 pl-3 mt-4 lg:w-[30rem] md:w-[24rem] w-[20rem] text-sm ">
            A beautifully crafted website is the best tool for brand awareness,
            and ultimately results in increased revenues.
          </p>
        </div>
      </div>
      <h2 className="lg:w-[34rem] md:w-[20rem] lg:text-6xl md:text-4xl text-black font-extrabold md:block hidden lg:top-[290%] md:left-0 md:top-[155%] lg:ml-40 md:ml-10 absolute">
        Our approach for creating a winning brand
      </h2>
    </section>
  );
}
