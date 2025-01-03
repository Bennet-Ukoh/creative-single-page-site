import React from "react";
import Footer from "@/components/footer";
import Headers from "@/components/header";

export default function Container({ children }) {
  return (
    <div className="flex flex-col bg-white max-w-[90rem] max-h-screen mx-auto">
      <Headers />
      {children}
      <Footer />
    </div>
  );
}
