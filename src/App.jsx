import React from "react";

import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutUs from "./Pages/About";
import NotFound from "./Pages/NotFound";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import ChangePassword from "./Pages/Password/ChangePassword";
import ForgotPassword from "./Pages/Password/ForgotPassword";
import ResetPassword from "./Pages/Password/ResetPassword";
import Contact from "./Pages/Contact";
import Denied from "./Pages/Denied";

import RequireAuth from "./Components/auth/RequireAuth";
import Allusers from "./Pages/adminExam/Allusers";
import Profile from "./Pages/User/Profile";
import AdminDashboard from "./Pages/Dashboard/AdminDashboard";
import { useSelector } from "react-redux";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  const { isLoggedIn, role, data } = useSelector((state) => state.auth);
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/denied" element={<Denied />} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/user/profile/reset-password"
          element={<ForgotPassword />}
        />
        <Route
          path="/user/profile/reset-password/:resetToken"
          element={<ResetPassword />}
        />

        <Route element={<RequireAuth allowedRoles={["ADMIN"]} />}>
          <Route path="/allusers" element={<Allusers />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Route>

        <Route
          element={<RequireAuth allowedRoles={["ADMIN", "INSTRUCTOR"]} />}
        ></Route>

        <Route
          element={
            <RequireAuth allowedRoles={["USER", "ADMIN", "INSTRUCTOR"]} />
          }
        >
          <Route path="/user/profile" element={<Profile />} />
          <Route
            path="/user/profile/change-password"
            element={<ChangePassword />}
          />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
