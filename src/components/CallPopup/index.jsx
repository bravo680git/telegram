import { useState, useRef } from "react";
import { useSelector } from "react-redux";
import classnames from "classnames/bind";
import { AiOutlineClose } from "react-icons/ai";
import {
  BsFullscreen,
  BsFillCameraVideoFill,
  BsMicMuteFill,
  BsFillTelephoneFill,
  BsFullscreenExit,
} from "react-icons/bs";
import { MdScreenShare } from "react-icons/md";

import Portal from "components/Portal";
import Button from "components/Button";
import style from "./CallPopup.module.scss";

const cx = classnames.bind(style);

function CallPopup({ onClose }) {
  const [fullScreen, setFullScreen] = useState(false);
  const wrapperRef = useRef();
  const currentChat = useSelector((state) => state.chat.currentChat);

  const viewFullScreen = () => {
    setFullScreen(true);

    if (wrapperRef.current.requestFullscreen) {
      wrapperRef.current.requestFullscreen();
    } else if (wrapperRef.current.mozRequestFullScreen) {
      wrapperRef.current.mozRequestFullScreen();
    } else if (wrapperRef.current.webkitRequestFullscreen) {
      wrapperRef.current.webkitRequestFullscreen();
    } else if (wrapperRef.current.msRequestFullscreen) {
      wrapperRef.current.msRequestFullscreen();
    }
  };

  const exitFullScreen = () => {
    setFullScreen(false);

    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  };

  return (
    <Portal>
      <div className={cx("wrapper", { full: fullScreen })} ref={wrapperRef}>
        {fullScreen && (
          <Button className={cx("exit-full")} onClick={exitFullScreen}>
            <BsFullscreenExit />
          </Button>
        )}
        <div className={cx("container")}>
          <div className={cx("header")}>
            {!fullScreen && (
              <>
                <Button onClick={onClose}>
                  <AiOutlineClose />
                </Button>

                <Button onClick={viewFullScreen}>
                  <BsFullscreen />
                </Button>
              </>
            )}
          </div>

          <div className={cx("body")}>
            <div className={cx("name")}>{currentChat.name}</div>
            <div className={cx("status")}>Ringing...</div>
            <div className={cx("avatar")}>
              <div>{currentChat.name?.[0]}</div>
            </div>
          </div>

          <div className={cx("footer")}>
            <div className={cx("btn")}>
              <Button>
                <BsFillCameraVideoFill />
              </Button>
              <div className={cx("label")}>Camera</div>
            </div>
            <div className={cx("btn")}>
              <Button>
                <MdScreenShare />
              </Button>
              <div className={cx("label")}>Screen</div>
            </div>
            <div className={cx("btn", { mute: true })}>
              <Button>
                <BsMicMuteFill />
              </Button>
              <div className={cx("label")}>Unmute</div>
            </div>
            <div className={cx("btn")}>
              <Button>
                <BsFillTelephoneFill />
              </Button>
              <div className={cx("label")}>Decline</div>
            </div>
          </div>
        </div>
      </div>
    </Portal>
  );
}

export default CallPopup;
