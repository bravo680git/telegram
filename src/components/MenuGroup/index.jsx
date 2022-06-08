import classNames from "classnames/bind";

import style from "./Menugroup.module.scss";

const cx = classNames.bind(style);

function MenuGroup({ title, children }) {
  return (
    <div className={cx("wrapper")}>
      {title && <div className={cx("title")}> {title}</div>}
      {children}
    </div>
  );
}

export default MenuGroup;
