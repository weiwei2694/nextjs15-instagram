import { profiles } from "@/data";

const Stories = () => {
  return (
    <ul className="w-full flex flex-row gap-x-3 items-center px-3 overflow-hidden whitespace-nowrap max-sm:border-b border-gray-200/20 pt-6 max-sm:pt-2.5 max-sm:pb-1.5">
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
  );
};

export default Stories;
