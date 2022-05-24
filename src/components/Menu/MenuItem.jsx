import classNames from "classnames/bind";
import style from "./Menu.module.scss";

const cx = classNames.bind(style);

function MenuItem({ icon, text, onClick, href }) {
  if (href)
    return (
      <a href={href} className={cx("menu-item")}>
        <div className={cx("icon")}>{icon}</div>
        <div className={cx("text")}>{text}</div>
      </a>
    );

  return (
    <div className={cx("menu-item")} onClick={onClick}>
      <div className={cx("icon")}>{icon}</div>
      <div className={cx("text")}>{text}</div>
    </div>
  );
}

export default MenuItem;
