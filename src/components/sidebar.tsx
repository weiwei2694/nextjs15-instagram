import { sidebarLists } from "@/data";
import { FaInstagram, FaThreads } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";

const Sidebar = () => {
  return (
    <aside className="sticky top-0 max-xl:w-fit xl:w-[330px] border-r border-gray-200/20 h-screen py-8 px-4 max-xl:py-4">
      <div className="flex flex-col h-full justify-between">
        <div className="flex flex-col space-y-8">
          <div className="px-4 py-3 rounded-xl max-xl:hover:bg-gray-200/10 transition cursor-pointer max-xl:px-3 max-xl:py-2 max-xl:grid max-xl:place-items-center group">
            <a href="#">
              <img
                src="/text-logo.png"
                alt="instagram"
                width={110}
                className="max-xl:hidden pointer-events-none"
              />

              <FaInstagram
                size="2rem"
                className="xl:hidden max-xl:w-[1.5rem] max-xl:group-hover:scale-105 transition duration-75 pointer-events-none"
              />
            </a>
          </div>

          <ul className="flex flex-col space-y-2">
            {sidebarLists.map((list, listIndex) => (
              <li
                key={listIndex}
                className="flex items-center max-xl:justify-center gap-x-3 px-4 py-3 rounded-xl hover:bg-gray-200/10 cursor-pointer transition group max-xl:px-1 max-xl:py-2"
              >
                {list.icon && (
                  <list.icon
                    size="2rem"
                    className="max-xl:w-[1.7rem] max-xl:group-hover:scale-[1.1] transition duration-75"
                  />
                )}
                {list.img && (
                  <img
                    src={list.img}
                    alt="profile"
                    className="w-[2rem] h-[2rem] object-cover rounded-full max-xl:w-[1.7rem] max-xl:h-[1.7rem] max-xl:group-hover:scale-[1.1] transition duration-75"
                  />
                )}
                <span
                  className={`max-xl:hidden ${
                    list.active ? "font-bold" : "font-light"
                  }`}
                >
                  {list.title}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <ul className="flex flex-col space-y-2">
          <li className="flex items-center max-xl:justify-center gap-x-3 px-4 py-3 rounded-xl hover:bg-gray-200/10 cursor-pointer transition group max-xl:px-1 max-xl:py-2">
            <FaThreads
              size="1.8rem"
              className="max-xl:w-[1.7rem] max-xl:group-hover:scale-[1.1] transition duration-75"
            />
            <span className="max-xl:hidden font-light">Threads</span>
          </li>
          <li className="flex items-center max-xl:justify-center gap-x-3 px-4 py-3 rounded-xl hover:bg-gray-200/10 cursor-pointer transition group max-xl:px-1 max-xl:py-2">
            <FiMenu
              size="1.8rem"
              className="max-xl:w-[1.7rem] max-xl:group-hover:scale-[1.1] transition duration-75"
            />
            <span className="max-xl:hidden font-light">More</span>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
