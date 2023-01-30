import { useState, useRef, useEffect } from "react";
import classnames from "classnames/bind";
import { useDispatch } from "react-redux";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { RiImageAddLine } from "react-icons/ri";

import { setSidebarControl } from "store/slices/controlSlices";

import TextInput from "components/TextInput";
import SlideTransition from "components/SlideTransition";
import Button from "components/Button";
import style from "./SidebarLayout.module.scss";

const cx = classnames.bind(style);

function NewChannelSidebar({ actived }) {
  const imgInputRef = useRef();
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const dispatch = useDispatch();

  const handleBack = () => {
    dispatch(setSidebarControl("main"));
  };

  useEffect(() => {
    if (!actived) {
      setName("");
      setDesc("");
    }
  }, [actived]);

  return (
    <SlideTransition actived={actived} enable>
      <div className={cx("new-channel")}>
        <div className={cx("header")}>
          <div className={cx("back")} onClick={handleBack}>
            <AiOutlineArrowLeft />
          </div>
          <div className={cx("title")}>New Channel</div>
        </div>

        <div className={cx("body")}>
          <div className={cx("info")}>
            <div
              className={cx("logo-edit")}
              onClick={() => imgInputRef.current.click()}
            >
              <input
                className={cx("img-input")}
                type="file"
                ref={imgInputRef}
              />
              <div className={cx("upload-img-btn")}>
                <RiImageAddLine />
              </div>
            </div>

            <div className={cx("text-input")}>
              <TextInput
                label="Channel Name"
                id="name"
                value={name}
                setValue={setName}
              />
            </div>
            <div className={cx("text-input")}>
              <TextInput
                label="Description(optional)"
                id="desc"
                value={desc}
                setValue={setDesc}
              />
            </div>
          </div>

          <div className={cx("note")}>
            You can provide an optional description for your channel.
          </div>

          <div className={cx("next-btn", { show: name.length > 0 })}>
            <Button>
              <AiOutlineArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </SlideTransition>
  );
}

export default NewChannelSidebar;
