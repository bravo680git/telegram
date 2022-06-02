import { useDispatch } from "react-redux";
import classNames from "classnames/bind";
import {
  setSidebarControl,
  setContentControl,
} from "../../store/slices/controlSlices";
import style from "./Menu.module.scss";

const cx = classNames.bind(style);

function MenuItem({ Icon, text, control, href, large }) {
  const dispatch = useDispatch();
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

  if (href)
    return (
      <a href={href} className={cx("menu-item", { large })}>
        <div className={cx("icon")}>{<Icon />}</div>
        <div className={cx("text")}>{text}</div>
      </a>
    );

  if (control)
    return (
      <div className={cx("menu-item", { large })} onClick={handleChangeControl}>
        <div className={cx("icon")}>{<Icon />}</div>
        <div className={cx("text")}>{text}</div>
      </div>
    );

  return (
    <div className={cx("menu-item", { large })}>
      <div className={cx("icon")}>{<Icon />}</div>
      <div className={cx("text")}>{text}</div>
    </div>
  );
}

export default MenuItem;
