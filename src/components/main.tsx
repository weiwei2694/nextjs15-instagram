import { profiles } from "@/data";

const Main = () => {
  return (
    <section className="w-full max-w-2xl py-6 mx-auto">
      <div className="flex flex-col space-y-6">
        {/* Story */}
        <ul className="w-full flex flex-row gap-x-3 items-center px-3 overflow-hidden whitespace-nowrap">
          {profiles.map((profile, profileIndex) => (
            <li className="shrink-0 relative p-[2px] rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500">
              <img
                src={profile}
                alt={profile + profileIndex}
                className="w-[60px] h-[60px] object-cover rounded-full bg-black p-px"
              />
            </li>
          ))}
        </ul>

        {/* Pages */}
        <div className="flex flex-col items-center"></div>
      </div>
    </section>
  );
};

export default Main;
