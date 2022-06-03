import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames/bind";
import { AiOutlineArrowLeft, AiOutlinePhone } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { HiPencil } from "react-icons/hi";

import style from "./SidebarLayout.module.scss";
import Button from "../../components/Button";
import AvatarItem from "../../components/AvatarItem";
import MenuItem from "../../components/Menu/MenuItem";
import settingItems from "../../utils/settingsSidebar";
import { setSidebarControl } from "../../store/slices/controlSlices";

const cx = classNames.bind(style);

function SettingSidebar() {
  const dispatch = useDispatch();
  const sidebarControl = useSelector((state) => state.control.sidebar);
  const [menuItems, setMenuItems] = useState([settingItems]);

  const handleBack = () => {
    if (sidebarControl === "settings") {
      dispatch(setSidebarControl("main"));
    }
  };

  return (
    <div className={cx("seting-sidebar")}>
      <div className={cx("header")}>
        <div className={cx("back")} onClick={handleBack}>
          <AiOutlineArrowLeft />
        </div>
        <div className={cx("title")}>Settings</div>
        <div className={cx("ultils")}>
          <Button width={40} height={40} Icon={HiPencil} />
          <Button width={40} height={40} Icon={BsThreeDotsVertical} />
        </div>
      </div>

      <div className={cx("info")}>
        <div className={cx("profile")}>
          <div className={cx("avatar")}>
            <AvatarItem name="Quoc Nhien" />
          </div>
          <div className={cx("name")}>Quoc Nhien</div>
          <div className={cx("status")}>last seen 2 minutes ago</div>
        </div>

        <div className={cx("phone")}>
          <MenuItem
            bottomText="Phone"
            large
            round
            Icon={AiOutlinePhone}
            text="+84 946694231"
          />
        </div>
      </div>

      <div className={cx("seperate")}>
        <div></div>
      </div>

      <div className={cx("setting-menu")}>
        {menuItems[menuItems.length - 1].map((item, index) => (
          <MenuItem large round key={index} Icon={item.icon} text={item.text} />
        ))}
      </div>
    </div>
  );
}

export default SettingSidebar;
