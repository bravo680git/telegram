import { useState, useEffect } from "react";
import classNames from "classnames/bind";

import style from "./NotifyText.module.scss";

const cx = classNames.bind(style);

function NotifyText({ children, time }) {
  const [actived, setActived] = useState(true);
  useEffect(() => {
    const id = setTimeout(() => setActived(false), time);

    return () => clearTimeout(id);
  }, [time]);
  return actived && <div className={cx("wrapper")}>{children}</div>;
}

export default NotifyText;
