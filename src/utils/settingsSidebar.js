import { FiDatabase, FiUserX } from "react-icons/fi";
import { BiLockAlt, BiDevices } from "react-icons/bi";
import { VscGear } from "react-icons/vsc";
import {
  AiOutlineFolder,
  AiOutlineLock,
  AiOutlineMinusCircle,
} from "react-icons/ai";
import { MdOutlineLanguage, MdNotificationsNone } from "react-icons/md";
import { RiDeleteBin7Line } from "react-icons/ri";
import { BsImage } from "react-icons/bs";

const settingItems = [
  //////////////////////////////////////////////////////////////////////
  //notification
  //////////////////////////////////////////////////////////////////////
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
  //////////////////////////////////////////////////////////////////////
  //data and storage
  //////////////////////////////////////////////////////////////////////
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
            text: "Auto-download Media",
            key: "auto",
            checkbox: true,
          },
          {
            text: "Photos",
            key: "photo",
            sub: [
              {
                title: "Auto-download photos",
                key: "autoDownload",
                sub: [
                  {
                    text: "Contacts",
                    key: "contact",
                    checkbox: true,
                  },
                  {
                    text: "Private Chats",
                    key: "private",
                    checkbox: true,
                  },
                  {
                    text: "Group Chats",
                    key: "group",
                    checkbox: true,
                  },
                  {
                    text: "Channels",
                    key: "channel",
                    checkbox: true,
                  },
                ],
              },
            ],
          },
          {
            text: "Videos",
            key: "video",
            sub: [
              {
                title: "Auto-download videos and GIFs",
                key: "autoDownload",
                sub: [
                  {
                    text: "Contacts",
                    key: "contact",
                    checkbox: true,
                  },
                  {
                    text: "Private Chats",
                    key: "private",
                    checkbox: true,
                  },
                  {
                    text: "Group Chats",
                    key: "group",
                    checkbox: true,
                  },
                  {
                    text: "Channels",
                    key: "channel",
                    checkbox: true,
                  },
                ],
              },
            ],
          },
          {
            text: "Files",
            key: "file",
            sub: [
              {
                title: "Auto-download files and music",
                key: "autoDownload",
                sub: [
                  {
                    text: "Contacts",
                    key: "contact",
                    checkbox: true,
                  },
                  {
                    text: "Private Chats",
                    key: "private",
                    checkbox: true,
                  },
                  {
                    text: "Group Chats",
                    key: "group",
                    checkbox: true,
                  },
                  {
                    text: "Channels",
                    key: "channel",
                    checkbox: true,
                  },
                  {
                    text: "Maximum file size",
                    key: "maxSize",
                    range: true,
                  },
                ],
              },
            ],
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
  //////////////////////////////////////////////////////////////////////
  //private and security
  //////////////////////////////////////////////////////////////////////
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
  //////////////////////////////////////////////////////////////////////
  //general setting
  //////////////////////////////////////////////////////////////////////
  {
    text: "General Settings",
    icon: VscGear,
    key: "general",
    sub: [
      {
        title: "Settings",
        key: "setting",
        sub: [
          {
            text: "Message Text Size",
            range: true,
            key: "size",
          },
          {
            text: "Chat Background",
            icon: BsImage,
            key: "background",
          },
          {
            text: "Enable Animtion",
            checkbox: true,
            key: "animation",
          },
        ],
      },
      {
        title: "Keyboard",
        key: "keyboard",
        sub: [
          {
            text: "Send by Enter",
            radio: true,
            key: "enter",
          },
          {
            text: "Send by Ctrl + Enter",
            radio: true,
            key: "ctrlEnter",
          },
        ],
      },
      {
        title: "Time Format",
        key: "time",
        sub: [
          {
            text: "12-hour",
            radio: true,
            key: "half",
          },
          {
            text: "24-hour",
            radio: true,
            key: "full",
          },
        ],
      },
      {
        title: "Emoji",
        key: "emoji",
        sub: [
          {
            text: "Suggest Emoji",
            checkbox: true,
            key: "suggest",
          },
          {
            text: "Large Emoji",
            checkbox: true,
            key: "large",
          },
        ],
      },
      {
        title: "Stickers",
        key: "sticker",
        sub: [
          {
            text: "Quick Reaction",
            key: "quick",
          },
          {
            text: "Suggest Stickers by Emoji",
            checkbox: true,
            key: "suggest",
          },
          {
            text: "Loop Animated Stickers",
            checkbox: true,
            key: "loop",
          },
          {
            text: "Hot Cherry",
            key: "cherry",
          },
        ],
      },
    ],
  },
  //////////////////////////////////////////////////////////////////////
  //chat folder
  //////////////////////////////////////////////////////////////////////
  {
    text: "Chat Folders",
    icon: AiOutlineFolder,
    key: "folder",
  },
  //////////////////////////////////////////////////////////////////////
  //devices
  //////////////////////////////////////////////////////////////////////
  {
    text: "Devices",
    icon: BiDevices,
    key: "device",
    sub: [
      {
        title: "This devices",
        key: "device",
        sub: [
          {
            text: "Telegram Web 1.4.3 K",
            key: "osNum",
          },
          {
            text: "Terminal All Other Sessions",
            icon: AiOutlineMinusCircle,
          },
        ],
      },
      {
        title: "Active sessions",
        key: "sessions",
        sub: [
          {
            text: "Telegram Android 8.5.4",
          },
          {
            text: "Telegram Android 8.5.4",
          },
        ],
      },
    ],
  },
  //////////////////////////////////////////////////////////////////////
  //language
  //////////////////////////////////////////////////////////////////////
  {
    text: "Language",
    icon: MdOutlineLanguage,
    key: "language",
    sub: [
      {
        key: "list",
        sub: [
          {
            text: "English",
            radio: true,
            key: "en",
          },
          {
            text: "Belarusian",
            radio: true,
            key: "be",
          },
          {
            text: "Catalan",
            radio: true,
            key: "ca",
          },
          {
            text: "Dutch",
            radio: true,
            key: "du",
          },
        ],
      },
    ],
  },
];

export default settingItems;
