import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "../components";

const Layout = () => {
  return (
    <div className="relative h-full w-full bg-newBlack z-0">
      <Navbar />
      <div className="py-20">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
