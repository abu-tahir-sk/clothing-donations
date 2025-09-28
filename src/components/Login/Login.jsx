import { Link, useNavigate } from "react-router-dom";
import { GiValley } from "react-icons/gi";
import login from "../../assets/image/logins.jfif";
import google from "../../assets/image/ggg-removebg-preview.png";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { IoEye, IoEyeOffSharp } from "react-icons/io5";
import { toast } from "react-toastify";
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
  const emailRef = useRef();

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
        console.log("ERROR",error)
        setSuccess(false);
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
  const handleForgot = () => {
    const email = emailRef.current.value;
    if (!email) {
      alert("Please provide a valid email");
      return;
    } else {
      passwordResetEmail(email)
        .then(() => {
          alert("Password Reset email sent, pleas check your email");
        })
        .catch((err) => alert(err));
    }
  };
  return (
    <div className="w-11/12 md:w-10/12 mx-auto">
      <div className="">
        <div className="md:bg-gray-200 md:p-8 my-8 flex flex-col md:flex-row items-start gap-0">
          <div className="w-full md:w-[40%] lg:w-[50%] hidden md:flex flex-col   md:h-screen md:order-last items-center rounded-none">
            <img className="w-full h-full" src={login} alt="" />
          </div>
          <div className="min-h-screen w-full md:w-[60%]  lg:relative flex-1 md:flex items-center card bg-white  shadow-2xl rounded-md md:rounded-none p-4">
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
                <div className="flex flex-col form-control">
                  <label className="label py-2">Email</label>
                  <input
                    type="email"
                    ref={emailRef}
                    name="email"
                    className="input input-bordered"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="form-control flex flex-col relative">
                  <label className="label">Password</label>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    className="input input-bordered"
                    placeholder="Password"
                    required
                  />
                  <button
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-9 right-16"
                  >
                    {showPassword ? (
                      <IoEye></IoEye>
                    ) : (
                      <IoEyeOffSharp></IoEyeOffSharp>
                    )}
                  </button>
                </div>
                <div className="flex justify-between py-2">
                  <div className="flex justify-center gap-1">
                    <input
                      type="checkbox"
                      name="terms"
                      className="checkbox border-cyan-400 text-cyan-600"
                    />
                    <h2 className="text-cyan-600 lg:font-bold">Remember me</h2>
                  </div>

                  <a className="link link-hover" onClick={handleForgot}>
                    Forgot password?
                  </a>
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

                <div className="flex flex-col justify-center items-center">
                  <button className="btn btn-wide mt-4 bg-cyan-600 hover:bg-gray-700 text-white">
                    Login
                  </button>
                </div>
              </form>
              <div className="divider">Or, Login with</div>
              <div className="flex flex-col justify-center items-center">
                <button
                  onClick={handleGoogleSocial}
                  className="btn btn-wide mt-4 bg-white shadow-2xl hover:bg-gray-700"
                >
                  <img className="w-8 h-8" src={google} alt="" />
                  Google Login
                </button>
              </div>
              <div className="">
                <p className="py-3">
                  Don't have an account
                  <Link className="text-green-500 pl-1" to="/register">
                    sign up.
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
