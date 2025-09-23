import { useEffect, useState } from "react";
import AboutUs from "../AboutUs/AboutUs";
import Supplies from "../../assets/image/School Supplies Donation.jpg";

const About = () => {
  const [about, setAbout] = useState([]);
  useEffect(() => {
    fetch("/about.json")
      .then((res) => res.json())
      .then((data) => setAbout(data));
  }, []);
  return (
    <div className="grid md:grid-cols-12 py-10 animate-slideUp gap-4">
      <div className="col-span-12 md:col-span-9 bg-gray-50 border-2 border-gray-300 p-4">
        {about.map((aboutUs) => (
          <AboutUs key={aboutUs._id} aboutUs={aboutUs}></AboutUs>
        ))}
      </div>
      <div className="md:col-span-3  hidden md:flex flex-col p-3 shadow-md border-2 border-gray-200 gap-6 min-h-screen">
        <div className="p-2 text-center h-full">
          <h4 className="text-2xl font-bold py-3">
            How Donations Change Lives
          </h4>
          <img className="" src={Supplies} alt="" />
          <p className="text-gray-500 py-2">
            Donations are more than just acts of kindness—they are lifelines
            that bring hope, dignity, and opportunity to those in need. When we
            share a part of what we have, we not only help others survive
            difficult times but also create a stronger and more compassionate
            society. Clothing donations keep families warm during harsh winters,
            food donations prevent hunger for those struggling every day, and
            educational supplies help children continue their journey of
            learning and growth. Every contribution, no matter how small, plays
            a role in shaping a brighter future. A single donated jacket may
            protect a child from illness, while a set of notebooks can inspire a
            young student to dream big. For families affected by disasters,
            donations provide immediate relief and comfort during moments of
            despair. Donations also build connections between communities. They
            remind us that we are part of something greater than ourselves and
            that collective generosity has the power to change lives. Whether
            it’s time, money, or resources, giving transforms both the donor and
            the receiver. By choosing to donate, you become a part of a global
            movement of empathy and compassion—proof that humanity thrives when
            we care for one another.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
