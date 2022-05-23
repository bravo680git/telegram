import classNames from "classnames/bind";
import AvatarItem from "../AvatarItem";
import style from "./ChatItem.module.scss";

const cx = classNames.bind(style);

function ChatItem({ data, large, hover, actived }) {
  const { name, status, date } = data;

  return (
    <div className={cx("wrapper", { large, hover, actived })}>
      <div className={cx("container")}>
        <div className={cx("chat-info")}>
          <div className={cx("avatar")}>
            <AvatarItem name={name} />
          </div>
          <div className={cx("info")}>
            <div className={cx("name")}>{name}</div>
            <div className={cx("status")}>{status}</div>
          </div>
          {date ? <div className={cx("date")}>{date}</div> : null}
        </div>
      </div>
    </div>
  );
}

export default ChatItem;
