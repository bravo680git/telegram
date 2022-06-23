import classnames from "classnames/bind";
import { useState } from "react";
import { GrEmoji } from "react-icons/gr";
import { BiMicrophone } from "react-icons/bi";
import { IoIosAttach } from "react-icons/io";
import { AiOutlineArrowDown, AiOutlineSend } from "react-icons/ai";
import { useRef, useEffect } from "react";
import style from "./ChatInput.module.scss";

const cx = classnames.bind(style);

function ChatInput({ setInputHeigh, showReturnBtn, scrollToNewMessage }) {
  const [message, setMessage] = useState("");
  const textareaRef = useRef();

  const handleEnterKeyUp = (e) => {
    if (e.keyCode === 13) {
      console.log(message);
      setMessage("");
    }
  };

  useEffect(() => {
    textareaRef.current.style.height = "auto";
    setInputHeigh(textareaRef.current.scrollHeight);
    textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
  }, [message, setInputHeigh]);

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
            onKeyUp={handleEnterKeyUp}
            rows={1}
          />
        </div>
        <div className={cx("right")}>
          <IoIosAttach />
        </div>

        <div className={cx("outside-right")}>
          {message.length > 0 ? <AiOutlineSend /> : <BiMicrophone />}
        </div>

        {showReturnBtn && (
          <div className={cx("outside-top-right")} onClick={scrollToNewMessage}>
            <AiOutlineArrowDown />
          </div>
        )}
      </div>

      <div className="emoji"></div>
    </div>
  );
}

export default ChatInput;
