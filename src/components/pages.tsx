"use client";

import { profiles } from "@/data";
import TimeAgo from "./ui/time-ago";
import { BsThreeDots } from "react-icons/bs";
import {
  Bookmark,
  ExternalLink,
  Heart,
  MessageCircle,
  Smile,
} from "lucide-react";
import React from "react";

const Pages = () => {
  const [text, setText] = React.useState<string>("");
  const [isPostButtonActive, setIsPostButtonActive] =
    React.useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    setText(val);

    if (val.length > 0) {
      setIsPostButtonActive(true);
    } else {
      setIsPostButtonActive(false);
    }
  };

  return (
    <div className="w-full max-w-[468px] mx-auto">
      {/* just a sweetener, so that I don't copy the same code over and over again */}
      {profiles.map((_, profileIndex) => (
        <div key={profileIndex} className="flex flex-col">
          <div className="pt-4 flex flex-col">
            {/* profile, date information and menu */}
            <div className="flex flex-row items-center justify-between max-[470px]:px-4">
              <div className="flex flex-row items-center gap-x-3">
                <div className="relative p-[2px] rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 cursor-pointer">
                  <img
                    src="/profile.jpg"
                    alt="profile"
                    className="w-[38px] h-[38px] object-cover rounded-full bg-black p-px select-none"
                  />
                </div>
                <div className="flex flex-row gap-x-[.3rem]">
                  <h6 className="font-bold text-xs tracking-tighter">433</h6>
                  <span className="text-xs text-[#a8a8a8]">•</span>
                  <TimeAgo
                    date="2024-08-08T14:00:00Z"
                    className="text-xs text-[#a8a8a8] tracking-wide"
                  />
                </div>
              </div>

              <button>
                <BsThreeDots size="1rem" />
              </button>
            </div>

            {/* images */}
            <img
              src="/profile.jpg"
              alt="profile"
              className="w-full rounded border border-gray-200/20 mt-2.5"
            />

            {/* actions */}
            <div className="flex flex-row items-center mt-3 max-[470px]:px-4">
              <ul className="flex items-center gap-x-4">
                <li>
                  <button type="button" className="hover:opacity-70 transition">
                    <Heart />
                  </button>
                </li>
                <li>
                  <button type="button" className="hover:opacity-70 transition">
                    <MessageCircle className="-rotate-90" />
                  </button>
                </li>
                <li>
                  <button type="button" className="hover:opacity-70 transition">
                    <ExternalLink />
                  </button>
                </li>
              </ul>

              <div className="ml-auto">
                <button type="button" className="hover:opacity-70 transition">
                  <Bookmark />
                </button>
              </div>
            </div>

            {/* total likes */}
            <h5 className="font-semibold text-sm tracking-tighter mt-1.5 max-[470px]:px-4">
              20,292 likes
            </h5>

            {/* captions or descriptions */}
            <div className="mt-2.5 flex flex-row gap-x-1.5 max-[470px]:px-4">
              <h6 className="font-bold text-xs tracking-tighter">433</h6>
              <p className="text-xs">I want to see Ederson as striker 😆🎯</p>
            </div>

            {/* total comments */}
            <div className="mt-1.5 max-[470px]:px-4">
              <span className="text-[#a8a8a8] text-sm tracking-tight">
                View all 140 comments
              </span>
            </div>

            {/* latest or top comment  */}
            <div className="mt-2 flex flex-row items-center gap-x-3 max-[470px]:hidden">
              <div className="flex flex-row gap-x-1.5">
                <h5 className="font-bold text-sm tracking-tighter">
                  _not.adi_
                </h5>
                <p className="text-sm">
                  Need a ShapeShifter ST card of Ederson💀
                </p>
              </div>

              <div className="ml-auto">
                <Heart className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* comment form */}
            <form className="mt-2.5 max-[470px]:hidden">
              <div className="flex flex-row gap-x-3 border-b border-gray-200/20 pb-3">
                <textarea
                  className="w-full outline-none border-none resize-y bg-transparent placeholder:text-[#a8a8a8] text-sm h-fit overflow-hidden"
                  placeholder="Add a comment..."
                  onChange={handleChange}
                  value={text}
                ></textarea>

                {/* action: post and emoji */}
                <div className="flex items-start mt-1 gap-x-2">
                  {isPostButtonActive ? (
                    <button
                      type="button"
                      className="text-[#0095f6] text-xs font-semibold hover:text-white transition duration-75"
                    >
                      Post
                    </button>
                  ) : null}
                  <button type="button">
                    <Smile className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Pages;
