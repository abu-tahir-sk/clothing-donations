import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../NavBar/Navbar";
import Reveal from "../../animation/Reveal";

const Main = () => {
  return (
    <Reveal>
      <div className="flex flex-col min-h-screen">
        <div>
          <Navbar />
        </div>

        <main className="flex-1 mt-[82px]" data-aos="fade-up">
          <Outlet />
        </main>

        <Footer />
      </div>
    </Reveal>
  );
};

export default Main;
