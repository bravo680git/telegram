import classNames from "classnames/bind";
import SideBar from "./SideBar";
import Content from "./Content";
import style from "./Layout.module.scss";

const cx = classNames.bind(style);

function Layout({ sideBar, content }) {
  return (
    <div className={cx("wrapper")}>
      <SideBar>{sideBar}</SideBar>
      <Content>{content}</Content>
    </div>
  );
}

export default Layout;
