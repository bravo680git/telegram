import { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HiOutlineBookmark } from "react-icons/hi";
import classNames from "classnames/bind";

import { setCurrentChat } from "../../store/slices/chatSlice";
import AvatarItem from "../AvatarItem";
import { clickAnimationSolving } from "../../utils/functions";
import style from "./ChatItem.module.scss";

const cx = classNames.bind(style);

function ChatItem({ data, large, hover, canActived, animationTime = 400 }) {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.chat.currentChat?.id);
  const { name, status, date, id: dataId } = data;

  const ref = useRef();
  const [animationActived, setAnimationActived] = useState(false);

  const handleClick = () => {
    setAnimationActived(true);
    dispatch(
      setCurrentChat({ name: data.name, status: data.status, id: data.id })
    );
    setTimeout(() => setAnimationActived(false), animationTime);
  };

  useEffect(() => {
    ref.current.addEventListener("mousemove", (e) =>
      clickAnimationSolving(e, ref, animationTime)
    );
  }, [animationTime]);

  return (
    <div
      ref={ref}
      className={cx("wrapper", {
        large,
        hover,
        actived: canActived && id === data.id,
        "animation-actived": animationActived,
      })}
      onClick={handleClick}
    >
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
    </div>
  );
}

export default ChatItem;
