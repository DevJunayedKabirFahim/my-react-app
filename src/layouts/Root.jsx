import NavBar from "./NavBar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
