import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames/bind";
import {
  AiOutlinePhone,
  AiOutlineSearch,
  AiOutlineArrowLeft,
} from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";

import Button from "components/Button";
import ChatItem from "components/ChatItem";
import Menu from "components/Menu";
import CallPopup from "components/CallPopup";
import { CHAT_OPTIONS_MENUS } from "utils/menuItems";
import {
  setContentControl,
  setRightSidebarControl,
  setSidebarControl,
} from "store/slices/controlSlices";
import { setCurrentChat } from "store/slices/chatSlice";
import style from "./MainHeader.module.scss";

const cx = classNames.bind(style);

function MainHeader({ data }) {
  const [openMenu, setOpenMenu] = useState(false);
  const [showCallPopup, setShowCallPopup] = useState(false);
  const currentChatId = useSelector((state) => state.chat.currentChat?.id);
  const isSmallScreen = useSelector((state) => state.control.smallScreen);

  const canSelectMessages = useSelector(
    (state) => state.control.selectMessages
  );
  const dispatch = useDispatch();

  const chatOptionsMenu =
    CHAT_OPTIONS_MENUS[
      currentChatId === "savedMessages" ? "savedMessages" : "normal"
    ];

  chatOptionsMenu.forEach((item) => {
    if (item.text === "Select Messages" || item.text === "Clear Selections") {
      if (canSelectMessages) {
        item.text = "Clear Selections";
      } else {
        item.text = "Select Messages";
      }
    }
  });

  const handleClickChatItem = () => {
    dispatch(setRightSidebarControl("profile"));
  };

  const handelClickSearchBtn = () => {
    dispatch(setRightSidebarControl("search"));
  };

  const handleClickBackBtn = () => {
    dispatch(setContentControl(null));
    dispatch(setCurrentChat(null));
    dispatch(setSidebarControl("main"));
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        {isSmallScreen && (
          <div className={cx("back-btn")}>
            <Button onClick={handleClickBackBtn}>
              <AiOutlineArrowLeft />
            </Button>
          </div>
        )}
        <div className={cx("chat-item")}>
          <ChatItem
            data={data}
            animation={false}
            onClick={handleClickChatItem}
          />
        </div>
        <div className={cx("utils")}>
          <div>
            <Button onClick={() => setShowCallPopup(true)}>
              <AiOutlinePhone />
            </Button>
          </div>
          <div>
            <Button onClick={handelClickSearchBtn}>
              <AiOutlineSearch />
            </Button>
          </div>
          <div>
            <Button onClick={() => setOpenMenu(!openMenu)}>
              <BsThreeDotsVertical />
            </Button>

            <Menu
              actived={openMenu}
              menuItems={
                CHAT_OPTIONS_MENUS[
                  currentChatId === "savedMessages" ? "savedMessages" : "normal"
                ]
              }
              width={194}
              transformOrigin="top left"
              y={-160}
              x={52}
              onMouseLeave={() => setOpenMenu(false)}
              onClick={() => setOpenMenu(false)}
              round
            />
          </div>
        </div>
      </div>

      {showCallPopup && <CallPopup onClose={() => setShowCallPopup(false)} />}
    </div>
  );
}

export default MainHeader;
