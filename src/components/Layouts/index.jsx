import classNames from "classnames/bind";
import SideBar from "./Sidebar";
import Content from "./Content";
import style from "./Layout.module.scss";

import * as Sidebars from "./SidebarLayout";
import * as Contents from "./ContentLayout";

const cx = classNames.bind(style);

function Layout({ sidebar, content }) {
  let SidebarLayout, ContentLayout;

  switch (sidebar) {
    case "main":
      SidebarLayout = Sidebars.MainSidebar;
      break;

    case "contact":
      SidebarLayout = Sidebars.ContactSidebar;
      break;

    default:
      console.log("Invalid component");
      break;
  }

  switch (content) {
    case "main":
      ContentLayout = Contents.MainContent;
      break;

    default:
      console.log("Invalid component");
      break;
  }

  return (
    <div className={cx("wrapper")}>
      <SideBar>
        <SidebarLayout />
      </SideBar>
      <Content>
        <ContentLayout />
      </Content>
    </div>
  );
}

export default Layout;
