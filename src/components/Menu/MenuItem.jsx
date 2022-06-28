import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import classNames from "classnames/bind";

import {
  setSidebarControl,
  setContentControl,
} from "../../store/slices/controlSlices";
import { setCurrentChat } from "../../store/slices/chatSlice";
import style from "./Menu.module.scss";

const cx = classNames.bind(style);

function MenuItem({
  Icon,
  text,
  rightText,
  title,
  value,
  bottomText,
  group,

  control,
  href,
  onClick,
  currentChat,

  range,
  radio,
  checkbox,

  round,
  large,

  delay = 0,
}) {
  const dispatch = useDispatch();
  const [actived, setActived] = useState(false);
  const [checked, setChecked] = useState(value);
  const [subText, setSubText] = useState(bottomText);
  const [rangeValue, setRangeValue] = useState(12);
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
    setTimeout(() => {
      if (href) return window.open(href);
      if (control) return handleChangeControl();
      if (currentChat) return dispatch(setCurrentChat(currentChat));
      if (onClick) onClick();
      if (checkbox) setChecked((state) => !state);
      if (radio) setChecked(true);
    }, delay);
  };

  useEffect(() => {
    if (typeof value === "string") {
      setSubText(value);
    }
  }, [value]);

  if (title) return <div>{title}</div>;

  return (
    <div
      className={cx("menu-item", { large, round, actived, range })}
      onClick={!range ? handleCLick : () => {}}
      ref={ref}
    >
      {checkbox ? (
        <input
          type="checkbox"
          className={cx("checkbox")}
          checked={checked}
          readOnly
        />
      ) : radio ? (
        <input
          type="radio"
          name={group}
          className={cx("checkbox")}
          checked={checked}
          readOnly
        />
      ) : range ? (
        <input
          type="range"
          min={12}
          max={20}
          value={rangeValue}
          onChange={(e) => setRangeValue(e.target.value)}
        />
      ) : Icon ? (
        <div className={cx("icon")}>{<Icon />}</div>
      ) : null}

      <div className={cx({ center: !subText })}>
        <div className={cx("text")}>{text}</div>
        <div className={cx("right-text")}>{range ? rangeValue : rightText}</div>
        {subText && <div className={cx("bottom-text")}>{subText}</div>}
      </div>
    </div>
  );
}

export default MenuItem;
