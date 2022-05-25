import classNames from "classnames/bind";
import { MainHeader } from "../../Header";
import style from "./ContentLayout.module.scss";

const cx = classNames.bind(style);

function MainContentLayout() {
  return (
    <div className={cx("main-content")}>
      <MainHeader />
    </div>
  );
}

export default MainContentLayout;
