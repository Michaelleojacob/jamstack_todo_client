import Header from "../header/header";
import Footer from "../footer/footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div>layout</div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
