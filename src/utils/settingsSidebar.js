import { FiDatabase, FiUserX } from "react-icons/fi";
import { BiLockAlt, BiDevices } from "react-icons/bi";
import { VscGear } from "react-icons/vsc";
import { AiOutlineFolder, AiOutlineLock } from "react-icons/ai";
import { MdOutlineLanguage, MdNotificationsNone } from "react-icons/md";
import { RiDeleteBin7Line } from "react-icons/ri";

const settingItems = [
  {
    text: "Notification and Sounds",
    key: "notification",
    icon: MdNotificationsNone,
    sub: [
      {
        title: "Private Chats",
        key: "private",
        sub: [
          {
            text: "Notification for private chats",
            checkbox: true,
            key: "notification",
          },
          { text: "Message Preview", checkbox: true, key: "preview" },
        ],
      },
      {
        title: "Groups",
        key: "group",
        sub: [
          {
            text: "Notification for groups",
            checkbox: true,
            key: "notification",
          },
          { text: "Message Preview", checkbox: true, key: "preview" },
        ],
      },
      {
        title: "Channels",
        key: "channel",
        sub: [
          {
            text: "Notification for channels",
            checkbox: true,
            key: "notification",
          },
          { text: "Message Preview", checkbox: true, key: "preview" },
        ],
      },
      {
        title: "Other",
        key: "other",
        sub: [
          { text: "Contact joined Telegram", checkbox: true, key: "join" },
          { text: "Notification Sound", checkbox: true, key: "sound" },
        ],
      },
    ],
  },
  {
    text: "Data and Storage",
    key: "data",
    icon: FiDatabase,
    sub: [
      {
        title: "Automatic media download",
        key: "download",
        sub: [
          {
            text: "Auto-downlaod Media",
            key: "auto",
            checkbox: true,
          },
          {
            text: "Photos",
            key: "photo",
          },
          {
            text: "Videos",
            key: "video",
          },
          {
            text: "Files",
            key: "file",
          },
          {
            text: "Reset Auto-Download Settings",
            icon: RiDeleteBin7Line,
            key: "reset",
          },
        ],
      },
      {
        title: "Auto-play media",
        key: "autoPlay",
        sub: [
          {
            text: "GIFs",
            checkbox: true,
            key: "gif",
          },
          {
            text: "Videos",
            checkbox: true,
            key: "video",
          },
        ],
      },
    ],
  },
  {
    text: "Private and Secrurity",
    icon: BiLockAlt,
    key: "security",
    sub: [
      {
        key: "security",
        sub: [
          { text: "Blocked Users", icon: FiUserX, key: "block" },
          {
            text: "Two-Step Verification",
            icon: AiOutlineLock,
            key: "twoStep",
          },
          { text: "Active Sessions", icon: BiDevices, key: "session" },
        ],
      },
      {
        title: "Privacy",
        key: "privacy",
        sub: [
          {
            text: "Who can see my phone number?",
            key: "phoneNumber",
          },
          {
            text: "Who can see your Last Seen time?",
            key: "lastSeen",
          },
          {
            text: "Who can see my profile photos & video?",
            key: "profile",
          },
          {
            text: "Who can call me?",
            key: "call",
          },
          {
            text: "Who can add a link to my account when forwarding my message?",
            key: "addLink",
          },
          {
            text: "Who can add me to group chats?",
            key: "addGroup",
          },
        ],
      },
      {
        title: "Sensitive Content",
        key: "sensitive",
        sub: [
          {
            text: "Disable filtering",
            key: "disableFilter",
            checkbox: true,
          },
        ],
      },
      {
        title: "Chats",
        key: "chat",
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
    key: "general",
  },
  {
    text: "Chat Folders",
    icon: AiOutlineFolder,
    key: "folder",
  },
  {
    text: "Devices",
    icon: BiDevices,
    key: "device",
  },
  {
    text: "Language",
    icon: MdOutlineLanguage,
    key: "language",
  },
];

export default settingItems;
