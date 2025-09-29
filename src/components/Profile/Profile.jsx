import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaPen } from "react-icons/fa";

import camera from "../../assets/image/camera-removebg-preview.png";
import { Link } from "react-router-dom";
const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="bg-cyan-50">
      <div className="flex flex-col justify-center items-center py-12 w-11/12 mx-auto ">
        <div className="card bg-base-100 w-96 shadow-xl  p-8">
          <div>
            <h2 className="text-3xl font-bold py-4">
              Welcome back {user?.displayName}
            </h2>
          </div>
          <div className="flex flex-col justify-center items-center w-32 h-32 mx-auto relative">
            <img
              className="w-full h-full rounded-full border-2 border-cyan-200"
              src={user?.photoURL}
              alt={user?.displayName}
            />
            <div className="absolute -bottom-4 -right-0 w-12 h-12 rounded-full bg-cyan-600 p-3 ">
              <img className="w-full h-full " src={camera} alt="" />
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center pt-6">
              <p className="text-gray-500 font-bold">username</p>
              <h4 className="font-bold">{user?.displayName}</h4>
            </div>
            <div className="border-t-2 my-6"></div>
            <div className="flex justify-between items-center">
              <p className="text-gray-500 font-bold">username</p>
              <h4 className="font-bold">{user?.email}</h4>
            </div>
            <div className="border-t-2 my-6"></div>
            <Link to="/updateProfile" className="btn w-full border-none">
              Update <FaPen></FaPen>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
