import { useTransition, animated } from "@react-spring/web";
import { slideAnimationDuration } from "utils/constansts";

function SlideTransition({ children, enable, actived, leftToRight, delay }) {
  const style = leftToRight
    ? {
        from: { x: -218, position: "absolute" },
        enter: { x: 0, position: "relative" },
        leave: { x: -418, position: "absolute", opacity: 0.7 },
      }
    : {
        from: { x: 218, position: "absolute" },
        enter: { x: 0, position: "relative" },
        leave: { x: 418, position: "absolute", opacity: 0.7 },
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
