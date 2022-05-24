import classNames from "classnames/bind";
import { AiOutlineUser } from "react-icons/ai";
import style from "./Menu.module.scss";
import MenuItem from "./MenuItem";

const cx = classNames.bind(style);

function Menu({ menuItems }) {
  const menu = [
    {
      text: "Username",
      icon: AiOutlineUser,
      onClick: () => {},
    },
    {
      text: "Username",
      icon: AiOutlineUser,
      onClick: () => {},
    },
    {
      text: "Username",
      icon: AiOutlineUser,
      onClick: () => {},
    },
  ];

  return (
    <div className={cx("wrapper")}>
      {menu.map((item, index) => (
        <MenuItem
          key={index}
          text={item.text}
          icon={<item.icon />}
          onClick={item.onClick}
        />
      ))}
    </div>
  );
}

export default Menu;
