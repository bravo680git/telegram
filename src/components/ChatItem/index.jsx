import { useSelector } from "react-redux";
import classNames from "classnames/bind";
import { HiOutlineBookmark } from "react-icons/hi";

import AvatarItem from "components/AvatarItem";
import Checkbox from "components/Checkbox";
import ClickAnimation from "components/ClickAnimation";
import style from "./ChatItem.module.scss";

const cx = classNames.bind(style);

function ChatItem({
  data,
  large,
  hover,
  checkbox,
  canActived,
  animation = true,
  onClick,
  checked,
}) {
  const id = useSelector((state) => state.chat.currentChat?.id);
  const { name, status, date, id: dataId } = data;

  return (
    <div
      className={cx("wrapper", {
        large,
        hover,
        actived: canActived && id === data.id,
      })}
      onClick={onClick}
    >
      <ClickAnimation enable={animation}>
        <div className={cx("container")}>
          {checkbox && (
            <Checkbox className={cx("checkbox")} checked={checked} />
          )}
          <div className={cx("chat-info")}>
            <div className={cx("avatar")}>
              <AvatarItem
                name={name}
                Icon={dataId === "savedMessages" ? HiOutlineBookmark : null}
              />
            </div>
            <div className={cx("info")}>
              <div className={cx("name")}>{name}</div>
              <div className={cx("status")}>{status}</div>
            </div>
            {date ? <div className={cx("date")}>{date}</div> : null}
          </div>
        </div>
      </ClickAnimation>
    </div>
  );
}

export default ChatItem;
