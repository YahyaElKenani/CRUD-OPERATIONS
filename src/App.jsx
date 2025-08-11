import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import UsersProvider from "./Context/UsersProvider";
import Layout from "./Components/Layout";
import SignUp from "./Pages/SignUp";
import LogIn from "./Pages/LogIn";
import Users from "./Pages/Users";
import CreateUsers from "./Pages/CreateUsers";
import AnimationPage from "./Animation/AnimationPageRouting";
import EditProduct from "./Components/EditProduct/EditPRODUCT";

export default function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <UsersProvider>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <AnimationPage>
                  <SignUp />
                </AnimationPage>
              }
            />
            <Route
              path="login"
              element={
                <AnimationPage>
                  <LogIn />
                </AnimationPage>
              }
            />
            <Route
              path="users"
              element={
                <AnimationPage>
                  <Users />
                </AnimationPage>
              }
            />
            <Route
              path="users/create"
              element={
                <AnimationPage>
                  <CreateUsers />
                </AnimationPage>
              }
            />
            <Route
              path="products/edit/:id"
              element={
                <AnimationPage>
                  <EditProduct />
                </AnimationPage>
              }
            />
          </Route>
        </Routes>
      </UsersProvider>
    </AnimatePresence>
  );
}
