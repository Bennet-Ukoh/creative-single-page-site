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
    <section className=" relative">
      <div className="absolute lg:pt-40 md:pt-32 bg-blackBg z-50 lg:w-[50%] lg:h-[33rem] md:w-[24rem] md:h-[22rem] lg:mt-[50.03rem] md:mt-[42.4rem] mt-[76.1rem] h-[17rem] pt-20">
        <h3 className="lg:text-6xl sm:text-3xl mx-auto font-extrabold text-white lg:w-[28rem] md:w-[18rem] text-3xl md:pl-0 pl-6 ">
          {slides[currentSlide].title}
        </h3>
        <div className="flex justify-start items-center gap-x-4 lg:mt-20 md:mt-10 lg:pl-[7.3rem] md:pl-14 pl-6 mt-6">
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
      <div className="w-full md:mt-[43rem] lg:mt-[50rem]  mt-[243.7%] absolute ">
        <Image
          src={slides[currentSlide].image}
          alt={slides[currentSlide].description}
          className="absolute right-0 lg:w-[60%] md:w-[30rem] "
        />
        <div className="absolute lg:mt-[32rem] lg:ml-[28rem] md:mt-72 md:ml-[11rem] mt-56 left-[46%]  text-white">
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
          className="absolute z-50 lg:mt-44 md:mt-32 left-[45%] md:w-16 md:h-7 lg:w-32 lg:h-12 hidden sm:block"
        />
      </div>
    </section>
  );
}
