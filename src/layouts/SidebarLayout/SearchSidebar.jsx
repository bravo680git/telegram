import { useState } from "react";
import { useDispatch } from "react-redux";
import classNames from "classnames/bind";
import { useSpring, animated } from "@react-spring/web";

import { setSidebarControl } from "../../store/slices/controlSlices";
import { SidebarHeader } from "../../components/Header";
import SlideMenu from "../../components/SlideMenu";
import style from "./SidebarLayout.module.scss";

const cx = classNames.bind(style);

function SearchSidebar() {
  const dispatch = useDispatch();

  return (
    <div className={cx("search-sidebar")}>
      <SidebarHeader focused />
      <SlideMenu />
      <div className={cx("body")}></div>
    </div>
  );
}

export default SearchSidebar;
