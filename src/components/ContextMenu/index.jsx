import classnames from "classnames/bind";
import style from "./ContextMenu.module.scss";
import Menu from "components/Menu";
import Portal from "components/Portal";

const cx = classnames.bind(style);

function ContextMenu({ menuItems, show, x, y, onMouseLeave, onClick }) {
  return (
    <Portal>
      <div
        className={cx("wrapper")}
        style={{ "--x": x + "px", "--y": y + "px" }}
      >
        <Menu
          actived={show}
          menuItems={menuItems}
          x={0}
          y={0}
          transformOrigin="bottom left"
          width={200}
          onMouseLeave={onMouseLeave}
          onClick={onClick}
          round
        />
      </div>
    </Portal>
  );
}

export default ContextMenu;
