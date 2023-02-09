import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import classnames from "classnames/bind";
import {
  AiOutlineClose,
  AiOutlineBell,
  AiOutlineArrowLeft,
} from "react-icons/ai";
import { HiOutlinePencil } from "react-icons/hi";
import { MdOutlinePhone } from "react-icons/md";
import { BsBookmark } from "react-icons/bs";

import AvatarItem from "components/AvatarItem";
import SlideTransition from "components/SlideTransition";
import MenuItem from "components/Menu/MenuItem";
import ClickAnimation from "components/ClickAnimation";
import NotifyText from "components/NotifyText";
import SlideMenu from "components/SlideMenu";
import Button from "components/Button";
import { setRightSidebarControl } from "store/slices/controlSlices";
import style from "./RightSidebarLayout.module.scss";

const cx = classnames.bind(style);

function ProfileSidebarLayout({ actived }) {
  const dispatch = useDispatch();
  const currentChat = useSelector((state) => state.chat.currentChat) ?? {};
  const notifyTextShowTime = 3000;
  const [notifyTextShow, setNotifyTextShow] = useState(false);
  const [title, setTitle] = useState("Profile");
  const containerRef = useRef();

  const handleClose = () => {
    dispatch(setRightSidebarControl(null));
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentChat.phone);
    setNotifyTextShow(true);
  };

  const handleCLickMenu = () => {
    containerRef.current.scrollTo({ top: 360, behavior: "smooth" });
  };

  const handleBack = () => {
    containerRef.current.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleEditProfile = () => {
    dispatch(setRightSidebarControl("editprofile"));
  };

  const handleScroll = (e) => {
    if (e.target.scrollTop > 300) {
      setTitle("Shared Media");
    } else {
      setTitle("Profile");
    }
  };

  useEffect(() => {
    const tId = setTimeout(() => setNotifyTextShow(false), notifyTextShowTime);

    return () => clearTimeout(tId);
  }, [notifyTextShow]);

  return (
    <SlideTransition enable actived={actived} direction="R_L_R">
      <div
        className={cx("profile-sidebar")}
        onScroll={handleScroll}
        ref={containerRef}
      >
        <div className={cx("header")}>
          <div className={cx("back-btn")}>
            {title === "Profile" ? (
              <Button onClick={handleClose}>
                <AiOutlineClose />
              </Button>
            ) : (
              <Button onClick={handleBack}>
                <AiOutlineArrowLeft />
              </Button>
            )}
          </div>
          <div className={cx("title")}>{title}</div>
          {title === "Profile" ? (
            <div className={cx("edit-btn")}>
              <Button onClick={handleEditProfile}>
                <HiOutlinePencil />
              </Button>
            </div>
          ) : null}
        </div>

        <div className={cx("body")}>
          <div className={cx("profile")}>
            <div className={cx("avatar")}>
              <AvatarItem
                fontSize={44}
                name={currentChat.name}
                Icon={currentChat.id === "savedMessages" ? BsBookmark : null}
              />
            </div>
            <div className={cx("name")}>{currentChat.name}</div>
            <div className={cx("status")}>{currentChat.status} </div>
          </div>

          <ClickAnimation>
            <MenuItem
              text="+84 46694231"
              bottomText="Phone"
              Icon={MdOutlinePhone}
              round
              large
              onClick={copyToClipboard}
            />
          </ClickAnimation>

          {notifyTextShow && (
            <NotifyText time={notifyTextShowTime}>
              Phone copied to clipboard
            </NotifyText>
          )}

          <ClickAnimation>
            <MenuItem
              text="Notification"
              Icon={AiOutlineBell}
              round
              large
              switchBtn
            />
          </ClickAnimation>

          <div className={cx("seperate")}>
            <div></div>
          </div>

          <div className={cx("slide-menu")}>
            <SlideMenu
              btnList={["Media", "Files", "Voices"]}
              tickSize={14}
              onClick={handleCLickMenu}
            />
          </div>
        </div>
      </div>
    </SlideTransition>
  );
}

export default ProfileSidebarLayout;
