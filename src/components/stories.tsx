"use client";

import React from "react";
import { profiles } from "@/data";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Stories = () => {
  const containerRef = React.useRef<HTMLUListElement | null>(null);
  const [isAtStart, setIsAtStart] = React.useState<boolean>(true);
  const [isAtEnd, setIsAtEnd] = React.useState<boolean>(false);

  const handleScroll = (type: string) => {
    if (!containerRef?.current) return null;

    if (type === "next") {
      containerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }

    if (type === "prev") {
      containerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const checkScrollPosition = () => {
    if (containerRef.current) {
      const container = containerRef.current;
      const scrollLeft = container.scrollLeft;
      const scrollWidth = container.scrollWidth;
      const clientWidth = container.clientWidth;

      setIsAtStart(scrollLeft === 0);
      setIsAtEnd(scrollLeft + clientWidth >= scrollWidth);
    }
  };

  React.useEffect(() => {
    const container = containerRef.current;
    if (container) {
      checkScrollPosition();
      container.addEventListener("scroll", checkScrollPosition);

      return () => container.removeEventListener("scroll", checkScrollPosition);
    }
  }, []);

  return (
    <div className="relative w-full">
      {!isAtStart && (
        <button
          onClick={() => handleScroll("prev")}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-1 rounded-full text-white"
        >
          <ChevronLeft className="w-4 h-4 text-black" />
        </button>
      )}

      {!isAtEnd && (
        <button
          onClick={() => handleScroll("next")}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-1 rounded-full text-white"
        >
          <ChevronRight className="w-4 h-4 text-black" />
        </button>
      )}

      {/* List profiles */}
      <ul
        ref={containerRef}
        className="w-full flex flex-row gap-x-3 items-center px-3 overflow-x-scroll scroll-hidden whitespace-nowrap max-sm:border-b border-gray-200/20 pt-6 max-sm:pt-2.5 max-sm:pb-1.5"
      >
        {profiles.map((profile, profileIndex) => (
          <li
            key={profileIndex}
            className="shrink-0 flex flex-col items-center space-y-1.5"
          >
            <div className="relative p-[2px] rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 cursor-pointer">
              <img
                src={profile}
                alt={profile + profileIndex}
                className="w-[60px] h-[60px] object-cover rounded-full bg-black p-px select-none"
              />
            </div>

            <h6 className="text-xs font-light tracking-tighter">433</h6>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Stories;
