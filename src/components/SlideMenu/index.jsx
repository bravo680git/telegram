import { useState } from "react";
import classNames from "classnames/bind";
import style from "./SlideMenu.module.scss";

const cx = classNames.bind(style);

function SlideMenu({ btnList, tickSize = 10, onClick, setActivedItem }) {
  const [activedIndex, setActiveIndex] = useState(0);

  const handleClickMenu = (i) => {
    setActiveIndex(i);
    if (setActivedItem) {
      setActivedItem(btnList[i]);
    }
  };

  return (
    <div className={cx("wrapper")}>
      <div
        className={cx("slide-menu")}
        style={{
          "--left":
            (100 / btnList.length - tickSize) / 2 +
            (100 / btnList.length) * activedIndex +
            "%",
          "--tick-size": tickSize + "%",
        }}
        onClick={onClick}
      >
        {btnList.map((item, index) => (
          <button
            key={index}
            className={cx("item", { actived: activedIndex === index })}
            onClick={() => handleClickMenu(index)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SlideMenu;
