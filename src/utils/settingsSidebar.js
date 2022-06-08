import { FiDatabase, FiUserX } from "react-icons/fi";
import { BiLockAlt, BiDevices } from "react-icons/bi";
import { VscGear } from "react-icons/vsc";
import { AiOutlineFolder, AiOutlineLock } from "react-icons/ai";
import { MdOutlineLanguage, MdNotificationsNone } from "react-icons/md";
import { RiDeleteBin7Line } from "react-icons/ri";

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
    sub: [
      {
        title: "Automatic media download",
        sub: [
          {
            text: "Auto-downlaod Media",
            checkbox: true,
          },
          {
            text: "Photos",
          },
          {
            text: "Videos",
          },
          {
            text: "Files",
          },
          {
            text: "Reset Auto-Download Settings",
            icon: RiDeleteBin7Line,
          },
        ],
      },
      {
        title: "Auto-play media",
        sub: [
          {
            text: "GIFs",
            checkbox: true,
          },
          {
            text: "Videos",
            checkbox: true,
          },
        ],
      },
    ],
  },
  {
    text: "Private and Secrurity",
    icon: BiLockAlt,
    sub: [
      {
        sub: [
          { text: "Blocked Users", icon: FiUserX },
          { text: "Two-Step Verification", icon: AiOutlineLock },
          { text: "Active Sessions", icon: BiDevices },
        ],
      },
      {
        title: "Privacy",
        sub: [
          {
            text: "Who can see my phone number?",
          },
          {
            text: "Who can see your Last Seen time?",
          },
          {
            text: "Who can see my profile photos & video?",
          },
          {
            text: "Who can call me?",
          },
          {
            text: "Who can add a link to my account when forwarding my message?",
          },
          {
            text: "Who can add me to group chats?",
          },
        ],
      },
      {
        title: "Sensitive Content",
        sub: [
          {
            text: "Disable filtering",
            checkbox: true,
          },
        ],
      },
      {
        title: "Chats",
        sub: [
          {
            text: "Delete All Cloud Drafts",
            icon: RiDeleteBin7Line,
          },
        ],
      },
    ],
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
