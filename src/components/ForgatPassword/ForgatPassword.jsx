import { useContext, useRef } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

import { IoMdMail } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ForgatPassword = () => {
  const { passwordResetEmail } = useContext(AuthContext);
  const navigate = useNavigate();
  const emailRef = useRef();

  const handleForgot = (e) => {
    e.preventDefault();
    const email = emailRef.current.value.trim();

    if (!email) {
      toast.error("⚠️ Please provide a valid email",{
          position: "top-center",
          theme: "colored",
        });
      return;
    }

    passwordResetEmail(email)
      .then(() => {
        alert("✅ Password reset email sent. Please check your inbox.");
        navigate("/login");
      })
      .catch((err) => {
        alert("❌ " + err.message);
      });
  };
  return (
    <div className="flex flex-col justify-center items-center py-12 w-11/12 mx-auto bg-cyan-50">
      <div className="card bg-base-100 w-96 shadow-xl  p-8">
        <div>
          <h2 className="text-3xl font-bold py-4">Forgot Password</h2>
        </div>

        <form onSubmit={handleForgot}>
          <div className="relative py-4">
            <label className="">
              <input
                type="text"
                ref={emailRef}
                className="px-10 my-3 py-4 w-full hover:opacity-30 border-2 hover:border-2 hover:text-black"
                placeholder="userEmail"
                name="userEmail"
                
              />
            </label>
            <span className="absolute left-4 top-12 opacity-100">
              <IoMdMail />
            </span>
          </div>

          <button
            type="submit"
            className="btn w-full border-none bg-cyan-600 text-white hover:bg-primary font-bold text-xl"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgatPassword;
