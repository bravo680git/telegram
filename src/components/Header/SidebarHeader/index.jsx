import classNames from "classnames/bind";
import { useState, useEffect } from "react";
import { AiOutlineArrowLeft, AiOutlineMenu } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import menuItems from "../../../utils/MenuItemsList";
import Menu from "../../Menu";
import style from "./SidebarHeader.module.scss";

const cx = classNames.bind(style);

function SidebarHeader({ closeMenu }) {
  const [isFocus, setIsFocus] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    setOpenMenu(false);
  }, [closeMenu]);

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
          className={cx("input")}
          placeholder="Search"
          onFocus={() => setIsFocus(true)}
        />
      </div>
    </div>
  );
}

export default SidebarHeader;
