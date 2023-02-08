import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import classNames from "classnames/bind";
import { AiOutlineArrowLeft, AiOutlinePhone } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { HiPencil } from "react-icons/hi";

import Button from "components/Button";
import AvatarItem from "components/AvatarItem";
import MenuItem from "components/Menu/MenuItem";
import SlideTransition from "components/SlideTransition";
import MenuGroup from "components/MenuGroup";
import NotifyText from "components/NotifyText";
import ClickAnimation from "components/ClickAnimation";
import { setting } from "utils/fakeData";
import { setSidebarControl } from "store/slices/controlSlices";
import settingItems from "utils/settingsSidebar";
import { clickAnimationDuration } from "utils/constansts";
import { getSettingValue } from "utils/functions";
import style from "./SidebarLayout.module.scss";

const cx = classNames.bind(style);
function SettingSidebar({ actived }) {
  const dispatch = useDispatch();
  const notifyTextShowTime = 3000;
  const [menuItems, setMenuItems] = useState([settingItems]);
  const [headerTitle, setHeaderTitle] = useState("Settings");
  const [notifyTextShow, setNotifyTextShow] = useState(false);
  const [mainKey, setMainKey] = useState();
  const [keys, setKeys] = useState([]);
  const menuLength = useRef(1);

  const handleBack = () => {
    if (menuItems.length === 1) {
      dispatch(setSidebarControl("main"));
    } else {
      setMenuItems([...menuItems.slice(0, menuItems.length - 1)]);
      setHeaderTitle("Settings");
      setKeys([...keys.slice(0, keys.length - 1)]);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(setting.info.phone.value);
    setNotifyTextShow(true);
  };

  const handleClick = (item, keyArr) => {
    if (item.sub) {
      setMenuItems([...menuItems, item.sub]);
      setHeaderTitle(item.text);
      setMainKey(item.key);
      setKeys([...keys, keyArr]);
    }
  };

  useEffect(() => {
    const tId = setTimeout(() => setNotifyTextShow(false), notifyTextShowTime);

    return () => clearTimeout(tId);
  }, [notifyTextShow]);

  useEffect(() => {
    menuLength.current = menuItems.length;
  }, [menuItems]);

  return (
    <SlideTransition
      actived={actived && menuItems.length}
      enable
      direction={
        menuLength.current > 1
          ? menuItems.length < menuLength.current
            ? "L_R_R"
            : "R_L_L"
          : "R_L_R"
      }
    >
      <div className={cx("setting-sidebar")}>
        <div className={cx("header")}>
          <div className={cx("back")} onClick={handleBack}>
            <AiOutlineArrowLeft />
          </div>
          <div className={cx("title")}>{headerTitle}</div>
          <div className={cx("ultils")}>
            {menuItems.length === 1 && (
              <>
                <Button className={cx("btn")}>
                  <HiPencil />
                </Button>
                <Button className={cx("btn")}>
                  <BsThreeDotsVertical />
                </Button>
              </>
            )}
          </div>
        </div>

        <div className={cx("body")}>
          {menuItems.length === 1 ? (
            <>
              <div className={cx("info")}>
                <div className={cx("profile")}>
                  <div className={cx("avatar")}>
                    <AvatarItem name={setting.info.name.value} />
                  </div>
                  <div className={cx("name")}>{setting.info.name.value}</div>
                  <div className={cx("status")}>
                    {setting.info.status.value}
                  </div>
                </div>
                <div className={cx("phone")}>
                  <ClickAnimation>
                    <MenuItem
                      bottomText="Phone"
                      large
                      round
                      Icon={AiOutlinePhone}
                      text={setting.info.phone.value}
                      onClick={copyToClipboard}
                    />
                  </ClickAnimation>
                  {notifyTextShow && (
                    <NotifyText time={notifyTextShowTime}>
                      Phone copied to clipboard
                    </NotifyText>
                  )}
                </div>
              </div>
              <div className={cx("seperate")}>
                <div></div>
              </div>
              <div className={cx("setting-menu")}>
                {menuItems[0].map((item, index) => (
                  <ClickAnimation key={index}>
                    <MenuItem
                      large
                      round
                      Icon={item.icon}
                      text={item.text}
                      onClick={() => handleClick(item, item.key)}
                      value={setting[item.key].value}
                      rightText={setting[item.key].rightText}
                      delay={clickAnimationDuration}
                    />
                  </ClickAnimation>
                ))}
              </div>
            </>
          ) : (
            <>
              {menuItems[menuItems.length - 1].map((group, index) => (
                <MenuGroup key={index} title={group.title}>
                  {group.sub.map((item, index) => (
                    <ClickAnimation duration={800} key={index}>
                      <MenuItem
                        text={item.text}
                        value={getSettingValue(
                          keys,
                          setting,
                          group.key,
                          item.key
                        )}
                        group={group.title || mainKey}
                        Icon={item.icon}
                        checkbox={item.checkbox}
                        range={item.range}
                        radio={item.radio}
                        large
                        round
                        delay={0}
                        onClick={() => handleClick(item, [group.key, item.key])}
                      />
                    </ClickAnimation>
                  ))}
                </MenuGroup>
              ))}
            </>
          )}
        </div>
      </div>
    </SlideTransition>
  );
}

export default SettingSidebar;
