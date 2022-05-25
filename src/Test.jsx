import Layout from "./components/Layouts";
import ContactSidebar from "./components/Layouts/SidebarLayout/ContactSidebar";
import MainSidebar from "./components/Layouts/SidebarLayout/MainSidebar";

function Test() {
  return <Layout sideBar={<ContactSidebar />} />;
}

export default Test;
