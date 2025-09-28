import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../NavBar/Navbar";

const Main = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="h-32 lg:h-32"></div>

      <main className="flex-1" data-aos="fade-up">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Main;
