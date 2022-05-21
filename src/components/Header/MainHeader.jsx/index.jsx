import classNames from "classnames/bind";
import { AiOutlinePhone, AiOutlineSearch } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import AvatarItem from "../../AvatarItem";
import style from "./MainHeader.module.scss";

const cx = classNames.bind(style);

function MainHeader() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("chat-info")}>
          <div className={cx("avatar")}>
            <AvatarItem name="Hao" />
          </div>
          <div className={cx("info")}>
            <div className={cx("name")}>Hao</div>
            <div className={cx("status")}>Last seen 58 minutes ago</div>
          </div>
        </div>
        <div className={cx("utils")}>
          <div>
            <AiOutlinePhone />
          </div>
          <div>
            <AiOutlineSearch />
          </div>
          <div>
            <BsThreeDotsVertical />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
