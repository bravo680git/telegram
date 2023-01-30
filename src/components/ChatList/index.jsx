import { useDispatch } from "react-redux";
import classNames from "classnames/bind";

import ChatItem from "../ChatItem";
import { setCurrentChat } from "store/slices/chatSlice";
import style from "./ChatList.module.scss";

import { chats } from "utils/fakeData";

const cx = classNames.bind(style);

function ChatList() {
  const dispatch = useDispatch();

  const handleClick = (data) => {
    dispatch(
      setCurrentChat({ name: data.name, status: data.status, id: data.id })
    );
  };

  return (
    <div className={cx("wrapper")}>
      {chats.map((item, index) => (
        <div key={index} className={cx("item-container")}>
          <ChatItem
            data={item}
            large
            hover
            canActived
            onClick={() => handleClick(item)}
          />
        </div>
      ))}
    </div>
  );
}

export default ChatList;
