import { useEffect, useState } from "react";

const Works = () => {
  const [works, setWorks] = useState([]);
  useEffect(() => {
    fetch("/work.json")
      .then((res) => res.json())
      .then((data) => setWorks(data));
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 my-12 p-4 bg-gray-50">
      {works.map((work) => (
        <div className="overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl flex flex-col gap-3 text-center items-center p-6 bg-white rounded-xl shadow-md" key={work.__id}>
            <img className="w-16 h-16" src={work.icon} alt="" />
            <h5 className=" font-bold">{work.title}</h5>
            <p className="text-gray-600">{work.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Works;
