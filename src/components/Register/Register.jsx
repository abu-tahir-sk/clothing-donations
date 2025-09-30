import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { IoEye, IoEyeOffSharp, IoKey } from "react-icons/io5";
import { toast } from "react-toastify";
import { MdInsertPhoto } from "react-icons/md";
import { FaUser } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import login from "../../assets/image/login.jfif";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const { registerHandler, emailVerification, profileUpdate } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({
    terms: "",
    password: "",
    email: "",
    error: "",
  });

  const handleSubmit = (e) => {
    let newErrors = { terms: "", password: "", email: "", error: "" };

    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photoUrl = e.target.photoUrl.value;
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

    const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!regex.test(password)) {
      newErrors.password =
        "❌ Password must include uppercase, lowercase and be at least 6 characters long";
      setErrors(newErrors);
      return;
    }

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "pleas valid email";
      setErrors(newErrors);
      return;
    } else {
      registerHandler(email, password)
        .then((result) => {
          login("user@example.com");
        

          emailVerification().then(() => {
            // if (!result.user.emailVerified) {
            //   newErrors.email = "Please verify your Email";
            //   setErrors(newErrors);
            //   return;
            // } else {
            // }
          });

          e.target.reset();
          setSuccess(true);
          toast.success("✅ Login successful!", {
            position: "top-center",
          });
          navigate("/dashboard");
        })

        .catch((error) => {
          newErrors.error = error.message;
          setErrors(newErrors);
          setSuccess(false);
          e.target.reset();
        });
    }
  };
  return (
    <div className=" bg-cyan-100 p-4">
      <Helmet>
        <title>Register || Cloth For All</title>
      </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-0 w-11/12 md:w-9/12  mx-auto my-4 rounded">
        <div className="hidden md:flex flex-col    md:order-last md:col-span-5 items-center  bg-white   shadow-2xl ">
          <img className="w-full rounded h-full" src={login} alt="" />
        </div>
        <div className="lg:relative flex-1 md:flex items-center card bg-white  shadow-2xl rounded-md  p-4 md:col-span-7">
          <h2 className="text-center font-bold text-2xl font-sans py-6">
            Register Account From
          </h2>
          <div className="border-t-2 border-cyan-600 w-20 mx-auto"></div>
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control relative">
              <label className="label py-2 text-xl">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="border-2 py-4 px-12  w-full  h-12 focus:outline-none  focus:ring-blue-200 focus:border-blue-200"
                required
              />
              <button className="absolute  top-[58px] left-4  text-xl cursor-pointer text-gray-500">
                <FaUser />
              </button>
            </div>
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
            <div className="form-control relative">
              <label className="label py-2 text-xl">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="url"
                placeholder="Enter the URL of your photo"
                name="photoUrl"
                className="border-2 py-4 px-12  w-full  h-12 focus:outline-none  focus:ring-blue-200 focus:border-blue-200"
                required
              />
              <button className="absolute  top-[58px] left-4  text-xl cursor-pointer text-gray-500">
                <MdInsertPhoto />
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
              <button className="absolute  top-14 left-4 -translate-t-12 text-xl cursor-pointer text-gray-500">
                <IoKey />
              </button>
            </div>
            <div className="flex justify-start gap-1">
              <input
                type="checkbox"
                name="terms"
                className="checkbox border-cyan-400 text-cyan-600"
              />
              <h2 className="text-cyan-600 lg:font-bold">Remember me</h2>
            </div>
            <div className="form-control flex flex-col mt-6">
              <button className="btn bg-cyan-600 text-white hover:bg-primary ">
                Register
              </button>
            </div>
          </form>
          {errors.terms && (
            <p className="text-red-500 text-center">{errors.terms}</p>
          )}
          {errors.password && (
            <p className="text-red-500 text-center">{errors.password}</p>
          )}
          {errors.email && (
            <p className="text-red-500 text-center">{errors.email}</p>
          )}
          {errors.error && (
            <p className="text-red-500 text-center">{errors.error}</p>
          )}

          <div>
            <div className="flex flex-col justify-center items-center py-4">
              <p className="py-3">
                Already have an account
                <Link className="text-green-500 pl-1" to="/login">
                  Log In.
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
