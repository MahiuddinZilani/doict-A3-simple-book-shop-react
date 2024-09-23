import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";

const Root = () => {
  return (
    <div className="relative">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
