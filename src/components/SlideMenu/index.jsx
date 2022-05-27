import { useState } from "react";
import classNames from "classnames/bind";
import style from "./SlideMenu.module.scss";

const cx = classNames.bind(style);

function SlideMenu() {
  const btnList = ["chats", "media", "links", "files", "music", "voice"];
  const [activedIndex, setActiveIndex] = useState(0);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("slide-menu")}>
        {btnList.map((item, index) => (
          <button
            key={index}
            className={cx("item", { actived: index === activedIndex })}
            onClick={() => setActiveIndex(index)}
          >
            {item.slice(0, 1).toUpperCase() + item.slice(1, item.length)}
          </button>
        ))}
      </div>

      <div className={cx("result")}></div>
    </div>
  );
}

export default SlideMenu;
