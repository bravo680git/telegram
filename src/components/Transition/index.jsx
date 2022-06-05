import { useTransition, animated } from "@react-spring/web";
import { slideAnimationDuration } from "../../utils/constansts";

function Transition({ children, actived, leftToRight, delay }) {
  const style = leftToRight
    ? {
        from: { x: -600, opacity: 1, position: "absolute" },
        enter: { x: 0, opacity: 1, position: "relative" },
        leave: { x: -200, opacity: 0, position: "absolute" },
      }
    : {
        from: { x: 600, opacity: 1, position: "absolute" },
        enter: { x: 0, opacity: 1, position: "relative" },
        leave: { x: 100, opacity: 0, position: "absolute" },
      };
  const transition = useTransition(actived, {
    ...style,
    delay: delay,
    config: { duration: slideAnimationDuration },
  });
  return transition(
    (style, item) =>
      item && (
        <animated.div
          style={{ ...style, top: 0, width: "100%", height: "100%" }}
        >
          {children}
        </animated.div>
      )
  );
}

export default Transition;
