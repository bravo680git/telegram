import classNames from "classnames/bind";
import ChatItem from "../ChatItem";
import style from "./ContactList.module.scss";

const cx = classNames.bind(style);

function ContactList({ fullSize, onClick }) {
  const contacts = [
    {
      id: 5,
      name: "Hao",
      status: "Hao joined telegram",
    },
    {
      id: 6,
      name: "Nhien",
      status: "Hao joined telegram",
    },
    {
      id: 7,
      name: "Binh",
      status: "Hao joined telegram",
    },
    {
      id: 8,
      name: "Huy",
      status: "Hao joined telegram",
    },
    {
      id: 9,
      name: "Hao",
      status: "Hao joined telegram",
    },
    {
      id: 10,
      name: "Nhien",
      status: "Hao joined telegram",
    },
    {
      id: 11,
      name: "Binh",
      status: "Hao joined telegram",
    },
    {
      id: 12,
      name: "Huy",
      status: "Hao joined telegram",
    },
  ];

  return (
    <div className={cx("wrraper")} onClick={onClick}>
      {!fullSize ? <div className={cx("title")}>Contacts</div> : null}
      {contacts.map((item, index) => (
        <div key={index}>
          <ChatItem data={item} hover large={fullSize} canActived />
        </div>
      ))}
    </div>
  );
}

export default ContactList;
