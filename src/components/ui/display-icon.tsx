import { TSidebarList } from "@/data";
import { IoMdHome } from "react-icons/io";
import Badge from "./badge";

const DisplayIcon = ({ list }: { list: TSidebarList }) => (
  <div className="relative">
    {/* BADGE */}
    {list.title === "Messages" ? <Badge total={123} /> : null}

    {list.title === "Home" ? (
      <IoMdHome className="transition duration-75 xl:-translate-x-[2.5px] xl:w-[26.5px] xl:h-[26.5px] max-xl:w-[30.5px] max-xl:h-[30.5px] max-xl:group-hover:scale-105" />
    ) : (
      list.icon && (
        <list.icon className="transition duration-75 xl:w-[22px] xl:h-[22px] max-xl:w-[24px] max-xl:h-[24px] max-xl:group-hover:scale-105" />
      )
    )}

    {list.img && (
      <img
        src={list.img}
        alt="profile"
        className="object-cover rounded-full xl:w-[22px] xl:h-[22px] max-xl:w-[24px] max-xl:h-[24px] max-xl:rounded-full max-xl:group-hover:scale-105 max-xl:transition max-xl:duration-75"
      />
    )}
  </div>
);

export default DisplayIcon;
