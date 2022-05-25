import { AiOutlineBug, AiOutlineQuestionCircle } from "react-icons/ai";
import { BsBookmark, BsMoonStars } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { MdAnimation } from "react-icons/md";
import { VscGear } from "react-icons/vsc";

const menuItems = [
  {
    text: "Saved Messages",
    icon: BsBookmark,
  },
  {
    text: "Contacts",
    icon: FaRegUser,
    control: "sidebar-contact",
  },
  {
    text: "Settings",
    icon: VscGear,
  },
  {
    text: "Dark Mode",
    icon: BsMoonStars,
  },
  {
    text: "Animations",
    icon: MdAnimation,
  },
  {
    text: "Telegram Features",
    icon: AiOutlineQuestionCircle,
  },
  {
    text: "Report Bug",
    icon: AiOutlineBug,
  },
  {
    text: "Switch to Z version",
    icon: () => <div>Z</div>,
  },
  {
    text: "Switch to Old Version",
    icon: () => <div>W</div>,
  },
];

export default menuItems;
