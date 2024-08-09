import {
  MdHomeFilled,
  MdOutlineExplore,
  MdSearch,
  MdOutlineSlowMotionVideo,
  MdOutlineMessage,
  MdOutlineCreate,
} from "react-icons/md";
import type { IconType } from "react-icons";
import { IoMdHeartEmpty } from "react-icons/io";

type TSidebarList = {
  title: string;
  active: boolean;
  icon?: IconType;
  img?: string;
};

export const sidebarLists: TSidebarList[] = [
  {
    title: "Home",
    active: true,
    icon: MdHomeFilled,
  },
  {
    title: "Search",
    active: false,
    icon: MdSearch,
  },
  {
    title: "Explore",
    active: false,
    icon: MdOutlineExplore,
  },
  {
    title: "Reels",
    active: false,
    icon: MdOutlineSlowMotionVideo,
  },
  {
    title: "Messages",
    active: false,
    icon: MdOutlineMessage,
  },
  {
    title: "Notifications",
    active: false,
    icon: IoMdHeartEmpty,
  },
  {
    title: "Create",
    active: false,
    icon: MdOutlineCreate,
  },
  {
    title: "Profile",
    active: false,
    img: "/profile.jpg",
  },
];
