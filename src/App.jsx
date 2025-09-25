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

import RequireAuth, { RequireSubs } from "./Components/auth/RequireAuth";
import Allusers from "./Pages/adminExam/Allusers";
import AdminVideo from "./Pages/adminExam/AdminVideo";
import AdminCode from "./Pages/adminExam/AdminCode";
import Profile from "./Pages/User/Profile";
import Transfer from "./Pages/Transfer";
import Deposit from "./Pages/Deposit";
import Package from "./Pages/Package";
import Withdraw from "./Pages/Withdraw";
import Allpackage from "./Pages/AllPackage";
import Blog from "./Pages/Blog";
import Video from "./Pages/Video";
import VideoDetail from "./Pages/VideoDetail";
import Blog1 from "./Pages/Blog1";
import Blog2 from "./Pages/Blog2";
import Blog3 from "./Pages/Blog3";
import Blog4 from "./Pages/Blog4";
import Blog5 from "./Pages/Blog5";
import Blog6 from "./Pages/Blog6";
import AdminWithdraw from "./Pages/Dashboard/AdminWithdraw";
import AdminDeposit from "./Pages/Dashboard/AdminDeposit";
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
        <Route path="/allpackage" element={<Allpackage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/crypto-rally-2024" element={<Blog1 />} />
        <Route path="/blog/crypto-buy-guide" element={<Blog2 />} />
        <Route path="/blog/crypto-mining" element={<Blog3 />} />
        <Route path="/blog/secure-crypto-wallet" element={<Blog4 />} />
        <Route path="/blog/transfer-crypto" element={<Blog5 />} />
        <Route path="/blog/crypto-mining-legal" element={<Blog6 />} />

        <Route path="/signup/" element={<Signup />} />
        <Route path="/signup/:refer" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/user/profile/reset-password"
          element={<ForgotPassword />}
        />
        <Route
          path="/user/profile/reset-password/:resetToken"
          element={<ResetPassword />}
        />

        <Route element={<RequireAuth allowedRoles={["ADMIN", "SADMIN"]} />}>
          <Route path="/allusers" element={<Allusers />} />
          <Route path="/adminvideo" element={<AdminVideo />} />
          <Route path="/admin/withdraw" element={<AdminWithdraw />} />
          <Route path="/admin/deposit" element={<AdminDeposit />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={["SADMIN", "ADMIN"]} />}>
          <Route path="/adminCode" element={<AdminCode />} />
        </Route>

        <Route element={<RequireSubs />}>
          <Route path="/video" element={<Video />} />
          <Route path="/video/:id" element={<VideoDetail />} />
        </Route>

        <Route
          element={<RequireAuth allowedRoles={["USER", "ADMIN", "SADMIN"]} />}
        >
          <Route path="/user/profile" element={<Profile />} />
          <Route path="/user/transfer" element={<Transfer />} />
          <Route path="/user/deposit" element={<Deposit />} />
          <Route path="/user/package" element={<Package />} />
          <Route path="/user/withdraw" element={<Withdraw />} />
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
