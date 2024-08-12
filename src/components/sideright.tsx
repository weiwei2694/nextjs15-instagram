import { profiles, siderightFooterLists } from "@/data";

const Sideright = () => {
  return (
    <aside className="ps-16 py-8 max-xl:py-4 w-full max-w-[319px]">
      <div className="flex flex-col space-y-6">
        {/* switch account */}
        <div className="flex flex-row items-center justify-between w-full">
          <div className="flex flex-row items-center gap-x-3">
            <img
              src="/profile.jpg"
              alt="profile"
              width={44}
              height={44}
              className="w-[44px] h-[44px] object-cover rounded-full"
            />
            <h6 className="text-xs font-bold tracking-tighter">433</h6>
          </div>

          <button
            type="button"
            className="font-normal text-[#0095f6] text-xs hover:text-[f5f5f5] transition duration-75"
          >
            Switch
          </button>
        </div>

        {/* Suggested for you */}
        <div className="flex flex-col space-y-4">
          <div className="flex flex-row justify-between items-center">
            <h5 className="text-sm text-[#ababab] font-semibold">
              Suggested for you
            </h5>
            <button
              type="button"
              className="text-xs text-[#f5f5f5] tracking-tight font-normal hover:text-[#ababab] duration-75 transition"
            >
              See all
            </button>
          </div>

          {profiles.map((_, profileIndex) => {
            if (profileIndex >= 5) return null;

            return (
              <div
                key={profileIndex}
                className="flex flex-row justify-between items-center"
              >
                <div className="flex flex-row items-center gap-x-3">
                  <img
                    src="/profile.jpg"
                    alt="profile"
                    width={44}
                    height={44}
                    className="w-[44px] h-[44px] object-cover rounded-full"
                  />
                  <h6 className="text-xs font-bold tracking-tighter">433</h6>
                </div>

                <button
                  type="button"
                  className="font-normal text-[#0095f6] text-xs hover:text-[f5f5f5] transition duration-75"
                >
                  Follow
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-10">
        <div className="flex flex-col space-y-4">
          <ul className="flex flex-row flex-wrap gap-x-1">
            {siderightFooterLists.map((list, listIndex) => (
              <li
                key={list}
                className="cursor-pointer hover:underline text-[#737373] text-xs"
              >
                {list}
                {listIndex !== siderightFooterLists.length - 1 ? "," : ""}
              </li>
            ))}
          </ul>

          <h6 className="text-[#737373] text-xs uppercase">
            &copy; 2024 Instagram from Meta
          </h6>
        </div>
      </footer>
    </aside>
  );
};

export default Sideright;
