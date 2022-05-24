import { BsBookmark, BsMoonStars } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { VscGear } from "react-icons/vsc";
import { AiOutlineQuestionCircle, AiOutlineBug } from "react-icons/ai";
import { MdAnimation } from "react-icons/md";

const menuItems = [
  {
    text: "Saved Messages",
    icon: BsBookmark,
    onclick: () => {},
  },
  {
    text: "Contacts",
    icon: FaRegUser,
    onclick: () => {},
  },
  {
    text: "Settings",
    icon: VscGear,
    onclick: () => {},
  },
  {
    text: "Dark Mode",
    icon: BsMoonStars,
    onclick: () => {},
  },
  {
    text: "Animations",
    icon: MdAnimation,
    onclick: () => {},
  },
  {
    text: "Telegram Features",
    icon: AiOutlineQuestionCircle,
    onclick: () => {},
  },
  {
    text: "Report Bug",
    icon: AiOutlineBug,
    onclick: () => {},
  },
  {
    text: "Switch to Z version",
    icon: () => <div>Z</div>,
    onclick: () => {},
  },
  {
    text: "Switch to Old Version",
    icon: () => <div>W</div>,
    onclick: () => {},
  },
];

export default menuItems;
