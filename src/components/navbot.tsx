import { sidebarLists } from "@/data";
import DisplayIcon from "./ui/display-icon";

const Navbot = () => {
  return (
    <nav className="block md:hidden sticky bottom-0">
      <div className="py-3.5 flex items-center bg-black border-t border-gray-200/20">
        <ul className="flex flex-row w-full justify-evenly items-stretch">
          {sidebarLists.map((sidebarList, sidebarListIndex) => {
            if (sidebarList.title === "Search") return null;
            if (sidebarList.title === "Notifications") return null;

            return (
              <li key={sidebarListIndex} className="cursor-pointer">
                <DisplayIcon list={sidebarList} />
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbot;
