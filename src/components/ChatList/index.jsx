import classNames from "classnames/bind";
import ChatItem from "../ChatItem";
import style from "./ChatList.module.scss";

const cx = classNames.bind(style);

function ChatList() {
  const chatList = [
    {
      id: 1,
      name: "Hao",
      status: "Hao joined telegram",
      date: "May 4",
    },
    {
      id: 2,
      name: "Nhien",
      status: "nhien joined telegram",
      date: "May 10",
    },
    {
      id: 3,
      name: "Binh",
      status: "Binh joined telegram",
      date: "May 19",
    },
    {
      name: "Saved Mesages",
      id: "savedMessages",
      status: "New mesages!",
    },
  ];

  return (
    <div className={cx("wrapper")}>
      {chatList.map((item, index) => (
        <div key={index} className={cx("item-container")}>
          <ChatItem data={item} large hover canActived />
        </div>
      ))}
    </div>
  );
}

export default ChatList;
