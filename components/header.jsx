"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/public/images/logo.png";
import { navLinks } from "@/lib/data";
import { useState } from "react";
import menu from "@/public/images/menu.svg";
import close from "@/public/images/close.svg";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <header className="flex h-32 w-full justify-between items-center  lg:pl-44 md:pl-10 pl-6">
      <Link className="flex justify-start items-center gap-4" href="/">
        <Image src={logo} alt="header logo" height={26} width={26} />
        <h2 className="font-extrabold text-2xl">Creative</h2>
      </Link>

      <nav className="text-base font-normal md:flex hidden  bg-red lg:w-1/2 md:w-2/3 h-32  lg:pl-20 md:pl-10">
        <ul className="flex  lg:gap-x-8 md:gap-x-6 text-white items-center flex-1 ">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link className="hover:font-bold" href={link.href}>
                {link.name}
              </Link>
            </li>
          ))}
          <Link href="/">
            <button className="bg-blackBg hover:bg-hoverBlack font-bold text-white  px-4  py-3">
              Schedule a call
            </button>
          </Link>
        </ul>
      </nav>
      {/* Mobile Menu Icon */}
      <div
        className="flex md:hidden cursor-pointer mr-6 justify-end items-center"
        onClick={handleToggle}
      >
        <Image
          src={toggle ? close : menu}
          alt="menu icon"
          height={24}
          width={24}
        />
      </div>

      {/* Mobile Menu */}
      {toggle && (
        <nav className="absolute top-32 right-6 w-48 h-64 bg-black flex flex-col items-center pt-8 z-50">
          <ul className="flex flex-col gap-6 text-white items-center">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  className="hover:font-bold"
                  href={link.href}
                  onClick={handleToggle}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="mt-4">
              <Link href="/" onClick={handleToggle}>
                <button className="bg-red text-white px-4 py-3 font-extrabold  hover:bg-hoverBlack">
                  Schedule a call
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
