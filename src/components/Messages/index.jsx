import classNames from "classnames/bind";
import MessageItem from "../MessageItem";
import style from "./Messages.module.scss";

import data from "../../api/fake/messages";

const cx = classNames.bind(style);

function Messages() {
  return (
    <div className={cx("warpper")}>
      <div className={cx("content")}>
        <div className={cx("body")}>
          {data.map((item, index) => (
            <MessageItem
              key={index}
              left={item.sender !== "a"}
              time={item.time}
              received={item.received}
              seen={item.seen}
            >
              {item.message}
            </MessageItem>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Messages;
