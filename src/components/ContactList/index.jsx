import classNames from "classnames/bind";
import { useDispatch } from "react-redux";

import ChatItem from "../ChatItem";
import { setCurrentChat } from "store/slices/chatSlice";
import style from "./ContactList.module.scss";

const cx = classNames.bind(style);

function ContactList({ fullSize, onClick, list }) {
  const dispatch = useDispatch();

  const handleClick = (data) => {
    dispatch(
      setCurrentChat({ name: data.name, status: data.status, id: data.id })
    );
  };

  return (
    <div className={cx("wrapper")} onClick={onClick}>
      {!fullSize ? <div className={cx("title")}>Contacts</div> : null}
      {list?.map((item, index) => (
        <div key={index}>
          <ChatItem
            data={item}
            hover
            large={fullSize}
            canActived
            onClick={() => handleClick(item)}
          />
        </div>
      ))}
    </div>
  );
}

export default ContactList;
