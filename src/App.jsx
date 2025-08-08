import "./App.css";
import SignUp from "./Pages/SignUp";
import LogIn from "./Pages/LogIn";
import { Route, Routes, useLocation } from "react-router-dom";
import Users from "./Pages/Users";
import UsersProvider from "./Context/UsersProvider";
import Layout from "./Components/Layout";
import CreateUsers from "./Pages/CreateUsers";
import { AnimatePresence } from "framer-motion";
import AnimationPage from "./Animation/AnimationPageRouting";

export default function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <UsersProvider>
              <Layout />
            </UsersProvider>
          }
        >
          <Route
            path="/"
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
        </Route>
      </Routes>
    </AnimatePresence>
  );
}
