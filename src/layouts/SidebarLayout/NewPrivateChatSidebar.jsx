import { useState } from "react";
import { useDispatch } from "react-redux";
import classnames from "classnames/bind";
import { AiOutlinePlus } from "react-icons/ai";

import SidebarHeader from "components/Header/SidebarHeader";
import ContactList from "components/ContactList";
import SlideTransition from "components/SlideTransition";
import Button from "components/Button";
import AddContactPopup from "components/AddContactPopup";
import { setSidebarControl } from "store/slices/controlSlices";
import style from "./SidebarLayout.module.scss";

import { contacts } from "utils/fakeData";
import Portal from "components/Portal";

const cx = classnames.bind(style);

function NewPrivateChatSidebar({ actived }) {
  const dispatch = useDispatch();
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    dispatch(setSidebarControl("main"));
  };

  return (
    <SlideTransition enable actived={actived}>
      <div className={cx("new-private-chat")}>
        <div>
          <SidebarHeader focused />
        </div>
        <div className={cx("body")}>
          <ContactList list={contacts} onClick={handleClick} />

          <div className={cx("add-btn")} onClick={() => setShowPopup(true)}>
            <Button>
              <AiOutlinePlus />
            </Button>
          </div>
        </div>
      </div>

      {showPopup && (
        <Portal>
          <AddContactPopup onClose={() => setShowPopup(false)} />
        </Portal>
      )}
    </SlideTransition>
  );
}

export default NewPrivateChatSidebar;
