import { createPortal } from "react-dom";

function Portal({ children }) {
  return createPortal(children, document.getElementById("root"));
}

export default Portal;
