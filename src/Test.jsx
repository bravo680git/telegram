import ChatItem from "./components/ChatItem";
import Layout from "./components/Layout";
import ChatList from "./components/ChatList";
import ContactList from "./components/ContactList";

function Test() {
  return (
    <Layout
      sideBar={
        <>
          <ChatList />
          <ContactList />
        </>
      }
    />
  );
}

export default Test;
