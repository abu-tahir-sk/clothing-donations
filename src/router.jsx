import { createBrowserRouter } from "react-router-dom";
import Main from "./components/Main/Main";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Campaigns from "./components/Campaigns/Campaigns";
import Home from "./components/Home";
import Help from "./components/Help/Help";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Dashboard from "./components/Dashboard/Dashboard";
import PrivateRouts from "./Routs/PrivateRouts";
import Profile from "./components/Profile/Profile";
import UpdateProfile from "./components/UpdateProfile/UpdateProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/campaigns",
        element: <Campaigns></Campaigns>,
      },
      {
        path: "/help",
        element: <Help></Help>,
      },
      {
        path: "/dashboard",
        element: <PrivateRouts><Dashboard></Dashboard></PrivateRouts>,
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      
      {
        path: '/updateProfile',
        element:<PrivateRouts> <UpdateProfile></UpdateProfile></PrivateRouts>
      },
      
    {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
  
    
]);

export default router;
