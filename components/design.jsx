import Image from "next/image";
import DesignImage from "@/public/images/desktop-pic-2.jpg";
import RedCurl from "@/public/images/red curl.png";
import mobileDesignImage from "@/public/images/mobile-pic-4.jpg";

export default function Design() {
  return (
    <section className="lg:mt-[700px] sm:mt-[600px] mt-[400px] relative">
      <Image
        src={mobileDesignImage}
        alt="Design Image"
        className="sm:hidden  mx-auto w-full"
      />
      <Image
        src={DesignImage}
        alt="Design Image"
        className="lg:w-[735px] lg:h-[984px] sm:w-[379px] sm:h-[658px] w-[357px] h-[200px] hidden sm:block"
      />
      <Image
        className="absolute sm:top-[25%] top-[93%] lg:left-[46%] sm:left-[45.5%] z-50 lg:w-[135px] lg:h-[61px] sm:w-[63px] sm:h-[29px] w-[63px] h-[29px] left-6"
        src={RedCurl}
        alt="redcurl"
      />
      <div className="bg-blackBg absolute top-[100%] lg:left-[51.05%] sm:left-[49.2%] lg:w-[705px] sm:w-[390px] lg:h-[784px] sm:h-[538px] sm:top-0 w-[375px] h-[377px]">
        <div className="lg:w-[410px] sm:w-[320px] sm:pl-10 pl-6 mx-auto mt-[72px] lg:mt-56 sm:mt-32 space-y-4">
          <h2 className="lg:text-h2 sm:text-4xl text-3xl text-white font-extrabold">
            <span className="text-red">Design</span> is strategic.
          </h2>
          <p className="text-white sm:text-regular text-sm lg:w-[400px] sm:w-[259px] w-[327px] py-6">
            “A well-crafted design strategy consistently produces desired
            outcomes and brand awareness. We are firm believers that success
            lies in creative collaboration with our clients.”
          </p>
          <button className="text-red border-b-2 border-red font-extrabold sm:text-[18px] text-[15px] hover:text-hoverBg hover:border-hoverBg">
            Shedule a call
          </button>
        </div>
      </div>
      <div className="bg-red lg:w-[895px] lg:h-[1100px] sm:w-[438px] sm:h-[797px] absolute lg:top-[782px] sm:top-[538px] top-[288%] w-[375px] h-[918px] lg:left-[37.9%] sm:left-[43%] lg:py-20 sm:py-10 py-20 pl-10">
        <h2 className="text-white font-extrabold block sm:hidden w-[327px] text-4xl absolute">
          Our approach for creating a winning brand
        </h2>
        <div className="text-white lg:w-[504px] sm:w-[355px] lg:h-[196px] sm:h-[159px]  relative mx-auto lg:mt-20 sm:mt-14 mt-44">
          <h1 className="sm:text-h1 text-6xl font-extrabold opacity-25">01</h1>
          <h3 className="text-xl sm:texth3 font-extrabold absolute sm:top-9 top-4 left-2 sm:left-14">
            Brand Strategy
          </h3>
          <p className="sm:text-lg pl-3 mt-4 lg:w-[544px] sm:w-[339px] w-[311px] text-sm ">
            Brand strategy is critical for long-term success. Outshining
            competitors and capturing the target audience are key.
          </p>
        </div>
        <div className="text-white lg:w-[504px] sm:w-[355px] lg:h-[196px] sm:h-[159px]  relative mx-auto lg:mt-20 sm:mt-14 mt-16">
          <h1 className="sm:text-h1 text-6xl font-extrabold opacity-25">02</h1>
          <h3 className="text-xl sm:texth3 font-extrabold absolute sm:top-9 top-4 left-2 sm:left-14">
            Brand Design
          </h3>
          <p className="sm:text-lg pl-3 mt-4 lg:w-[544px] sm:w-[339px] w-[311px] text-sm ">
            Keeping the brand design unique and meaningful helps in
            communicating the brand’s timeless value effectively.
          </p>
        </div>
        <div className="text-white lg:w-[504px] sm:w-[355px] lg:h-[196px] sm:h-[159px]  relative mx-auto lg:mt-20 sm:mt-14 mt-16">
          <h1 className="sm:text-h1 text-6xl font-extrabold opacity-25">03</h1>
          <h3 className="text-xl sm:texth3 font-extrabold absolute sm:top-9 top-4 left-2 sm:left-14">
            Web Design
          </h3>
          <p className="sm:text-lg pl-3 mt-4 lg:w-[544px] sm:w-[339px] w-[311px] text-sm ">
            A beautifully crafted website is the best tool for brand awareness,
            and ultimately results in increased revenues.
          </p>
        </div>
      </div>

      <h2 className="lg:w-[540px] sm:w-[281px] sm:h-[120px] lg:h-[192px] lg:text-5xl sm:text-3xl text-black font-extrabold sm:block hidden sm:mt-52 lg:ml-40 sm:ml-10 absolute">
        Our approach for creating a winning brand
      </h2>
    </section>
  );
}
