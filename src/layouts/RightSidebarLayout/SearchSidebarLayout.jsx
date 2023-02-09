import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import classnames from "classnames/bind";
import { AiOutlineArrowLeft, AiOutlineCalendar } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";

import Button from "components/Button";
import SlideTransition from "components/SlideTransition";
import { setRightSidebarControl } from "store/slices/controlSlices";
import style from "./RightSidebarLayout.module.scss";

const cx = classnames.bind(style);

function SearchSidebarLayout({ actived }) {
  const dispatch = useDispatch();
  const inputRef = useRef();
  const { rightSidebar } = useSelector((state) => state.control);

  const handleBack = () => {
    dispatch(setRightSidebarControl("profile"));
  };

  useEffect(() => {
    if (rightSidebar === "search") {
      inputRef.current.focus();
    }
  }, [rightSidebar]);

  return (
    <SlideTransition enable actived={actived} direction="R_L_R">
      <div className={cx("search-sidebar")}>
        <div className={cx("header")}>
          <div className={cx("back-btn")}>
            <Button onClick={handleBack}>
              <AiOutlineArrowLeft />
            </Button>
          </div>

          <div className={cx("search")}>
            <div className={cx("icon")}>
              <BiSearch />
            </div>
            <input
              ref={inputRef}
              className={cx("input")}
              placeholder="Search"
            />
          </div>

          <Button className={cx("calendar")}>
            <AiOutlineCalendar />
          </Button>
        </div>
      </div>
    </SlideTransition>
  );
}

export default SearchSidebarLayout;
