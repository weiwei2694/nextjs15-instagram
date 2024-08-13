import { sidebarLists, TSidebarList } from "@/data";
import { FaThreads } from "react-icons/fa6";
import { Instagram, Menu } from "lucide-react";
import { IoMdHome } from "react-icons/io";

const Sidebar = () => {
  return (
    <aside className="sticky top-0 w-[72px] xl:w-[244px] 2xl:w-[335px] max-md:hidden border-r border-gray-200/20 h-screen pb-5 pt-2 px-3">
      <div className="flex flex-col h-full justify-between">
        <div className="flex flex-col">
          <div className="relative mb-[19px] xl:pb-4 xl:px-3 xl:pt-[25px] max-xl:pb-[23px] max-xl:h-[92px]">
            <a
              href="#"
              className="max-xl:absolute max-xl:top-1/2 max-xl:left-1/2 max-xl:-translate-y-1/2 max-xl:-translate-x-1/2 max-xl:p-3 max-xl:hover:bg-gray-200/10 max-xl:rounded-lg group"
            >
              <img
                src="/text-logo.png"
                alt="instagram"
                width={110}
                className="max-xl:hidden pointer-events-none"
              />

              <Instagram className="xl:hidden max-xl:group-hover:scale-105 max-xl:transition max-xl:duration-200" />
            </a>
          </div>

          <ul className="flex flex-col max-xl:space-y-4">
            {sidebarLists.map((list, listIndex) => (
              <li
                key={listIndex}
                className="flex items-center xl:my-1 xl:gap-3 xl:p-3 rounded-lg hover:bg-gray-200/10 cursor-pointer transition max-xl:p-2 max-xl:justify-center group"
              >
                <DisplayIcon list={list} />

                {list.img && (
                  <img
                    src={list.img}
                    alt="profile"
                    className="object-cover rounded-full xl:w-[22px] xl:h-[22px] max-xl:w-[24px] max-xl:h-[24px] max-xl:rounded-full max-xl:group-hover:scale-105 max-xl:transition max-xl:duration-75"
                  />
                )}
                <span
                  className={`max-xl:hidden text-base ${
                    list.active ? "font-bold" : "font-light"
                  } ${list.title === "Home" ? "-translate-x-[2.8px]" : ""}`}
                >
                  {list.title}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <ul className="flex flex-col space-y-2">
          <li className="flex items-center xl:my-1 xl:gap-3 xl:p-3 rounded-lg hover:bg-gray-200/10 cursor-pointer transition max-xl:p-2 max-xl:justify-center group">
            <FaThreads className="transition duration-75 xl:w-[22px] xl:h-[22px] max-xl:w-[24px] max-xl:h-[24px] max-xl:group-hover:scale-105" />
            <span className="max-xl:hidden text-base font-light">Threads</span>
          </li>
          <li className="flex items-center xl:my-1 xl:gap-3 xl:p-3 rounded-lg hover:bg-gray-200/10 cursor-pointer transition max-xl:p-2 max-xl:justify-center group">
            <Menu className="transition duration-75 xl:w-[22px] xl:h-[22px] max-xl:w-[24px] max-xl:h-[24px] max-xl:group-hover:scale-105" />
            <span className="max-xl:hidden text-base font-light">More</span>
          </li>
        </ul>
      </div>
    </aside>
  );
};

const DisplayIcon = ({ list }: { list: TSidebarList }) => (
  <>
    {list.title === "Home" ? (
      <IoMdHome className="transition duration-75 xl:-translate-x-[2.5px] xl:w-[26.5px] xl:h-[26.5px] max-xl:w-[30.5px] max-xl:h-[30.5px] max-xl:group-hover:scale-105" />
    ) : (
      list.icon && (
        <list.icon className="transition duration-75 xl:w-[22px] xl:h-[22px] max-xl:w-[24px] max-xl:h-[24px] max-xl:group-hover:scale-105" />
      )
    )}
  </>
);

export default Sidebar;
