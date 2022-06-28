import classNames from "classnames/bind";
import { HiOutlineBookmark } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";

import { setCurrentChat } from "../../store/slices/chatSlice";
import AvatarItem from "../AvatarItem";
import ClickAnimation from "../ClickAnimation";
import style from "./ChatItem.module.scss";

const cx = classNames.bind(style);

function ChatItem({ data, large, hover, canActived, animation = true }) {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.chat.currentChat?.id);
  const { name, status, date, id: dataId } = data;

  const handleClick = () => {
    dispatch(
      setCurrentChat({ name: data.name, status: data.status, id: data.id })
    );
  };

  return (
    <div
      className={cx("wrapper", {
        large,
        hover,
        actived: canActived && id === data.id,
      })}
      onClick={handleClick}
    >
      <ClickAnimation enable={animation}>
        <div className={cx("container")}>
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
