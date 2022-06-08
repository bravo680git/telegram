import { FiDatabase } from "react-icons/fi";
import { BiLockAlt, BiDevices } from "react-icons/bi";
import { VscGear } from "react-icons/vsc";
import { AiOutlineFolder } from "react-icons/ai";
import { MdOutlineLanguage, MdNotificationsNone } from "react-icons/md";

const settingItems = [
  {
    text: "Notification and Sounds",
    icon: MdNotificationsNone,
    sub: [
      {
        title: "Private Chats",
        sub: [
          { text: "Notification for private chats", checkbox: true },
          { text: "Message Preview", checkbox: true },
        ],
      },
      {
        title: "Groups",
        sub: [
          { text: "Notification for groups", checkbox: true },
          { text: "Message Preview", checkbox: true },
        ],
      },
      {
        title: "Channels",
        sub: [
          { text: "Notification for channels", checkbox: true },
          { text: "Message Preview", checkbox: true },
        ],
      },
      {
        title: "Other",
        sub: [
          { text: "Contact joined Telegram", checkbox: true },
          { text: "Notification Sound", checkbox: true },
        ],
      },
    ],
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
