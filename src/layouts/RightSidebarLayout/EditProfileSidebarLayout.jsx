import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import classnames from "classnames/bind";
import { AiOutlineArrowLeft, AiOutlineCheck } from "react-icons/ai";
import { RiDeleteBin7Line } from "react-icons/ri";
import { BsBookmark } from "react-icons/bs";

import SlideTransition from "components/SlideTransition";
import Button from "components/Button";
import AvatarItem from "components/AvatarItem";
import TextInput from "components/TextInput";
import MenuItem from "components/Menu/MenuItem";
import ClickAnimation from "components/ClickAnimation";
import { setRightSidebarControl } from "store/slices/controlSlices";
import style from "./RightSidebarLayout.module.scss";

const cx = classnames.bind(style);

function EditProfileSidebarLayout({ actived }) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const currentChat = useSelector((state) => state.chat.currentChat) ?? {};
  const [firstName, setFirstName] = useState(currentChat.name ?? "");
  const [lastName, setLastName] = useState("");
  const [showDoneBtn, setShowDoneBtn] = useState(false);
  const dispatch = useDispatch();

  const handleBack = () => {
    dispatch(setRightSidebarControl("profile"));
  };

  useEffect(() => {
    if (
      (firstName?.length > 0 && firstName !== currentChat.name) ||
      lastName.length > 0
    ) {
      setShowDoneBtn(true);
    } else {
      setShowDoneBtn(false);
    }
  }, [firstName, lastName, currentChat]);

  useEffect(() => {
    setFirstName(currentChat.name);
  }, [currentChat]);

  return (
    <SlideTransition enable actived={actived} direction="R_L_L">
      <div className={cx("edit-profile")}>
        <div className={cx("header")}>
          <div className={cx("back-btn")}>
            <Button onClick={handleBack}>
              <AiOutlineArrowLeft />
            </Button>
          </div>
          <div className={cx("title")}>Edit</div>
        </div>

        <div className={cx("body")}>
          <div className={cx("profile")}>
            <div className={cx("avatar")}>
              <AvatarItem
                fontSize={44}
                name={currentChat.name}
                Icon={currentChat.id === "savedMessages" ? BsBookmark : null}
              />
            </div>
            <div className={cx("name")}>{currentChat.name}</div>
            <div className={cx("status")}>original name</div>
          </div>

          <div className={cx("input")}>
            <TextInput
              id="fname"
              label="First Name(required)"
              value={firstName}
              setValue={setFirstName}
            />
          </div>
          <div className={cx("input")}>
            <TextInput
              id="lname"
              label="Last Name(optional)"
              value={lastName}
              setValue={setLastName}
            />
          </div>

          <ClickAnimation>
            <MenuItem
              checkbox
              text="Notification"
              round
              large
              bottomText="Enable"
            />
          </ClickAnimation>

          <div className={cx("seperate")}>
            <div></div>
          </div>

          <div className={cx("delete-contact")}>
            <ClickAnimation>
              <MenuItem
                text="Delete contact"
                Icon={RiDeleteBin7Line}
                type="danger"
                round
              />
            </ClickAnimation>
          </div>

          <div className={cx("done-btn", { show: showDoneBtn })}>
            <Button>
              <AiOutlineCheck />
            </Button>
          </div>
        </div>
      </div>
    </SlideTransition>
  );
}

export default EditProfileSidebarLayout;
