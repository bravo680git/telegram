import { useState, useEffect, useRef } from "react";
import classNames from "classnames/bind";

import style from "./NotifyText.module.scss";

const cx = classNames.bind(style);

function NotifyText({ children, time }) {
  const [actived, setActived] = useState(true);
  const ref = useRef();

  useEffect(() => {
    ref.current.style.setProperty("--delay", time - 1500 + "ms");
    const id = setTimeout(() => setActived(false), time);

    return () => clearTimeout(id);
  }, [time]);
  return (
    actived && (
      <div ref={ref} className={cx("wrapper")}>
        {children}
      </div>
    )
  );
}

export default NotifyText;
