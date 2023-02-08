import { useTransition, animated } from "@react-spring/web";
import { slideAnimationDuration } from "utils/constansts";

function SlideTransition({
  children,
  enable,
  actived,
  direction = "R_L_R",
  delay,
}) {
  const slideDismention = {
    L_R_L: {
      from: -218,
      leave: -418,
    },
    R_L_R: {
      from: 218,
      leave: 418,
    },
    L_R_R: {
      from: -218,
      leave: 418,
    },
    R_L_L: {
      from: 218,
      leave: -418,
    },
  };

  const style = {
    from: { x: slideDismention[direction].from, position: "absolute" },
    enter: { x: 0, position: "relative" },
    leave: {
      x: slideDismention[direction].leave,
      position: "absolute",
      opacity: 0.7,
    },
  };

  const transition = useTransition(actived, {
    ...style,
    delay: delay,
    config: { duration: slideAnimationDuration },
  });

  return enable
    ? transition(
        (style, item) =>
          item && (
            <animated.div
              style={{ ...style, top: 0, width: "100%", height: "100%" }}
            >
              {children}
            </animated.div>
          )
      )
    : actived && <div>{children}</div>;
}

export default SlideTransition;
