import { useState, useRef, useEffect } from "react";
import classNames from "classnames/bind";

import style from "./ClickAniamtion.module.scss";

const cx = classNames.bind(style);

function ClickAnimation({ children, enable = true, duration = 1000, style }) {
  const ref = useRef();
  const [actived, setActived] = useState(false);

  const handleClick = () => {
    setActived(true);

    setTimeout(() => setActived(false), duration);
  };

  useEffect(() => {
    const element = ref.current;

    element.style.setProperty("--animation-time", duration + "ms");
    element.addEventListener("mousemove", (e) => {
      element.style.setProperty("--mouse-x", e.offsetX + "px");
      element.style.setProperty("--mouse-y", e.offsetY + "px");
    });
  }, [duration]);

  return (
    <div
      ref={ref}
      style={style}
      className={cx("wrapper", {
        actived: enable && actived,
      })}
      onClick={handleClick}
    >
      {children}
    </div>
  );
}

export default ClickAnimation;
