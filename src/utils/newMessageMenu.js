import { FaRegUser } from "react-icons/fa";
import { RiGroupLine } from "react-icons/ri";
import { HiOutlineSpeakerphone } from "react-icons/hi";

const newMessageMenu = [
  {
    text: "New Channel",
    icon: HiOutlineSpeakerphone,
    control: "sidebar-newchannel",
  },
  {
    text: "New Group",
    icon: RiGroupLine,
  },
  {
    text: "New Private Chat",
    icon: FaRegUser,
  },
];

export default newMessageMenu;
