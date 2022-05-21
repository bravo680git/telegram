import classNames from "classnames/bind";
import MainHeader from "../Header/MainHeader.jsx";
import style from "./Layout.module.scss";

const cx = classNames.bind(style);

function Content({ children }) {
  return (
    <main className={cx("content")}>
      <MainHeader />
      {children}
    </main>
  );
}

export default Content;
