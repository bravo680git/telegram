import { AiOutlineBug, AiOutlineQuestionCircle } from "react-icons/ai";
import { BsBookmark, BsMoonStars } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { MdAnimation } from "react-icons/md";
import { VscGear } from "react-icons/vsc";

const MENU_ITEMS = [
  {
    text: "Saved Messages",
    icon: BsBookmark,
    currentChat: {
      name: "Saved Messages",
      id: "savedMessages",
    },
  },
  {
    text: "Contacts",
    icon: FaRegUser,
    control: "sidebar-contact",
  },
  {
    text: "Settings",
    icon: VscGear,
    control: "sidebar-settings",
  },
  {
    text: "Dark Mode",
    icon: BsMoonStars,
    switchBtn: true,
    control: "others-darkMode",
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

export default MENU_ITEMS;
