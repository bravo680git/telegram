import { FiDatabase } from "react-icons/fi";
import { BiLockAlt, BiDevices } from "react-icons/bi";
import { VscGear } from "react-icons/vsc";
import { AiOutlineFolder } from "react-icons/ai";
import { MdOutlineLanguage, MdNotificationsNone } from "react-icons/md";

const settingItems = [
  {
    text: "Notification and Sounds",
    icon: MdNotificationsNone,
  },
  {
    text: "Data and Storage",
    icon: FiDatabase,
  },
  {
    text: "Private and Secrurity",
    icon: BiLockAlt,
  },
  {
    text: "General Settings",
    icon: VscGear,
  },
  {
    text: "Chat Folders",
    icon: AiOutlineFolder,
  },
  {
    text: "Devices",
    icon: BiDevices,
  },
  {
    text: "Language",
    icon: MdOutlineLanguage,
  },
];

export default settingItems;
