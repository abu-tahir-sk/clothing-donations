import { createBrowserRouter } from "react-router-dom";
import Main from "./components/Main/Main";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Home from "./components/Home";

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
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
  
    
]);

export default router;
