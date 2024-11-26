"use client";

import { FaCircleChevronRight } from "react-icons/fa6";
import { FaCircleChevronLeft } from "react-icons/fa6";
import Image from "next/image";
import BrandSlidesImage1 from "@/public/images/desktop-pic-3.jpg";
import BrandSlidesImage2 from "@/public/images/desktop-pic-4.jpg";
import BrandSlidesImage3 from "@/public/images/desktop-pic-5.jpg";
import whitecurl from "@/public/images/whitecurl.svg";
import { useState } from "react";

const slides = [
  {
    image: BrandSlidesImage1,
    title: "Brand naming & guidelines",
    description: "Learn Product Road Map",
    year: "2019 Project",
  },
  {
    image: BrandSlidesImage2,
    title: "Brand identity & merchandise",
    description: "New Majestic Hotels",
    year: "2018 Project",
  },
  {
    image: BrandSlidesImage3,
    title: "Brand identity & web design",
    description: "Crypto Dashboard",
    year: "2016 Project",
  },
];
export default function BrandSlides() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };
  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <section className="flex relative">
      <div className="bg-blackBg z-50 lg:w-[735px] lg:h-[528px] sm:w-[390px] sm:h-[352px] lg:mt-[898px] sm:mt-[677px] mt-[426.5%] w-[375px] h-[272px] lg:pt-44 pt-16 sm:pt-24 absolute">
        <h3 className="lg:text-5xl sm:text-3xl mx-auto font-extrabold text-white lg:w-[445px] sm:w-[281px] text-3xl sm:pl-0 pl-10 ">
          {slides[currentSlide].title}
        </h3>
        <div className="flex justify-start items-center gap-x-4 lg:mt-20 sm:mt-10 lg:pl-36 sm:pl-14 pl-10 mt-6">
          <FaCircleChevronLeft
            className="text-red sm:text-4xl text-3xl cursor-pointer hover:text-hoverBg"
            onClick={prevSlide}
          />
          <FaCircleChevronRight
            className="text-red sm:text-4xl text-3xl cursor-pointer hover:text-hoverBg "
            onClick={nextSlide}
          />
        </div>
      </div>
      <div className="relative lg:pl-[599px] sm:pl-[334px] sm:mt-[677px] lg:mt-[898px]  mt-[345%]">
        <Image
          src={slides[currentSlide].image}
          alt={slides[currentSlide].description}
          className="sm:w-[438px] sm:h-[472px] lg:w-[897px] lg:h-[728px] h-[404px] w-[375px]"
        />
        <div className="absolute lg:top-[85%] sm:top-[75%] top-[60%] left-[45%] sm:left-[65%] lg:left-[76%] text-white">
          <h3 className="font-extrabold sm:text-lg lg:text-h3 text-sm">
            {slides[currentSlide].description}
          </h3>
          <p className="text-end sm:text-lg text-sm">
            {slides[currentSlide].year}
          </p>
        </div>
        <Image
          src={whitecurl}
          alt="whitecurl"
          className="absolute z-50 top-[30%] left-[46%] sm:w-16 sm:h-7 lg:w-[134px] lg:h-[60px] hidden sm:block"
        />
      </div>
    </section>
  );
}
