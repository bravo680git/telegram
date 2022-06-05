import { useDispatch } from "react-redux";
import classNames from "classnames/bind";

import { setSidebarControl } from "../../store/slices/controlSlices";
import { SidebarHeader } from "../../components/Header";
import SlideMenu from "../../components/SlideMenu";
import Transition from "../../components/Transition";
import style from "./SidebarLayout.module.scss";

const cx = classNames.bind(style);

function SearchSidebar({ actived }) {
  const dispatch = useDispatch();

  return (
    actived && (
      <div className={cx("search-sidebar")}>
        <SidebarHeader focused />
        <SlideMenu />
        <div className={cx("body")}></div>
      </div>
    )
  );
}

export default SearchSidebar;
