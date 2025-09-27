import { FaGetPocket } from "react-icons/fa";
import About from "./About/About";
import Banner from "./Banner/Banner";
import Testimonials from "./Testimonials/Testimonials";
import Works from "./Works/Works";
import GetInvolve from "./Getinvolv/GetInvolve";

const Home = () => {
  return (
    <div>
      <div>
        <Banner></Banner>
      </div>
      <section className="w-11/12 mx-auto mt-20  opacity-0 animate-[fadeIn_1s_ease-in-out_forwards]">
        <h2 className="font font-bold text-center text-3xl">About Us</h2>
        <About></About>
      </section>
      <section className="w-11/12 mx-auto my-10  opacity-0 animate-[fadeIn_1s_ease-in-out_forwards]">
        <div className="divider">
          <h2 className="text-center text-3xl font-bold py-6">
            How It Works ?
          </h2>
        </div>
        <Works></Works>
      </section>
      <section className="w-11/12 mx-auto my-10  opacity-0 animate-[fadeIn_1s_ease-in-out_forwards]">
        <div className="divider">
          <h2 className="text-center text-3xl font-bold py-6">
            Our Partners
          </h2>
        </div>
        <Testimonials></Testimonials>
      </section>
      <section className="w-11/12 mx-auto my-10  opacity-0 animate-[fadeIn_1s_ease-in-out_forwards]">
      
          <h2 className="text-center text-3xl font-bold py-6">
            Get Involved
          </h2>
        
       <GetInvolve></GetInvolve>
      </section>
    </div>
  );
};

export default Home;
