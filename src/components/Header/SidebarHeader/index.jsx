import classNames from "classnames/bind";
import { useState, useEffect, useRef } from "react";
import { AiOutlineArrowLeft, AiOutlineMenu } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import menuItems from "../../../utils/mainMenuItemsList";
import Menu from "../../Menu";
import style from "./SidebarHeader.module.scss";

const cx = classNames.bind(style);

function SidebarHeader({ closeMenu, focused }) {
  const [isFocus, setIsFocus] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    setOpenMenu(false);
  }, [closeMenu]);

  useEffect(() => {
    if (focused) {
      inputRef.current.focus();
    }
  }, [focused]);

  return (
    <div className={cx("wrapper")}>
      <div
        className={cx("menu-control", {
          active: openMenu,
          unActive: !openMenu,
        })}
      >
        {isFocus ? (
          <AiOutlineArrowLeft
            className={cx("back")}
            onClick={() => setIsFocus(false)}
          />
        ) : (
          <AiOutlineMenu
            className={cx("menu-icon")}
            onClick={(e) => {
              e.stopPropagation();
              setOpenMenu(!openMenu);
            }}
          />
        )}

        <div className={cx("menu")} onClick={(e) => e.stopPropagation()}>
          <Menu menuItems={menuItems} footer="Telegram WebK 1.4.3(175)" />
        </div>
      </div>
      <div className={cx("search")}>
        <div className={cx("icon")}>
          <BiSearch />
        </div>
        <input
          ref={inputRef}
          className={cx("input")}
          placeholder="Search"
          onFocus={() => setIsFocus(true)}
        />
      </div>
    </div>
  );
}

export default SidebarHeader;
