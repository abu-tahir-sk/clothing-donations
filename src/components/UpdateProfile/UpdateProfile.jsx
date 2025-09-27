// import { useContext } from "react";
// import { AuthContext } from "../AuthProvider/AuthProvider";
// import { FaPen } from "react-icons/fa";
// import { GrGallery } from "react-icons/gr";
// import { FaUser } from "react-icons/fa";
// import camera from "../../assets/image/camera-removebg-preview.png";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// const UpdateProfile = () => {
//   const { user, profileUpdate } = useContext(AuthContext);
//   const navigate = useNavigate()
//   const handleProfileUpdate = (e) => {
//     e.preventDefault();
//     const username = e.target.username.value;
//     const photoURL = e.target.photoURL.value;
//     console.log(username, photoURL);

//     profileUpdate({
//       displayName: username,
//       photoURL: photoURL,
//     })
//       .then((res) => {
//             toast.success("✅ Profile Update  successful!", {
//           position: "top-center",
//           theme: "colored",
//         }
//       );
//             navigate('/dashboard')

//       })
//       .catch((err) => console.log(err));
//   };

//   return (
//     <div className="flex flex-col justify-center items-center py-12 w-11/12 mx-auto bg-cyan-50">
//       <div className="card bg-base-100 w-96 shadow-xl  p-8">
//         <div>
//           <h2 className="text-3xl font-bold py-4">Update Your Profile</h2>
//         </div>
//         <div className="flex flex-col justify-center items-center w-32 h-32 mx-auto relative my-6 ">
//           <img
//             className="w-full h-full rounded-full border-2 border-cyan-100"
//             src={user?.photoURL}
//             alt={user?.displayName}
//           />
//           <div className="absolute -bottom-4 -right-0 w-12 h-12 rounded-full bg-cyan-600 p-3 ">
//             <img className="w-full h-full " src={camera} alt="" />
//           </div>
//         </div>
//         <form onSubmit={handleProfileUpdate}>
//           <div className="relative py-4">
//             <label className="">
//               <input
//                 type="text"
//                 className="input input-lg pl-10  hover:opacity-30 hover:border-2 hover:text-black"
//                 placeholder="username"
//                 name="username"
//                 required
//               />
//             </label>
//             <span className="absolute left-4 top-8 opacity-100">
//               <FaUser></FaUser>
//             </span>
//           </div>
//           <div className="relative py-4">
//             <label className=" ">
//               <input
//                  type="url"
//                 className="input input-lg pl-10  hover:opacity-30 hover:border-2 hover:text-black"
//                 required
//                 placeholder="photoURL"
//                 name="photoURL"
//               />
//             </label>
//             <span className="absolute left-4 top-8 opacity-1000">
//               <GrGallery></GrGallery>
//             </span>
//           </div>
//           <button to="/profile" className="btn w-full border-none">
//             Update <FaPen></FaPen>
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default UpdateProfile;
