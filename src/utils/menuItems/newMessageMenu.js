import { FaRegUser } from "react-icons/fa";
import { RiGroupLine } from "react-icons/ri";
import { HiOutlineSpeakerphone } from "react-icons/hi";

const MENU_ITEMS = [
  {
    text: "New Channel",
    icon: HiOutlineSpeakerphone,
    control: "sidebar-newchannel",
  },
  {
    text: "New Group",
    icon: RiGroupLine,
    control: "sidebar-newgroup",
  },
  {
    text: "New Private Chat",
    icon: FaRegUser,
    control: "sidebar-newprivatechat",
  },
];

export default MENU_ITEMS;
