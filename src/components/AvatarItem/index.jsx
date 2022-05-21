import { useState } from "react";
import classNames from "classnames/bind";
import style from "./AvartarItem.module.scss";

const cx = classNames.bind(style);

function AvatarItem({ name, src }) {
  const [fallback, setFallback] = useState(src);

  const colors = [
    "linear-gradient(180deg, rgba(101,101,228,0.7287289915966386) 7%, rgba(17,8,182,0.7987570028011204) 41%)",
    "linear-gradient(180deg, rgba(175,101,228,0.7287289915966386) 7%, rgba(104,8,182,0.7987570028011204) 41%)",
    "linear-gradient(180deg, rgba(101,228,137,0.7287289915966386) 7%, rgba(8,182,78,0.7987570028011204) 41%)",
  ];

  return (
    <div className={cx("wrapper")}>
      {fallback ? (
        <img src={src} alt="avatar" onError={() => setFallback(null)} />
      ) : (
        <div
          style={{
            background: colors[name.length % 3],
          }}
        >
          {name.slice(0, 1)}
        </div>
      )}
    </div>
  );
}

export default AvatarItem;
