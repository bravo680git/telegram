import classNames from "classnames/bind";
import AvatarItem from "../AvatarItem";
import style from "./ChatItem.module.scss";

const cx = classNames.bind(style);

function ChatItem({ large, hover }) {
  return (
    <div className={cx("wrapper", { large, hover })}>
      <div className={cx("container")}>
        <div className={cx("chat-info")}>
          <div className={cx("avatar")}>
            <AvatarItem name="Hao" />
          </div>
          <div className={cx("info")}>
            <div className={cx("name")}>Hao</div>
            <div className={cx("status")}>Last seen 58 minutes ago</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatItem;
