import { Outlet } from "react-router-dom";
import EditProduct from "./EditProduct/EditPRODUCT";
const Layout = () => {
  return (
    <div>
      <Outlet />
      <EditProduct/>
    </div>
  );
};

export default Layout;
