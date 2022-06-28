import classNames from "classnames/bind";
import style from "./Button.module.scss";
import ClickAnimation from "../ClickAnimation";

const cx = classNames.bind(style);

function Button({ children, onClick, className, animationTime }) {
  return (
    <div className={cx("wrapper", className)} onClick={onClick}>
      <ClickAnimation
        duration={animationTime}
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {children}
      </ClickAnimation>
    </div>
  );
}

export default Button;
