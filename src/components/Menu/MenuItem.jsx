import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import classNames from "classnames/bind";

import {
  setSidebarControl,
  setContentControl,
} from "../../store/slices/controlSlices";
import style from "./Menu.module.scss";

const cx = classNames.bind(style);

function MenuItem({
  Icon,
  text,
  control,
  href,
  large,
  onClick,
  bottomText,
  rightText,
  round,
  animationTime = 400,
  checkbox,
  title,
}) {
  const dispatch = useDispatch();
  const [actived, setActived] = useState(false);
  const [checked, setChecked] = useState(false);
  const ref = useRef();

  const handleChangeControl = () => {
    switch (control.split("-")[0]) {
      case "sidebar":
        dispatch(setSidebarControl(control.split("-")[1]));
        break;

      case "content":
        dispatch(setContentControl(control.split("-")[1]));
        break;

      default:
        console.log("Invalid component type");
        break;
    }
  };

  const handleCLick = () => {
    setActived(true);
    if (href) return window.open(href);
    if (control) return handleChangeControl();
    if (onClick) onClick();
    setChecked((state) => !state);
  };

  useEffect(() => {
    let tId;
    if (actived) {
      tId = setTimeout(() => setActived(false), animationTime);
    }

    return () => clearTimeout(tId);
  }, [actived, animationTime]);

  useEffect(() => {
    const button = ref.current;
    button.addEventListener("mousemove", (e) => {
      const x = e.offsetX;
      const y = e.offsetY;
      button.style.setProperty("--mouse-x", x + "px");
      button.style.setProperty("--mouse-y", y + "px");
      button.style.setProperty("--animation-time", animationTime * 2 + "ms");
    });
  }, [animationTime]);

  if (title) return <div>{}</div>;

  return (
    <div
      className={cx("menu-item", { large, round, actived })}
      onClick={handleCLick}
      ref={ref}
    >
      {checkbox ? (
        <input
          type="checkbox"
          className={cx("checkbox")}
          checked={checked}
          readOnly
        />
      ) : Icon ? (
        <div className={cx("icon")}>{<Icon />}</div>
      ) : null}
      <div className={cx({ center: !bottomText })}>
        <div className={cx("text")}>{text}</div>
        {bottomText && <div className="bottom-text">{bottomText}</div>}
      </div>
      <div className="rightText">{rightText}</div>
    </div>
  );
}

export default MenuItem;
