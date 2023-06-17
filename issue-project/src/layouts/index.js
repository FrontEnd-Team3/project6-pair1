import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Header from "./Header";

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
