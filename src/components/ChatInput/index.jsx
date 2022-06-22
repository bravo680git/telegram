import classnames from "classnames/bind";
import { useState } from "react";
import { GrEmoji } from "react-icons/gr";
import { BiMicrophone } from "react-icons/bi";
import { IoIosAttach } from "react-icons/io";
import { AiOutlineArrowDown } from "react-icons/ai";
import { useRef, useEffect } from "react";
import style from "./ChatInput.module.scss";

const cx = classnames.bind(style);

function ChatInput() {
  const [message, setMessage] = useState("");
  const textareaRef = useRef();

  useEffect(() => {
    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
  }, [message]);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("input")}>
        <div className={cx("left")}>
          <GrEmoji />
        </div>
        <div className={cx("center")}>
          <textarea
            type="text"
            ref={textareaRef}
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={1}
          />
        </div>
        <div className={cx("right")}>
          <IoIosAttach />
        </div>

        <div className={cx("outside-right")}>
          <BiMicrophone />
        </div>

        <div className={cx("outside-top-right")}>
          <AiOutlineArrowDown />
        </div>
      </div>

      <div className="emoji"></div>
    </div>
  );
}

export default ChatInput;
