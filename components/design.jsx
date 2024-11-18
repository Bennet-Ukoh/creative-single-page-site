import Image from "next/image";
import DesignImage from "@/public/images/desktop-pic-2.jpg";
import RedCurl from "@/public/images/red curl.png";

export default function Design() {
  return (
    <section className="mt-[700px] relative">
      <Image src={DesignImage} alt="Design Image" width={735} height={984} />
      <Image
        className="absolute top-[25%] left-[46%] z-50"
        src={RedCurl}
        alt="redcurl"
      />
      <div className="bg-blackBg absolute top-0 left-[51.05%] w-[705px] h-[784px] ">
        <div className="max-w-[410px] mx-auto mt-56 space-y-4">
          <h2 className="text-h2 text-white font-bold">
            <span className="text-red">Design</span> is strategic.
          </h2>
          <p className="text-white text-regular py-6">
            “A well-crafted design strategy consistently produces desired
            outcomes and brand awareness. We are firm believers that success
            lies in creative collaboration with our clients.”
          </p>
          <button className="text-red border-b-2 border-red font-extrabold text-[18px] hover:text-hoverBg hover:border-hoverBg">
            Shedule a call
          </button>
        </div>
      </div>
      <div className="bg-red w-[895px] h-[1100px] absolute top-[782px] left-[37.9%]">
        <div className="text-white w-[504px] h-[196px]  relative mx-auto mt-40">
          <h1 className="text-h1 font-extrabold opacity-25">01</h1>
          <h3 className="text-h3 font-extrabold absolute top-9 left-14">
            Brand Strategy
          </h3>
          <p className="text-lg pl-14 mt-4">
            Brand strategy is critical for long-term success. Outshining
            competitors and capturing the target audience are key.
          </p>
        </div>
        <div className="text-white w-[504px] h-[196px] relative mx-auto mt-20">
          <h1 className="text-h1 font-extrabold opacity-25">02</h1>
          <h3 className="text-h3 font-extrabold absolute top-9 left-14">
            Brand Design
          </h3>
          <p className="text-lg pl-14 mt-4">
            Keeping the brand design unique and meaningful helps in
            communicating the brand’s timeless value effectively.
          </p>
        </div>
        <div className="text-white w-[504px] h-[196px] relative mx-auto mt-20">
          <h1 className="text-h1 font-extrabold opacity-25">03</h1>
          <h3 className="text-h3 font-extrabold absolute top-9 left-14">
            Web Design
          </h3>
          <p className="text-lg pl-14 mt-4">
            A beautifully crafted website is the best tool for brand awareness,
            and ultimately results in increased revenues.
          </p>
        </div>
      </div>

      <h2 className="w-[540px] h-[192px] text-5xl text-black font-extrabold mt-52 ml-40 absolute">
        Our approach for creating a winning brand
      </h2>
    </section>
  );
}
