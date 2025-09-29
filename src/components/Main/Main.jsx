import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../NavBar/Navbar";

const Main = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div>
        <Navbar />
      </div>

      

      <main className="flex-1 mt-[82px]" data-aos="fade-up">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Main;
