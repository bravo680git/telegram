import { useSelector } from "react-redux";
import classNames from "classnames/bind";
import { MainHeader } from "../../components/Header";
import Messages from "../../components/Messages";
import style from "./ContentLayout.module.scss";

const cx = classNames.bind(style);

function MainContentLayout() {
  const data = useSelector((state) => state.chat.currentChat);

  return (
    <div className={cx("main-content")}>
      {data && (
        <>
          <MainHeader data={data} />
          <Messages />
        </>
      )}
    </div>
  );
}

export default MainContentLayout;
