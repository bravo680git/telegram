import classNames from "classnames/bind";
import style from "./Layout.module.scss";

const cx = classNames.bind(style);

function SideBar({ children, actived }) {
  return <aside className={cx("sidebar", { actived })}>{children}</aside>;
}

export default SideBar;
