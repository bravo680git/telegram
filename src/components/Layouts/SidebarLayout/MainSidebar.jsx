import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import { AiOutlineClose } from "react-icons/ai";
import { HiPencil } from "react-icons/hi";
import ChatList from "../../ChatList";
import ContactList from "../../ContactList";
import { SidebarHeader } from "../../Header";
import Menu from "../../Menu";
import newMessageMenu from "../../../utils/newMessageMenu";
import style from "./SidebarLayout.module.scss";

const cx = classNames.bind(style);

function MainSidebar() {
  const [isActived, setIsActived] = useState(false);
  const [closeMenu, setCloseMenu] = useState(0);

  useEffect(() => {
    setIsActived(false);
  }, [closeMenu]);

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
      <div
        className={cx("icon", {
          actived: isActived,
          unActived: !isActived,
        })}
      >
        {isActived ? (
          <AiOutlineClose onClick={() => setIsActived(false)} />
        ) : (
          <HiPencil
            onClick={(e) => {
              e.stopPropagation();
              setIsActived(true);
            }}
          />
        )}

        <div className={cx("menu")} onClick={(e) => e.stopPropagation()}>
          <Menu menuItems={newMessageMenu} />
        </div>
      </div>
    </div>
  );
}

export default MainSidebar;
