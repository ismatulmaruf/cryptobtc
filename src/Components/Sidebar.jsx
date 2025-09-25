import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/Slices/AuthSlice";
import { Link, useNavigate } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import {
  FaHome,
  FaInfoCircle,
  FaUserCircle,
  FaPlus,
  FaList,
  FaShareSquare,
  FaPhone,
  FaShare,
  FaUserAlt,
  FaTh,
  FaTag,
  FaVideo,
  FaVideoSlash,
} from "react-icons/fa";

export default function Sidebar({ hideBar = false }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const { isLoggedIn, role, data } = useSelector((state) => state.auth);
  // console.log(data.subscription);

  const onLogout = async function () {
    await dispatch(logout());
    navigate("/");
  };

  function changeWidth() {
    const drawerSide = document.getElementsByClassName("drawer-side");
    drawerSide[0].style.width = "auto";
  }

  function hideDrawer() {
    const element = document.getElementsByClassName("drawer-toggle");
    element[0].checked = false;

    const drawerSide = document.getElementsByClassName("drawer-side");
    drawerSide[0].style.width = "0";
  }

  if (!hideBar) {
    return (
      <div className="drawer absolute left-0 z-50 w-fit">
        <input className="drawer-toggle" id="my-drawer" type="checkbox" />
        <div className="drawer-content">
          <label
            htmlFor="my-drawer"
            className="cursor-pointer fixed top-0 right-3 border border-gray-100 shadow-lg rounded-md mt-3 ml-2 "
          >
            <FiMenu
              onClick={changeWidth}
              size={"32px"}
              className="font-bold text-white m-2"
            />
          </label>
        </div>
        <div className="drawer-side  w-0 shadow-custom dark:shadow-lg">
          <label
            htmlFor="my-drawer"
            className="drawer-overlay w-screen"
          ></label>
          <ul className="menu  p-4 pt-7 h-[100%] min-w-[250px] max-w-[350px]  bg-[#20344B] dark:bg-[#29303ea3] backdrop-blur-[8px] text-gray-500 font-inter dark:text-slate-50 md:text-[17px] text-base font-[600] relative">
            <li className="w-fit absolute right-2 z-50 text-red-500">
              <button onClick={hideDrawer}>
                <AiFillCloseCircle size={28} />
              </button>
            </li>
            <li>
              <Link to="/" className="flex gap-4 items-center text-gray-100">
                <FaHome
                  size={18}
                  className="text-gray-100 dark:text-slate-100"
                />
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/allpackage"
                className="flex gap-4 items-center text-gray-100"
              >
                <FaTh size={18} className="text-gray-100 dark:text-slate-100" />
                All Packages
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="flex gap-4 items-center text-gray-100"
              >
                <FaList
                  size={18}
                  className="text-gray-100 dark:text-slate-100"
                />
                Blog
              </Link>
            </li>

            {(role === "ADMIN" || role == "SADMIN") && (
              <>
                <li>
                  <Link
                    to="/allusers"
                    className="flex gap-4 items-center text-gray-100"
                  >
                    <FaUserAlt
                      size={18}
                      className="text-gray-100 dark:text-slate-100"
                    />
                    Users
                  </Link>
                </li>
                <li>
                  <Link
                    to="/adminvideo"
                    className="flex gap-4 items-center text-gray-100"
                  >
                    <FaVideo
                      size={18}
                      className="text-gray-100 dark:text-slate-100"
                    />
                    Add Video
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/withdraw"
                    className="flex gap-4 items-center text-gray-100"
                  >
                    <FaShare
                      size={18}
                      className="text-gray-100 dark:text-slate-100"
                    />
                    Admin Withdraw
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/deposit"
                    className="flex gap-4 items-center text-gray-100"
                  >
                    <FaShareSquare
                      size={18}
                      className="text-gray-100 dark:text-slate-100"
                    />
                    Admin Deposit
                  </Link>
                </li>
              </>
            )}

            {role == "ADMIN" && (
              <>
                <li>
                  <Link
                    to="/adminCode"
                    className="flex gap-4 items-center text-gray-100"
                  >
                    <FaPlus
                      size={18}
                      className="text-gray-100 dark:text-slate-100"
                    />
                    Add Code
                  </Link>
                </li>
              </>
            )}

            {data.subscription && (
              <>
                <li>
                  <Link
                    to="/video"
                    className="flex gap-4 items-center text-gray-100"
                  >
                    <FaVideo
                      size={18}
                      className="text-gray-100 dark:text-slate-100"
                    />
                    Video
                  </Link>
                </li>
              </>
            )}
            {/* <li>
              <Link
                to="/allexamsCatForUser"
                className="flex gap-4 items-center"
              >
                <FaList
                  size={18}
                  className="text-gray-500 dark:text-slate-100"
                />
                All Exam
              </Link>
            </li> */}

            {isLoggedIn && (
              <>
                <li>
                  <Link
                    to="/user/transfer"
                    className="flex gap-4 items-center text-gray-100"
                  >
                    <FaShare
                      size={18}
                      className="text-gray-100 dark:text-slate-100"
                    />
                    Transfer
                  </Link>
                </li>

                <li>
                  <Link
                    to="/user/deposit"
                    className="flex gap-4 items-center text-gray-100"
                  >
                    <FaPlus
                      size={18}
                      className="text-gray-100 dark:text-slate-100"
                    />
                    Deposit
                  </Link>
                </li>
                <li>
                  <Link
                    to="/user/package"
                    className="flex gap-4 items-center text-gray-100"
                  >
                    <FaPlus
                      size={18}
                      className="text-gray-100 dark:text-slate-100"
                    />
                    Package
                  </Link>
                </li>
                <li>
                  <Link
                    to="/user/withdraw"
                    className="flex gap-4 items-center text-gray-100"
                  >
                    <FaShareSquare
                      size={18}
                      className="text-gray-100 dark:text-slate-100"
                    />
                    Withdraw
                  </Link>
                </li>
              </>
            )}
            <li>
              <Link
                to="/contact"
                className="flex gap-4 items-center text-gray-100"
              >
                <FaPhone
                  size={18}
                  className="text-gray-100 dark:text-slate-100"
                />
                Contact Us
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="flex gap-4 items-center text-gray-100"
              >
                <FaInfoCircle
                  size={18}
                  className="text-gray-100 dark:text-slate-100"
                />
                About Us
              </Link>
            </li>

            {isLoggedIn ? (
              <li className="absolute bottom-4 w-[90%]">
                <div className="w-full flex md:flex-row flex-col gap-2 items-center justify-center">
                  <button className="btn-primary px-3.5 py-2.5 font-semibold rounded-md w-full">
                    <Link to="/user/profile">Profile</Link>
                  </button>
                  <button
                    className="btn-secondary px-3.5 py-2.5 font-semibold rounded-md w-full"
                    onClick={onLogout}
                    disabled={isLoading}
                  >
                    <Link>{isLoading ? "Logout..." : "Logout"}</Link>
                  </button>
                </div>
              </li>
            ) : (
              <li className="absolute bottom-4 w-[90%]">
                <div className="w-full flex items-center justify-center">
                  <button className="btn-primary px-3.5 py-2.5 font-semibold rounded-md w-full">
                    <Link to="/login">Login</Link>
                  </button>
                  <button className="btn-secondary px-3.5 py-2.5 font-semibold rounded-md w-full">
                    <Link to="/signup">Signup</Link>
                  </button>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}
