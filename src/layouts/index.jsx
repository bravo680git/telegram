import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import SideBar from "./Sidebar";
import Content from "./Content";
import style from "./Layout.module.scss";
import { useSelector, useDispatch } from "react-redux";

import * as Sidebars from "./SidebarLayout";
import * as Contents from "./ContentLayout";
import * as RightSidebars from "./RightSidebarLayout";

import { setSmallScreen, setMultiControls } from "store/slices/controlSlices";

const cx = classNames.bind(style);

function Layout() {
  const { sidebar, content, rightSidebar, smallScreen, darkMode } = useSelector(
    (state) => state.control
  );
  const currentChat = useSelector((state) => state.chat.currentChat);
  const dispatch = useDispatch();
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 920);

  useEffect(() => {
    if (darkMode) {
      document.querySelector("html").setAttribute("data-theme", "dark");
    } else {
      document.querySelector("html").setAttribute("data-theme", "light");
    }
  }, [darkMode]);

  useEffect(() => {
    if (window.innerWidth < 920) {
      dispatch(
        setMultiControls({
          smallScreen: true,
          content: null,
        })
      );
    } else {
      dispatch(
        setMultiControls({
          smallScreen: false,
          content: "main",
        })
      );
    }

    const handleResize = () => {
      if (window.innerWidth < 920) {
        setIsSmallScreen(true);
      } else {
        setIsSmallScreen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isSmallScreen) {
      dispatch(setSmallScreen(true));
    } else {
      dispatch(
        setMultiControls({
          smallScreen: false,
          sidebar: "main",
          content: "main",
        })
      );
    }
  }, [isSmallScreen, dispatch]);

  useEffect(() => {
    if (!smallScreen) return;

    if (rightSidebar !== null) {
      dispatch(
        setMultiControls({
          content: null,
          sidebar: null,
        })
      );
    }
  }, [rightSidebar, dispatch, smallScreen]);

  useEffect(() => {
    if (!smallScreen) return;

    if (currentChat !== null && rightSidebar === null) {
      dispatch(
        setMultiControls({
          sidebar: null,
          content: "main",
        })
      );
    }
  }, [currentChat, rightSidebar, dispatch, smallScreen]);

  return (
    <div className={cx("wrapper")}>
      <SideBar actived={sidebar !== null}>
        <Sidebars.MainSidebar
          actived={sidebar === "main" || sidebar === "start"}
        />
        <Sidebars.SettingSidebar actived={sidebar === "settings"} />
        <Sidebars.ContactSidebar actived={sidebar === "contact"} />
        <Sidebars.SearchSidebar actived={sidebar === "search"} />
        <Sidebars.NewChannelSidebar actived={sidebar === "newchannel"} />
        <Sidebars.NewGroupSidebar actived={sidebar === "newgroup"} />
        <Sidebars.NewPrivateChatSidebar
          actived={sidebar === "newprivatechat"}
        />
      </SideBar>

      <Content actived={content !== null}>
        <Contents.MainContent actived={content === "main"} />
      </Content>

      <SideBar actived={rightSidebar !== null}>
        <RightSidebars.ProfileSidebarLayout
          actived={rightSidebar === "profile"}
        />
        <RightSidebars.EditProfileSidebarLayout
          actived={rightSidebar === "editprofile"}
        />
        <RightSidebars.SearchSidebarLayout
          actived={rightSidebar === "search"}
        />
      </SideBar>
    </div>
  );
}

export default Layout;
