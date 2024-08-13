import type { LucideProps } from "lucide-react";
import {
  BadgePlus,
  Film,
  Heart,
  House,
  MessageCircle,
  Search,
  Telescope,
} from "lucide-react";

export type TSidebarList = {
  title: string;
  active: boolean;
  icon?: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  img?: string;
};

export const sidebarLists: TSidebarList[] = [
  {
    title: "Home",
    active: true,
    icon: House,
  },
  {
    title: "Search",
    active: false,
    icon: Search,
  },
  {
    title: "Explore",
    active: false,
    icon: Telescope,
  },
  {
    title: "Reels",
    active: false,
    icon: Film,
  },
  {
    title: "Messages",
    active: false,
    icon: MessageCircle,
  },
  {
    title: "Notifications",
    active: false,
    icon: Heart,
  },
  {
    title: "Create",
    active: false,
    icon: BadgePlus,
  },
  {
    title: "Profile",
    active: false,
    img: "/profile.jpg",
  },
];

export const profiles = [
  "/profile.jpg",
  "/profile.jpg",
  "/profile.jpg",
  "/profile.jpg",
  "/profile.jpg",
  "/profile.jpg",
  "/profile.jpg",
  "/profile.jpg",
  "/profile.jpg",
  "/profile.jpg",
  "/profile.jpg",
  "/profile.jpg",
  "/profile.jpg",
  "/profile.jpg",
  "/profile.jpg",
  "/profile.jpg",
  "/profile.jpg",
  "/profile.jpg",
  "/profile.jpg",
  "/profile.jpg",
];

export const siderightFooterLists = [
  "About",
  "Help",
  "API",
  "Jobs",
  "Privacy",
  "Terms",
  "Locations",
  "Language",
  "Meta Verified",
];
