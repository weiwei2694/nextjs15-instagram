"use client";

import { Heart, Search } from "lucide-react";
import React from "react";

const Navbar = () => {
  const [isInputActive, setIsInputActive] = React.useState<boolean>(false);

  return (
    <nav className="h-[60px] hidden max-md:flex flex-row items-center px-4 border-b border-gray-200/20">
      <div className="w-full flex flex-row items-center justify-between">
        <div className="relative">
          <img
            src="/text-logo.png"
            alt="Text Logo"
            width={110}
            className="pointer-events-none"
          />
        </div>

        <div className="flex flex-row items-center gap-x-3">
          <form>
            <div className="relative bg-[#363636] rounded-lg">
              <input
                type="text"
                className={`h-[36px] bg-transparent border-none outline-none placeholder:text-[#a8a8a8] text-[#f5f5f5] font-light text-sm w-full pe-4 ${
                  isInputActive ? "w-[237px] ps-4" : "ps-10"
                }`}
                placeholder="Search"
                onFocus={() => setIsInputActive(true)}
                onBlur={() => setIsInputActive(false)}
              />

              {!isInputActive ? (
                <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#a8a8a8]">
                  <Search className="w-4 h-4" />
                </div>
              ) : null}
            </div>
          </form>

          <button type="button">
            <Heart className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
