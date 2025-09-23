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
    <Marquee className="bg-gray-50 my-10" >
     <div className=" flex gap-6">
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

      <button className="mt-10 px-6 py-3 bg-black text-white rounded-full shadow hover:bg-gray-800 transition">
        Read Success Stories →
      </button>
    </div>
    </Marquee>
  );
};

export default Testimonials;
