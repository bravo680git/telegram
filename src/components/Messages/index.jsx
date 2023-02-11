import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames/bind";
import { AiOutlineClose } from "react-icons/ai";
import { BiShare } from "react-icons/bi";
import { RiDeleteBin7Line } from "react-icons/ri";

import MessageItem from "../MessageItem";
import ChatInput from "../ChatInput";
import Button from "components/Button";
import { toogleOthersControl } from "store/slices/controlSlices";
import style from "./Messages.module.scss";

import { messages } from "utils/fakeData";

const cx = classNames.bind(style);

function Messages() {
  const [inputHeigh, setInputHeigh] = useState(16);
  const [showReturnBtn, setShowReturnBtn] = useState(false);
  const [selectMessages, setSelectMessages] = useState([]);
  const canSelect = useSelector((state) => state.control.selectMessages);
  const contentRef = useRef();
  const currentInputHeight = useRef(16);
  const dispatch = useDispatch();

  const scrollToNewMessage = () => {
    const initScroll = contentRef.current.scrollHeight;
    contentRef.current.scrollTop = initScroll;
  };

  const handleClose = () => {
    dispatch(toogleOthersControl("selectMessages"));
  };

  const handleSelectMessage = (id) => {
    if (!canSelect) return;
    if (selectMessages.includes(id)) {
      const newSelectMessages = selectMessages.filter((mId) => mId !== id);
      setSelectMessages(newSelectMessages);
    } else {
      setSelectMessages([...selectMessages, id]);
    }
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

  useEffect(() => {
    if (!canSelect) {
      setSelectMessages([]);
    }
  }, [canSelect]);

  return (
    <div className={cx("warpper")}>
      <div className={cx("content")} ref={contentRef}>
        <div className={cx("body")}>
          {messages.map((item) => (
            <MessageItem
              key={item.id}
              left={item.sender !== "a"}
              time={item.time}
              received={item.received}
              seen={item.seen}
              onClick={() => handleSelectMessage(item.id)}
              canSelect={canSelect}
              selected={selectMessages.includes(item.id)}
            >
              {item.message}
            </MessageItem>
          ))}
        </div>
      </div>

      <div className={cx("chat-input")}>
        {canSelect ? (
          <div className={cx("selected-nums")}>
            <div className={cx("close-btn")}>
              <Button onClick={handleClose}>
                <AiOutlineClose />
              </Button>
            </div>
            <div className={cx("nums")}>{selectMessages.length} Messages</div>
            <div className={cx("forward-btn", "btn")}>
              <BiShare />
              <span>Forward</span>
            </div>
            <div className={cx("delete-btn", "btn")}>
              <RiDeleteBin7Line />
              <span>Delete</span>
            </div>
          </div>
        ) : (
          <ChatInput
            setInputHeigh={setInputHeigh}
            showReturnBtn={showReturnBtn}
            scrollToNewMessage={scrollToNewMessage}
          />
        )}
      </div>
    </div>
  );
}

export default Messages;
