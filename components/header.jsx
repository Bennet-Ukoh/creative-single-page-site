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
    <header className="h-44 w-full justify-between items-center flex lg:pl-[180px] sm:pl-10 pl-6">
      <Link
        className="flex justify-start items-center gap-4 lg:w-1/2 sm:w-1/3 w-full bg-white h-44  flex-1"
        href="/"
      >
        <Image src={logo} alt="header logo" height={26} width={26} />
        <h2 className="font-extrabold text-h3">Creative</h2>
      </Link>

      <nav className="text-[16px] ss:flex hidden  bg-red lg:w-1/2 ss:w-2/3 h-44 sm:w-[60%]  lg:pl-20 sm:pl-10">
        <ul className="flex  lg:gap-x-10 sm:gap-x-6 text-white items-center flex-1 ">
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
        className="ss:hidden flex items-center cursor-pointer mr-6"
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
        <nav className="absolute top-44 left-40 w-48 h-64 bg-black flex flex-col items-center pt-8 xs:hidden z-50">
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
