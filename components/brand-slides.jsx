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
    <section className="flex">
      <div className="bg-black w-[735px] h-[528px] mt-[898px] pt-44">
        <h3 className="text-5xl mx-auto font-extrabold text-white w-[445px]">
          {slides[currentSlide].title}
        </h3>
        <div className="flex justify-start items-center gap-x-4 mt-20 pl-[104px] ">
          <FaCircleChevronLeft
            className="text-red text-4xl cursor-pointer hover:text-hoverBg"
            onClick={prevSlide}
          />
          <FaCircleChevronRight
            className="text-red text-4xl cursor-pointer hover:text-hoverBg "
            onClick={nextSlide}
          />
        </div>
      </div>
      <div className="relative mt-[898px]">
        <Image
          src={slides[currentSlide].image}
          alt={slides[currentSlide].description}
        />
        <div className="absolute top-[80%] left-[60%] text-white">
          <h3 className="font-extrabold text-h3">
            {slides[currentSlide].description}
          </h3>
          <p className="text-end">{slides[currentSlide].year}</p>
        </div>
        <Image
          src={whitecurl}
          alt="whitecurl"
          className="absolute top-[30%] -left-16"
        />
      </div>
    </section>
  );
}
