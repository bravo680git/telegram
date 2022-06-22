import classNames from "classnames/bind";
import { BsCheck2, BsCheck2All } from "react-icons/bs";
import style from "./MessageItem.module.scss";

const cx = classNames.bind(style);

function MessageItem({ left, center, children, time, received, seen }) {
  return (
    <div className={cx("wrapper", { left, center })}>
      <div className={cx("content")}>
        <div className={cx("message")}>
          {children}
          <div className={cx("detail")}>
            <span className={cx("time")}>{time}</span>
            <div className={cx("status-icon")}>
              {seen ? <BsCheck2All /> : received ? <BsCheck2 /> : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessageItem;
