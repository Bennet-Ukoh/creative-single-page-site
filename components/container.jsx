import React from "react";

export default function Container({ children }) {
  return (
    <div className="bg-white max-w-[90rem] max-h-screen mx-auto">
      {children}
    </div>
  );
}
