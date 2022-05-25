import { useState } from "react";
import classNames from "classnames/bind";
import { AiOutlinePlus } from "react-icons/ai";
import { SidebarHeader } from "../../Header";
import ContactList from "../../ContactList";
import style from "./SidebarLayout.module.scss";

const cx = classNames.bind(style);

function ContactSidebar() {
  const [isActived, setIsActived] = useState(false);

  return (
    <div className={cx("contact-sidebar")}>
      <SidebarHeader focused />
      <div className={cx("scroll")}>
        <div className={cx("body")}>
          <ContactList fullSize />
        </div>
      </div>

      <div
        className={cx("add-icon", { actived: isActived })}
        onClick={() => setIsActived(true)}
      >
        <AiOutlinePlus />
      </div>
    </div>
  );
}

export default ContactSidebar;
