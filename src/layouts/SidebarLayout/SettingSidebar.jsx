import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import classNames from "classnames/bind";
import { AiOutlineArrowLeft, AiOutlinePhone } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { HiPencil } from "react-icons/hi";

import style from "./SidebarLayout.module.scss";
import Button from "../../components/Button";
import AvatarItem from "../../components/AvatarItem";
import MenuItem from "../../components/Menu/MenuItem";
import settingItems from "../../utils/settingsSidebar";
import Transition from "../../components/Transition";
import MenuGroup from "../../components/MenuGroup";
import NotifyText from "../../components/NotifyText";
import settingFakeApi from "../../api/fake/setting";
import ClickAnimation from "../../components/ClickAnimation";
import { setSidebarControl } from "../../store/slices/controlSlices";
import { clickAnimationDuration } from "../../utils/constansts";

const cx = classNames.bind(style);

function SettingSidebar({ actived }) {
  const dispatch = useDispatch();
  const notifyTextShowTime = 3000;
  const [menuItems, setMenuItems] = useState([settingItems]);
  const [headerTitle, setHeaderTitle] = useState("Settings");
  const [notifyTextShow, setNotifyTextShow] = useState(false);
  const [mainKey, setMainKey] = useState();

  const handleBack = () => {
    if (menuItems.length === 1) {
      dispatch(setSidebarControl("main"));
    } else {
      setMenuItems([...menuItems.slice(0, menuItems.length - 1)]);
      setHeaderTitle("Settings");
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText("0388070776");
    setNotifyTextShow(true);
  };

  const handleClick = (item) => {
    if (item.sub) {
      setMenuItems([...menuItems, item.sub]);
      setHeaderTitle(item.text);
      setMainKey(item.key);
    }
  };

  useEffect(() => {
    const tId = setTimeout(() => setNotifyTextShow(false), notifyTextShowTime);

    return () => clearTimeout(tId);
  }, [notifyTextShow]);

  return (
    <Transition actived={actived && menuItems.length}>
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
                    <AvatarItem name={settingFakeApi.info.name} />
                  </div>
                  <div className={cx("name")}>{settingFakeApi.info.name}</div>
                  <div className={cx("status")}>
                    {settingFakeApi.info.status}
                  </div>
                </div>
                <div className={cx("phone")}>
                  <ClickAnimation>
                    <MenuItem
                      bottomText="Phone"
                      large
                      round
                      Icon={AiOutlinePhone}
                      text={settingFakeApi.info.phone}
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
                      onClick={() => handleClick(item)}
                      value={settingFakeApi[item.key]}
                      rightText={settingFakeApi[item.key].rightText}
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
                        value={settingFakeApi[mainKey][group.key][item.key]}
                        group={group.title || mainKey}
                        Icon={item.icon}
                        checkbox={item.checkbox}
                        range={item.range}
                        radio={item.radio}
                        large
                        round
                        delay={0}
                      />
                    </ClickAnimation>
                  ))}
                </MenuGroup>
              ))}
            </>
          )}
        </div>
      </div>
    </Transition>
  );
}

export default SettingSidebar;
