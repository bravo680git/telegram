import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import style from "./Menu.module.scss";
import MenuItem from "./MenuItem";
import ClickAnimation from "../ClickAnimation";

const cx = classNames.bind(style);

function Menu({
  menuItems = [],
  footer,
  actived,
  width,
  x,
  y,
  transformOrigin,
  delay = 0,
}) {
  const [firstRender, setFirstRender] = useState(true);

  useEffect(() => {
    if (actived) setFirstRender(false);
  }, [actived]);

  return (
    <div
      className={cx("wrapper", {
        pBottom: !footer,
        actived,
        unActived: !actived,
        firstRender,
      })}
      style={{ width, top: x, left: y, transformOrigin }}
    >
      {menuItems.map((item, index) => (
        <ClickAnimation key={index}>
          <MenuItem
            text={item.text}
            Icon={item.icon}
            control={item.control}
            currentChat={item.currentChat}
            href={item.href}
            delay={delay}
          />
        </ClickAnimation>
      ))}

      {footer && <div className={cx("footer")}>{footer}</div>}
    </div>
  );
}

export default Menu;
