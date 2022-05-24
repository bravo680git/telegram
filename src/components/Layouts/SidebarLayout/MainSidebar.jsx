import { useState } from "react";
import classNames from "classnames/bind";
import { HiPencil } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { SidebarHeader } from "../../Header";
import ChatList from "../../ChatList";
import ContactList from "../../ContactList";
import style from "./SidebarLayout.module.scss";

const cx = classNames.bind(style);

function MainSidebar() {
  const [isActived, setIsActived] = useState(false);

  return (
    <div className={cx("main-sidebar")}>
      <SidebarHeader />
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
