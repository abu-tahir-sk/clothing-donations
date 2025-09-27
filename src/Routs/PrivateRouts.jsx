import { useContext } from "react";
import { AuthContext } from "../components/AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";
import {  OrbitProgress } from "react-loading-indicators";

const PrivateRouts = ({ children }) => {
  const {user,loading} = useContext(AuthContext);
      if(loading){
            return <div className="text-center flex flex-col justify-center items-center min-h-[50vh]">
                  <OrbitProgress color="#32cd32" size="medium" text="" textColor="" />
            </div>
      }
  if(user){
      return children;
  }

  return (
      <Navigate to="/login"></Navigate>
  )
};

export default PrivateRouts;
