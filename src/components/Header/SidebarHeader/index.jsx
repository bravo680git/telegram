import { useDispatch } from "react-redux";
import classNames from "classnames/bind";
import { useState, useEffect, useRef } from "react";
import { AiOutlineArrowLeft, AiOutlineMenu } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";

import { setSidebarControl } from "../../../store/slices/controlSlices";
import Button from "../../Button";
import menuItems from "../../../utils/mainMenuItemsList";
import Menu from "../../Menu";
import style from "./SidebarHeader.module.scss";
import { slideAnimationDuration } from "../../../utils/constansts";

const cx = classNames.bind(style);

function SidebarHeader({ closeMenu, focused }) {
  const ditpatch = useDispatch();

  const [isFocus, setIsFocus] = useState(focused);
  const [openMenu, setOpenMenu] = useState(false);
  const inputRef = useRef();

  const handleBack = () => {
    setIsFocus(false);
    ditpatch(setSidebarControl("main"));
  };

  const handleFocus = () => {
    setIsFocus(true);
    if (!focused) {
      ditpatch(setSidebarControl("search"));
    }
  };

  useEffect(() => {
    setOpenMenu(false);
  }, [closeMenu]);

  useEffect(() => {
    let tId;
    if (focused) {
      tId = setTimeout(() => inputRef.current.focus(), slideAnimationDuration);
    }

    return () => clearTimeout(tId);
  }, [focused]);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("menu-control")}>
        {isFocus ? (
          <AiOutlineArrowLeft className={cx("back")} onClick={handleBack} />
        ) : (
          <Button
            animationTime={500}
            className={cx("menu-icon")}
            onClick={(e) => {
              e.stopPropagation();
              setOpenMenu(!openMenu);
            }}
          >
            <AiOutlineMenu />
          </Button>
        )}

        <Menu
          actived={openMenu}
          menuItems={menuItems}
          footer="Telegram WebK 1.4.3(175)"
          width={300}
          x={40}
          y={4}
          transformOrigin="top left"
        />
      </div>
      <div className={cx("search")}>
        <div className={cx("icon")}>
          <BiSearch />
        </div>
        <input
          ref={inputRef}
          className={cx("input")}
          placeholder="Search"
          onFocus={handleFocus}
        />
      </div>
    </div>
  );
}

export default SidebarHeader;
