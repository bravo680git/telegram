import { useState } from "react";
import classnames from "classnames/bind";
import { IoIosClose } from "react-icons/io";

import AvavatarItem from "components/AvatarItem";
import TextInput from "components/TextInput";
import style from "./AddContactPopup.module.scss";

const cx = classnames.bind(style);

function AddContactPopup({ onClose }) {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [phone, setPhone] = useState("+84");
  const disabled = true;

  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("header")}>
          <div className={cx("close-btn")} onClick={onClose}>
            <IoIosClose />
          </div>
          <div className={cx("title")}>Add Contact</div>
          <button className={cx("add-btn", { disabled })}>ADD</button>
        </div>

        <div className={cx("body")}>
          <div className={cx("top-section")}>
            <div className={cx("avatar")}>
              <AvavatarItem name="" />
            </div>
            <div className={cx("inputs")}>
              <TextInput
                label="First Name(required)"
                id="fname"
                value={fName}
                setValue={setFName}
              />
              <TextInput
                label="Last Name(optional)"
                id="lname"
                value={lName}
                setValue={setLName}
              />
            </div>
          </div>

          <div className={cx("bottom-section")}>
            <TextInput
              label="phone"
              id="phone"
              value={phone}
              setValue={setPhone}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddContactPopup;
