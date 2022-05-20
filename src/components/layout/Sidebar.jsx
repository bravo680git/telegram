import classNames from "classnames/bind";
import style from "./Layout.module.scss";

const cx = classNames.bind(style);

function SideBar({ children }) {
  return <aside className={cx("sidebar")}>{children}</aside>;
}

export default SideBar;
