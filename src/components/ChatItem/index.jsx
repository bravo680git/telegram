import classNames from "classnames/bind";
import AvatarItem from "../AvatarItem";
import style from "./ChatItem.module.scss";

const cx = classNames.bind(style);

function ChatItem({ data, large, hover, actived }) {
  const { name, status } = data;

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
        </div>
      </div>
    </div>
  );
}

export default ChatItem;
