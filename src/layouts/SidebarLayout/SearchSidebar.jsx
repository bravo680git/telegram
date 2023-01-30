import { useDispatch } from "react-redux";
import classNames from "classnames/bind";

import { setSidebarControl } from "store/slices/controlSlices";
import { SidebarHeader } from "components/Header";
import SlideMenu from "components/SlideMenu";
import SlideTransition from "components/SlideTransition";
import style from "./SidebarLayout.module.scss";

const cx = classNames.bind(style);

function SearchSidebar({ actived }) {
  const dispatch = useDispatch();

  return (
    <SlideTransition actived={actived} enable>
      <div className={cx("search-sidebar")}>
        <SidebarHeader focused />
        <SlideMenu
          btnList={["Chats", "Media", "Links", "Files", "Music", "Voice"]}
          tickSize={10}
        />
        <div className={cx("body")}></div>
      </div>
    </SlideTransition>
  );
}

export default SearchSidebar;
