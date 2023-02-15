import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import classNames from "classnames/bind";

import SwitchBtn from "components/Switch";
import Checkbox from "components/Checkbox";
import {
  setSidebarControl,
  setContentControl,
  setRightSidebarControl,
  toogleOthersControl,
} from "store/slices/controlSlices";
import { setCurrentChat } from "store/slices/chatSlice";
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
  type,

  control,
  href,
  onClick,
  currentChat,

  range,
  radio,
  checkbox,
  switchBtn,

  round,
  large,

  delay = 0,
}) {
  const dispatch = useDispatch();
  const [actived, setActived] = useState(false);
  const [checked, setChecked] = useState(value);
  const [subText, setSubText] = useState(bottomText);
  const [rangeValue, setRangeValue] = useState(range ? value : 12);
  const ref = useRef();

  const handleChangeControl = () => {
    switch (control.split("-")[0]) {
      case "sidebar":
        dispatch(setSidebarControl(control.split("-")[1]));
        break;

      case "content":
        dispatch(setContentControl(control.split("-")[1]));
        break;

      case "rightsidebar":
        dispatch(setRightSidebarControl(control.split("-")[1]));
        break;

      case "others":
        dispatch(toogleOthersControl(control.split("-")[1]));
        break;

      default:
        console.log("Invalid component type");
        break;
    }
  };

  const handleCLick = () => {
    setActived(true);
    setTimeout(() => {
      if (checkbox || switchBtn) setChecked((state) => !state);
      if (radio) setChecked(true);
      if (onClick) onClick();
      if (href) return window.open(href);
      if (control) return handleChangeControl();
      if (currentChat) return dispatch(setCurrentChat(currentChat));
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
      className={cx("menu-item", {
        large,
        round,
        actived,
        range,
        [type]: type,
      })}
      onClick={!range ? handleCLick : () => {}}
      ref={ref}
    >
      {checkbox ? (
        <Checkbox checked={checked} className={cx("checkbox")} size={20} />
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
        {switchBtn && (
          <div className={cx("switch-btn")}>
            <SwitchBtn width={30} height={20} actived={checked} />
          </div>
        )}
      </div>
    </div>
  );
}

export default MenuItem;
