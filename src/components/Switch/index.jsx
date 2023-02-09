import classnames from "classnames/bind";
import style from "./Switch.module.scss";

const cx = classnames.bind(style);

function Switch({ width, height, actived, onClick }) {
  return (
    <div
      className={cx("container", { actived })}
      style={{ "--w": width + "px", "--h": height + "px" }}
      onClick={onClick}
    >
      <div></div>
    </div>
  );
}

export default Switch;
