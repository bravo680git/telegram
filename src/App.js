import { useSelector } from "react-redux";

import Layout from "./layouts";

function App() {
  const { sidebar, content } = useSelector((state) => state.control);

  return <Layout sidebar={sidebar} content={content} />;
}

export default App;
