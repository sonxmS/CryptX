import { Lock } from "lucide-react";
import React from "react";

export const Navbar = () => {
  return (
    <div className=" mb-16 ">
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/1 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              </div>
              <span className="text-3xl font-bold bg-white bg-clip-text text-transparent w-full items-start">
                CryptX
              </span>
          </div>
        </div>
      </nav>
    </div>
  );
};
