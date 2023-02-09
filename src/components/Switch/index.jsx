import classnames from "classnames/bind";
import style from "./Switch.module.scss";

const cx = classnames.bind(style);

function Switch({ width, height, actived }) {
  return (
    <div
      className={cx("container", { actived })}
      style={{ "--w": width + "px", "--h": height + "px" }}
    >
      <div></div>
    </div>
  );
}

export default Switch;
