import classNames from "classnames/bind";
import style from "./Menu.module.scss";
import MenuItem from "./MenuItem";

const cx = classNames.bind(style);

function Menu({ menuItems = [], footer }) {
  return (
    <div className={cx("wrapper", { pBottom: !footer })}>
      {menuItems.map((item, index) => (
        <MenuItem
          key={index}
          text={item.text}
          icon={<item.icon />}
          onClick={item.onClick}
        />
      ))}

      {footer && <div className={cx("footer")}>{footer}</div>}
    </div>
  );
}

export default Menu;
