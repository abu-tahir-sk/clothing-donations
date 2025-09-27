import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch("/testimonials.json")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);
  return (
   <>
    <Marquee speed={100} pauseOnHover={true} className="bg-gray-50 mt-10 space-x-4">
      <div className=" flex gap-4">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="flex flex-col items-center  shadow hover:scale-105 transition "
          >
            <div className="w-44 h-full">
              <img src={t.image} alt={t.name} className="w-full h-full" />
            </div>
            <div className="p-4">
              <h3 className="font-semibold">{t.name}</h3>
              <p className="text-sm text-gray-500">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </Marquee>
     <button className="px-6 ml-2 py-3 bg-cyan-600 text-white rounded-full shadow hover:bg-gray-700 transition">
        Read Success Stories →
      </button>
   </>
    
  );
};

export default Testimonials;
