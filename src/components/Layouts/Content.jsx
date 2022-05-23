import classNames from "classnames/bind";
import style from "./Layout.module.scss";

const cx = classNames.bind(style);

function Content({ children }) {
  return <main className={cx("content")}>{children}</main>;
}

export default Content;
