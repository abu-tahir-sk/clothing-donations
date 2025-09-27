import { useEffect, useState } from "react";

const GetInvolve = () => {
  const [getInvolve, setGetInvolve] = useState([]);
  
  useEffect(() => {
    fetch("/involved.json")
      .then((res) => res.json())
      .then((data) => setGetInvolve(data));
  }, []);

  return (
    <div>
      {getInvolve.map((set, indx) => (
        <div className="bg-white md:flex justify-between items-center gap-x-6 p-4 border-4 border-gray-300 rounded-md opacity-0 animate-[fadeIn_1s_ease-in-out_forwards] " key={indx}>
            <div>
            <div className="">
                <h2 className="font-bold text-2xl font-mono">{set.title}</h2>
              <p className="text-gray-600">{set.description}</p>
            </div>
              <div className="pt-3">
                <img
                src={set.img}
                className="rounded-md h-full w-full"
              />
              </div>
            </div>
          <div>
             <div className="bg-gray-200 p-2 rounded-md">
             {set.options.map((see, inx) => (
              <div className="bg-white m-2 p-2 rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl" key={inx} >
                
                 <div className="flex justify-start items-center gap-2">
                   <h3 className="text-4xl ">{see.icon} </h3>
                  <h3 className="font-bold ">{see.subtitle}</h3>
                 </div>
                  <p>{see.subdescription}</p>
                
              </div>
            ))}
         
           </div>
               <div className="py-2">
                 <button className="btn bg-cyan-600 text-white hover:bg-slate-800">Join as a Volunteer</button>
               </div>
          </div>
           
          </div>
        
      ))}
    </div>
  );
};

export default GetInvolve;
