import classNames from "classnames/bind";
import ChatItem from "../ChatItem";
import style from "./ChatList.module.scss";

const cx = classNames.bind(style);

function ChatList() {
  const chatList = [
    {
      name: "Hao",
      status: "Hao joined telegram",
    },
    {
      name: "Nhien",
      status: "Hao joined telegram",
    },
    {
      name: "Binh",
      status: "Hao joined telegram",
    },
  ];

  return (
    <div className="wrapper">
      {chatList.map((item, index) => (
        <div key={index} className={cx("item-container")}>
          <ChatItem data={item} large hover actived={index === 1} />
        </div>
      ))}
    </div>
  );
}

export default ChatList;
