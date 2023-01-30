import { useState } from "react";
import { useDispatch } from "react-redux";
import classNames from "classnames/bind";
import { AiOutlinePlus } from "react-icons/ai";

import { setSidebarControl } from "store/slices/controlSlices";
import { SidebarHeader } from "components/Header";
import ContactList from "components/ContactList";
import Button from "components/Button";
import style from "./SidebarLayout.module.scss";
import SlideTransition from "components/SlideTransition";

const cx = classNames.bind(style);

function ContactSidebar({ actived }) {
  const dispatch = useDispatch();
  const [isActived, setIsActived] = useState(false);

  return (
    <SlideTransition actived={actived} enable>
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
          <Button>
            <AiOutlinePlus />
          </Button>
        </div>
      </div>
    </SlideTransition>
  );
}

export default ContactSidebar;
