const clickAnimationSolving = (e, ref, animationTime) => {
  const x = e.offsetX;
  const y = e.offsetY;
  ref.current.style.setProperty("--mouse-x", x + "px");
  ref.current.style.setProperty("--mouse-y", y + "px");
  ref.current.style.setProperty("--animation-time", animationTime * 2 + "ms");
};

const getSettingValue = (prevKeys = [], setting, ...keys) => {
  let lastObj = setting;
  const allKeys = prevKeys.flat(2).concat(keys);
  for (let key of allKeys) {
    lastObj = lastObj[key];
  }

  return lastObj?.value;
};

export { clickAnimationSolving, getSettingValue };
