import { useState } from "react";
import { useDispatch } from "react-redux";
import classNames from "classnames/bind";
import { AiOutlinePlus } from "react-icons/ai";

import { setSidebarControl } from "../../store/slices/controlSlices";
import { SidebarHeader } from "../../components/Header";
import ContactList from "../../components/ContactList";
import Button from "../../components/Button";
import style from "./SidebarLayout.module.scss";
import Transition from "../../components/Transition";

const cx = classNames.bind(style);

function ContactSidebar({ actived }) {
  const dispatch = useDispatch();
  const [isActived, setIsActived] = useState(false);

  return (
    <Transition actived={actived}>
      <div className={cx("contact-sidebar")}>
        <SidebarHeader focused />
        <div className={cx("body")}>
          <ContactList
            fullSize
            onClick={() => dispatch(setSidebarControl("main"))}
          />
        </div>
        <div
          className={cx("add-icon", { actived: isActived })}
          onClick={() => setIsActived(true)}
        >
          <Button Icon={AiOutlinePlus} />
        </div>
      </div>
    </Transition>
  );
}

export default ContactSidebar;
