import classNames from "classnames/bind";
import style from "./Layout.module.scss";
import SidebarHeader from "../Header/SidebarHeader";

const cx = classNames.bind(style);

function SideBar({ children }) {
  return (
    <aside className={cx("sidebar")}>
      <SidebarHeader />
      {children}
    </aside>
  );
}

export default SideBar;
