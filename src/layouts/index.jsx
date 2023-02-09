import { useEffect } from "react";
import classNames from "classnames/bind";
import SideBar from "./Sidebar";
import Content from "./Content";
import style from "./Layout.module.scss";
import { useSelector } from "react-redux";

import * as Sidebars from "./SidebarLayout";
import * as Contents from "./ContentLayout";
import * as RightSidebars from "./RightSidebarLayout";

const cx = classNames.bind(style);

function Layout() {
  const { sidebar, content, rightSidebar } = useSelector(
    (state) => state.control
  );

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", "light");
  }, []);

  return (
    <div className={cx("wrapper")}>
      <SideBar actived>
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
      <Content>
        <Contents.MainContent actived={content === "main"} />
      </Content>
      <SideBar actived={rightSidebar}>
        <RightSidebars.ProfileSidebarLayout
          actived={rightSidebar === "profile"}
        />
        <RightSidebars.EditProfileSidebarLayout
          actived={rightSidebar === "editprofile"}
        />
      </SideBar>
    </div>
  );
}

export default Layout;
