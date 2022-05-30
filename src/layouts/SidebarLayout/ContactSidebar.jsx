import { useState } from "react";
import { useDispatch } from "react-redux";
import classNames from "classnames/bind";
import { AiOutlinePlus } from "react-icons/ai";
import { useSpring, animated } from "@react-spring/web";

import { setSidebarControl } from "../../store/slices/controlSlices";
import { SidebarHeader } from "../../components/Header";
import ContactList from "../../components/ContactList";
import Button from "../../components/Button";
import style from "./SidebarLayout.module.scss";

const cx = classNames.bind(style);

function ContactSidebar() {
  const dispatch = useDispatch();
  const [isActived, setIsActived] = useState(false);
  const props = useSpring({
    from: { x: 200, opacity: 0 },
    to: { x: 0, opacity: 1 },
  });

  return (
    <animated.div style={props}>
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
    </animated.div>
  );
}

export default ContactSidebar;
