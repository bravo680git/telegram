import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames/bind";
import { setCurrentChat } from "../../store/slices/chatSlice";
import AvatarItem from "../AvatarItem";
import style from "./ChatItem.module.scss";

const cx = classNames.bind(style);

function ChatItem({ data, large, hover, canActived }) {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.chat.currentChat?.id);
  const { name, status, date } = data;

  return (
    <div
      className={cx("wrapper", {
        large,
        hover,
        actived: canActived && id === data.id,
      })}
      onClick={() =>
        dispatch(
          setCurrentChat({ name: data.name, status: data.status, id: data.id })
        )
      }
    >
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
