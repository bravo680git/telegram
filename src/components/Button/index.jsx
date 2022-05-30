import { useRef, useEffect } from "react";
import classNames from "classnames/bind";
import style from "./Button.module.scss";

const cx = classNames.bind(style);

function Button({ Icon, text, onClick, className, width, height }) {
  const btnRef = useRef();

  useEffect(() => {
    const button = btnRef.current;
    button.addEventListener("mousemove", (e) => {
      const x = e.offsetX;
      const y = e.offsetY;
      button.style.setProperty("--mouse-x", x + "px");
      button.style.setProperty("--mouse-y", y + "px");
    });
  }, []);

  if (Icon)
    return (
      <div
        className={cx("wrapper", className)}
        style={{ width, height }}
        onClick={onClick}
        ref={btnRef}
      >
        {<Icon />}
      </div>
    );

  return (
    <div
      className={cx("wrapper", className)}
      style={{ width, height }}
      onClick={onClick}
      ref={btnRef}
    >
      {text}
    </div>
  );
}

export default Button;
