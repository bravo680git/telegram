import ChatItem from "./components/ChatItem";
import Layout from "./components/Layout";
import ChatList from "./components/ChatList";

function Test() {
  return (
    <>
      <Layout sideBar={<ChatList />} />
    </>
  );
}

export default Test;
