import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import classNames from "classnames/bind";
import { AiOutlineClose } from "react-icons/ai";
import { HiPencil } from "react-icons/hi";

import ChatList from "components/ChatList";
import ContactList from "components/ContactList";
import { SidebarHeader } from "components/Header";
import Menu from "components/Menu";
import Button from "components/Button";
import newMessageMenu from "utils/newMessageMenu";
import Transition from "components/Transition";
import style from "./SidebarLayout.module.scss";

const cx = classNames.bind(style);

function MainSidebar({ actived }) {
  const firstRender = useSelector((state) => state.control.sidebar === "start");
  const [isActived, setIsActived] = useState(false);
  const [closeMenu, setCloseMenu] = useState(0);

  const handleBtnCLick = (e) => {
    e.stopPropagation();
    setIsActived(!isActived);
  };

  useEffect(() => {
    setIsActived(false);
  }, [closeMenu]);

  return (
    <Transition enable={!firstRender} actived={actived} leftToRight>
      <div
        className={cx("main-sidebar")}
        onMouseLeave={() => setCloseMenu((prev) => prev + 1)}
        onClick={() => setCloseMenu((prev) => prev + 1)}
      >
        <SidebarHeader closeMenu={closeMenu} />
        <div className={cx("body")}>
          <ChatList />
          <div className={cx("seperate")}>
            <div></div>
          </div>
          <ContactList />
        </div>
        <div className={cx("icon")}>
          <Button onClick={handleBtnCLick} animationTime={800}>
            {isActived ? <AiOutlineClose /> : <HiPencil />}
          </Button>
          <Menu
            menuItems={newMessageMenu}
            actived={isActived}
            width={200}
            x={-180}
            y={-142}
            transformOrigin="bottom right"
          />
        </div>
      </div>
    </Transition>
  );
}

export default MainSidebar;
