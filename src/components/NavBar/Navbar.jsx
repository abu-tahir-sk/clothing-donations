import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/image/dontion.jpg";

import { RiMenu2Line } from "react-icons/ri";
import { useContext, useState } from "react";
import { IoClose, IoSettingsSharp } from "react-icons/io5";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaUser } from "react-icons/fa6";
import { FaSignOutAlt } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [openUser, setOpenUser] = useState(false);
  const { user, logOutHandler } = useContext(AuthContext);
  const [success, setSuccess] = useState(false);
  const HandleLogOUt = () => {
    setSuccess(false);
    logOutHandler()
      .then((result) => {
        setSuccess(true);
      })
      .catch((error) => {
        setSuccess(false);
      });
  };

  return (
    <div className="flex justify-between items-center py-8 px-6 lg:px-10 shadow-sm fixed top-0 left-0 w-full bg-white z-50">
      <div className="md:flex gap-2 justify-center items-center">
        <img className="w-16 h-12" src={logo} alt="" />
        <h2 className="font-extrabold text-2xl">
          <span className="text-cyan-600 md:text-wrap">CLOTH</span> For All
        </h2>
      </div>

      <ul
        className={`lg:flex mt-2 gap-4 justify-center text-gray-700  
  p-10 md:p-8 lg:p-0 absolute duration-1000
  ${open ? "right-0 bg-white" : "-right-full"}
  lg:static top-24 py-3  shadow-2xl lg:shadow-none
  h-[100vh] md:h-[100vh] w-[35%] md:w-[35%] lg:w-full lg:h-12`}
      >
        <li className="">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-white bg-cyan-600 btn font-bold"
                : "text-gray-700"
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-white bg-cyan-600 btn font-bold"
                : "text-gray-700"
            }
            to="/campaigns"
          >
            Donation Campaigns
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-white bg-cyan-600 btn font-bold"
                : "text-gray-700"
            }
            to="/help"
          >
            How to Help
          </NavLink>
        </li>
        {user && (
          <>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-white bg-cyan-600 btn font-bold"
                    : "text-gray-700"
                }
                to="/Dashboard"
              >
                Dashboard
              </NavLink>
            </li>
          </>
        )}
      </ul>

      <div className="relative">
        {user ? (
          <div>
            <button
              onClick={() => setOpenUser(!openUser)}
              className="w-10 h-10 rounded-full"
            >
              <img
                className="w-full h-full rounded-full"
                src={user?.photoURL}
                alt=""
              />
            </button>
            {openUser && user?.email ? (
              <div
                className={`absolute  bg-gray-100 duration-1000 rounded-xl shadow-2xl p-4 flex flex-col justify-start items-start min-w-[220px] ${
                  openUser ? "top-10 right-8" : ""
                }`}
              >
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    `justify-start items-center text-start gap-2 px-3 ${
                      isActive
                        ? "justify-start items-center text-start gap-2 px-3 flex  mb-2 w-full rounded-lg text-white bg-gray-800"
                        : "hover:bg-gray-300 flex hover:rounded-lg mb-2 w-full"
                    }`
                  }
                >
                  {" "}
                  <FaUser></FaUser> Profile
                </NavLink>

                <NavLink
                  to="/updateProfile"
                  className={({ isActive }) =>
                    `justify-start items-center text-start gap-2 px-3 ${
                      isActive
                        ? "justify-start items-center text-start gap-2 px-3 flex  mb-2 w-full rounded-lg text-white bg-gray-800"
                        : "hover:bg-gray-300 flex hover:rounded-lg mb-2 w-full"
                    }`
                  }
                >
                  {" "}
                  <IoSettingsSharp></IoSettingsSharp> Settings
                </NavLink>

                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    `justify-start items-center text-start gap-2 px-3 flex rounded-lg mb-2 w-full hover:bg-gray-300 ${
                      isActive
                        ? "justify-start items-center text-start gap-2 px-3 flex  mb-2 w-full rounded-lg text-white bg-gray-800"
                        : " hover:bg-gray-300 flex rounded-lg mb-2 w-full"
                    }`
                  }
                  onClick={HandleLogOUt}
                >
                  <FaSignOutAlt></FaSignOutAlt>
                  Log Out
                </NavLink>
              </div>
            ) : (
              ""
            )}
          </div>
        ) : (
          <Link
            to="/login"
            className="btn text-yellow-50 bg-cyan-600 font-bold"
          >
            Login
          </Link>
        )}

        <div
          className="text-3xl font-bold lg:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <IoClose></IoClose> : <RiMenu2Line></RiMenu2Line>}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
//  <div className="flex justify-center items-center relative">
//           {user && user?.email ? (
//             <button
//               onClick={() => setOpenUser(!openUser)}
//               className="w-10 h-10 rounded-full"
//             >
//               <img
//                 className="w-full h-full rounded-full"
//                 src={user?.photoURL}
//                 alt=""
//               />
//             </button>
//           ) : (
//             <button className="text-cyan-600 text-[42px]">
//               <FaCircleUser></FaCircleUser>

//             </button>
//           )}

//         </div>
