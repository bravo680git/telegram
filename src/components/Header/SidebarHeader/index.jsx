import { useState } from "react";
import classNames from "classnames/bind";
import { BiSearch } from "react-icons/bi";
import { AiOutlineMenu, AiOutlineArrowLeft } from "react-icons/ai";
import Menu from "../../Menu";
import style from "./SidebarHeader.module.scss";

const cx = classNames.bind(style);

function SidebarHeader() {
  const [isFocus, setIsFocus] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

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
            onClick={() => setOpenMenu(!openMenu)}
          />
        )}

        <div className={cx("menu")}>
          <Menu />
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
