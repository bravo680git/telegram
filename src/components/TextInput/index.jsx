import classnames from "classnames/bind";
import style from "./TextInput.module.scss";

const cx = classnames.bind(style);

function TextInput({ id, label, value, setValue }) {
  return (
    <div className={cx("wrapper", { filled: value.length > 0 })}>
      <input
        type="text"
        id={id}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

export default TextInput;
