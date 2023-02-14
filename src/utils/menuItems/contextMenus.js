import { MdOutlineMarkChatUnread } from "react-icons/md";
import { BsPin, BsCheckCircle } from "react-icons/bs";
import { BiBellOff, BiShare } from "react-icons/bi";
import { HiOutlineArchive } from "react-icons/hi";
import { RiDeleteBin7Line, RiShareForwardLine } from "react-icons/ri";
import { FiCopy } from "react-icons/fi";

const CONTEXT_MENUS = {
  CHAT_CTX: [
    {
      text: "Mark as unread",
      icon: MdOutlineMarkChatUnread,
    },
    {
      text: "Pin",
      icon: BsPin,
    },
    {
      text: "Mute",
      icon: BiBellOff,
    },
    {
      text: "Archive",
      icon: HiOutlineArchive,
    },
    {
      text: "Delete",
      type: "danger",
      icon: RiDeleteBin7Line,
    },
  ],
  SAVE_MESSAGES_CTX: [
    {
      text: "Mark as unread",
      icon: MdOutlineMarkChatUnread,
    },
    {
      text: "Pin",
      icon: BsPin,
    },
    {
      text: "Delete",
      type: "danger",
      icon: RiDeleteBin7Line,
    },
  ],
  REPLY_MESSAGE_CTX: [
    {
      text: "Reply",
      icon: BiShare,
    },
    {
      text: "Copy",
      icon: FiCopy,
    },
    {
      text: "Pin",
      icon: BsPin,
    },
    {
      text: "Forward",
      icon: RiShareForwardLine,
    },
    {
      text: "Select",
      icon: BsCheckCircle,
    },
    {
      text: "Delete",
      type: "danger",
      icon: RiDeleteBin7Line,
    },
  ],
  NOT_REPLY_MESSAGE_CTX: [
    {
      text: "Reply",
      icon: BiShare,
    },
    {
      text: "Delete",
      type: "danger",
      icon: RiDeleteBin7Line,
    },
  ],
};

export default CONTEXT_MENUS;
