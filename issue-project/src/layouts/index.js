import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Header from "./header";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Nav />
    </>
  );
};
export default Layout;
