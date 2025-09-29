import { Link, useNavigate } from "react-router-dom";
import { GiValley } from "react-icons/gi";
import login from "../../assets/image/login.jfif";
import google from "../../assets/image/ggg-removebg-preview.png";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { IoEye, IoEyeOffSharp } from "react-icons/io5";
import { toast } from "react-toastify";
import { IoMdMail } from "react-icons/io";
import { IoKey } from "react-icons/io5";

const Login = () => {
  const { loginHandler, handleGoogleLogin, passwordResetEmail } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({
    terms: "",
    password: "",
    email: "",
  });
  

  const handleLoginSubmit = (e) => {
    let newErrors = { terms: "", password: "", email: "" };

    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;
    setErrors("");
    setSuccess(false);
    if (!terms) {
      newErrors.terms = "Please accept our terms and conditions";
      setErrors(newErrors);
      return;
    }
    if (password.length < 6) {
      newErrors.password = "Password should be 6 characters or longer";
      setErrors(newErrors);
       e.target.reset();
      return;
    }

    loginHandler(email, password)
      .then((result) => {
        // if (!result.user.emailVerified) {
        //   newErrors.email = "Please verify your Email";
        //   setErrors(newErrors);
        //   return;
        // } else {
        console.log(result);
        setSuccess(true);
        // }

        e.target.reset();
        toast.success("✅ Login successful!");
        navigate("/dashboard");
      })
      .catch((error) => {
       newErrors.email = error.message;
      setErrors(newErrors);
      setSuccess(false);
       e.target.reset();
      });
  };
  const handleGoogleSocial = () => {
    handleGoogleLogin()
      .then((result) => {
        setSuccess(true);
        navigate("/");
       
      })
      .catch((error) => {
        setSuccess(false);
        toast.error(`❌ Google Login failed${error.message}`, {
          position: "top-center",
          theme: "colored",
        });
      });
  };
 
  return (
    <div className="bg-gray-200 p-4">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-0 w-11/12 md:w-9/12  mx-auto my-4 rounded">
       <div className="hidden md:flex flex-col    md:order-last md:col-span-5 items-center  bg-white   shadow-2xl ">
            <img className="w-full rounded h-full" src={login} alt="" />
          </div>
          <div className="lg:relative flex-1 md:flex items-center card bg-white  shadow-2xl rounded-md  p-4 md:col-span-7">
            <div className="">
              <div className="">
                <div className="text-5xl text-cyan-500 pb-3">
                  <GiValley></GiValley>
                </div>
                <h3 className="text-2xl font-serif font-bold">
                  Welcome back !
                </h3>
                <p className="text-gray-700">
                  Enter to get unlimited access to dat & information
                </p>
              </div>
              <form onSubmit={handleLoginSubmit} className="form-control">
                <div className="flex flex-col form-control relative">
                  <label className="label py-2 text-xl">Email</label>
                  <input
                    type="email"
                    
                    name="email"
                    className="border-2 py-4 px-12  w-full  h-12 focus:outline-none  focus:ring-blue-200 focus:border-blue-200"
                    placeholder="Email"
                    required
                  />
                  <button className="absolute  top-[58px] left-4  text-xl cursor-pointer text-gray-500">
                    <IoMdMail />
                  </button>
                </div>
                <div className="form-control flex flex-col relative">
                  <label className="label text-xl py-2 ">Password</label>
                 
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    className="border-2 py-4 px-12  w-full  h-12 focus:outline-none  focus:ring-blue-200 focus:border-blue-200"
                    placeholder="Password"
                    required                    
                  />
                   <button
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute  top-14 right-4 -translate-t-12 text-[26px] cursor-pointer "
                  >
                    {showPassword ? (
                      <IoEye></IoEye>
                    ) : (
                      <IoEyeOffSharp></IoEyeOffSharp>
                    )}
                  </button>
                   <button
                    
                    className="absolute  top-14 left-4 -translate-t-12 text-xl cursor-pointer text-gray-500"
                  >
                   <IoKey />
                  </button>
                </div>
                <div className="flex justify-between py-2">
                  <div className="flex justify-center gap-1 py-2">
                    <input
                      type="checkbox"
                      name="terms"
                      className="checkbox border-cyan-400  text-cyan-600"
                    />
                    <h2 className="text-cyan-600 lg:font-bold">Remember me</h2>
                  </div>

                  <Link to="/forgatPassword" className="link link-hover" >
                    Forgot password?
                  </Link>
                </div>
                {errors.terms && (
                  <p className="text-red-500 text-center">{errors.terms}</p>
                )}
                {errors.password && (
                  <p className="text-red-500 text-center">{errors.password}</p>
                )}
                {errors.email && (
                  <p className="text-red-500 text-center">{errors.email}</p>
                )}

                <div className="flex flex-col justify-center w-full items-center">
                  <button className="btn w-full mt-4 bg-cyan-600 hover:bg-gray-700 text-white">
                    Login
                  </button>
                </div>
              </form>
              <div className="divider">Or, Login with</div>
              <div className="flex flex-col justify-center items-center">
                <button
                  onClick={handleGoogleSocial}
                  className="btn w-full mt-4 bg-white shadow-2xl hover:text-white hover:bg-gray-700"
                >
                  <img className="w-8 h-8" src={google} alt="" />
                  Google Login
                </button>
              </div>
              <div className="">
                <p className="py-3">
                  Don't have an account
                  <Link className="text-green-500 pl-1" to="/register">
                    Register.
                  </Link>
                </p>
              </div>
            </div>
          </div>
      </div>
      </div>
  );
};

export default Login;
