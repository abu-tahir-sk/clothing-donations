import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { IoEye, IoEyeOffSharp } from "react-icons/io5";
import { toast } from "react-toastify";

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
          console.log(result)
          
          emailVerification()
          .then(() => {
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
    <div className="w-11/12 mx-auto">
      <div className="bg-cyan-600 p-4 flex flex-col justify-center items-center min-h-screen">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h2 className="text-center font-bold text-2xl font-sans py-6">
            Register Account From
          </h2>
          <div className="border-t-2 border-cyan-600 w-20 mx-auto"></div>
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="border-2 py-4 px-12  w-full  h-12 focus:outline-none  focus:ring-blue-200 focus:border-blue-200"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="border-2 py-4 px-12  w-full  h-12 focus:outline-none  focus:ring-blue-200 focus:border-blue-200"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="url"
                placeholder="Enter the URL of your photo"
                name="photoUrl"
                className="border-2 py-4 px-12  w-full  h-12 focus:outline-none  focus:ring-blue-200 focus:border-blue-200"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="password"
                name="password"
                className="border-2 py-4 px-12  w-full  h-12 focus:outline-none  focus:ring-blue-200 focus:border-blue-200"
                required
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="absolute  top-10 right-4 -translate-t-12 text-[26px] cursor-pointer "
              >
                {showPassword ? (
                  <IoEye></IoEye>
                ) : (
                  <IoEyeOffSharp></IoEyeOffSharp>
                )}
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
              <button className="btn btn-primary">Register</button>
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
