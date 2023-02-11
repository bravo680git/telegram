import { BsBellSlash, BsCameraVideo } from "react-icons/bs";
import {
  AiOutlinePhone,
  AiOutlineCheckCircle,
  AiOutlineUserAdd,
} from "react-icons/ai";
import { RiShareForwardLine, RiDeleteBin7Line } from "react-icons/ri";
import { BiLockAlt } from "react-icons/bi";

const CHAT_OPTIONS_MENUS = {
  savedMessages: [
    {
      text: "Select Messages",
      icon: AiOutlineCheckCircle,
    },
    {
      text: "Add to contact",
      icon: AiOutlineUserAdd,
    },

    {
      text: "Delete chat",
      icon: RiDeleteBin7Line,
      type: "danger",
    },
  ],

  normal: [
    {
      text: "Mute",
      icon: BsBellSlash,
    },
    {
      text: "Call",
      icon: AiOutlinePhone,
    },
    {
      text: "Video Call",
      icon: BsCameraVideo,
    },
    {
      text: "Select Messages",
      icon: AiOutlineCheckCircle,
      control: "others-selectMessages",
    },
    {
      text: "Share contact",
      icon: RiShareForwardLine,
    },
    {
      text: "Block user",
      icon: BiLockAlt,
    },
    {
      text: "Delete chat",
      icon: RiDeleteBin7Line,
      type: "danger",
    },
  ],
};

export default CHAT_OPTIONS_MENUS;
