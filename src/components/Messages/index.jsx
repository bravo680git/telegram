import { useState, useEffect, useRef } from "react";
import classNames from "classnames/bind";
import MessageItem from "../MessageItem";
import ChatInput from "../ChatInput";
import style from "./Messages.module.scss";

import { messages } from "utils/fakeData";

const cx = classNames.bind(style);

function Messages() {
  const [inputHeigh, setInputHeigh] = useState(16);
  const [showReturnBtn, setShowReturnBtn] = useState(false);
  const contentRef = useRef();
  const currentInputHeight = useRef(16);

  const scrollToNewMessage = () => {
    const initScroll = contentRef.current.scrollHeight;
    contentRef.current.scrollTop = initScroll;
  };

  useEffect(() => {
    contentRef.current.style.setProperty("--input-heigh", inputHeigh + "px");
    if (inputHeigh > currentInputHeight.current) {
      contentRef.current.scrollTop += 16;
    } else {
      contentRef.current.scrollTop -= 16;
    }

    currentInputHeight.current = inputHeigh;
  }, [inputHeigh]);

  useEffect(() => {
    const initScroll = contentRef.current.scrollHeight;
    contentRef.current.scrollTop = initScroll;

    const handleScroll = () => {
      if (initScroll - contentRef.current.scrollTop > 1000) {
        setShowReturnBtn(true);
      } else {
        setShowReturnBtn(false);
      }
    };

    contentRef.current.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={cx("warpper")}>
      <div className={cx("content")} ref={contentRef}>
        <div className={cx("body")}>
          {messages.map((item, index) => (
            <MessageItem
              key={index}
              left={item.sender !== "a"}
              time={item.time}
              received={item.received}
              seen={item.seen}
            >
              {item.message}
            </MessageItem>
          ))}
        </div>
      </div>

      <div className={cx("chat-input")}>
        <ChatInput
          setInputHeigh={setInputHeigh}
          showReturnBtn={showReturnBtn}
          scrollToNewMessage={scrollToNewMessage}
        />
      </div>
    </div>
  );
}

export default Messages;
