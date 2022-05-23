import classNames from "classnames/bind";
import ChatItem from "../ChatItem";
import style from "./ContactList.module.scss";

const cx = classNames.bind(style);

function ContactList({ fullSize }) {
  const contacts = [
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
    {
      name: "Huy",
      status: "Hao joined telegram",
    },
  ];

  return (
    <div className={cx("wrraper")}>
      {!fullSize ? <div className={cx("title")}>Contacts</div> : null}
      {contacts.map((item, index) => (
        <div key={index}>
          <ChatItem data={item} hover large={fullSize} />
        </div>
      ))}
    </div>
  );
}

export default ContactList;
