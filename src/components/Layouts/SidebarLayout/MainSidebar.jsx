import classNames from "classnames/bind";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiPencil } from "react-icons/hi";
import ChatList from "../../ChatList";
import ContactList from "../../ContactList";
import { SidebarHeader } from "../../Header";
import style from "./SidebarLayout.module.scss";

const cx = classNames.bind(style);

function MainSidebar() {
  const [isActived, setIsActived] = useState(false);
  const [closeMenu, setCloseMenu] = useState(0);

  return (
    <div
      className={cx("main-sidebar")}
      onMouseLeave={() => setCloseMenu((prev) => prev + 1)}
      onClick={() => setCloseMenu((prev) => prev + 1)}
    >
      <SidebarHeader closeMenu={closeMenu} />
      <div className={cx("body")}>
        <ChatList />
        <div className={cx("seperate")}></div>
        <ContactList />
      </div>
      <div className={cx("icon", { actived: isActived })}>
        {isActived ? (
          <AiOutlineClose onClick={() => setIsActived(false)} />
        ) : (
          <HiPencil onClick={() => setIsActived(true)} />
        )}
      </div>
    </div>
  );
}

export default MainSidebar;
