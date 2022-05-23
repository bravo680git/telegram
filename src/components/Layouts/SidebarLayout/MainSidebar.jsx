import classNames from "classnames/bind";
import { SidebarHeader } from "../../Header";
import ChatList from "../../ChatList";
import ContactList from "../../ContactList";
import style from "./SidebarLayout.module.scss";

const cx = classNames.bind(style);

function MainSidebar() {
  return (
    <div className={cx("main-sidebar")}>
      <SidebarHeader />
      <div className={cx("body")}>
        <ChatList />
        <div className={cx("seperate")}></div>
        <ContactList />
      </div>
    </div>
  );
}

export default MainSidebar;
