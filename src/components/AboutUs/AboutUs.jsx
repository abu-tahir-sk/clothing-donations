import aboutImg from "../../assets/image/fdsgfdg.jpg"

const AboutUs = ({ aboutUs }) => {
 const {image,title,last_updated,summary,mission,goals,how_to_contribute,monetary_contributions,donate_winter_clothing,volunteer_with_us}= aboutUs;
  return (
   
      <div className="">
      <div className="card">
        <div className="card-body pt-2">
            <p className="text-yellow-900 font-light">Help Blind People, Legal help for NGOs, social welfare ngos</p>
          <h2 className="font-bold text-2xl">
            {title}
          </h2>
          <p className="text-gray-600 font-mono">Kaavya Bhatt / {last_updated}</p>
      
        </div>
        <figure>
          <img
          className="w-full overflow-hidden transform transition duration-200 hover:scale-105 hover:shadow-xl"
            src={image}
            alt="Shoes"
          />
        </figure>
      </div>
        <div className="p-6">
             <p className="text-gray-500 py-4 overflow-hidden transform transition duration-300 hover:scale-105">
           {summary}
          </p>
           <div className="border-t-2 border-gray-200 my-10 "></div>
          <div className="py-4">
           <div>
             <img className="w-full overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl " src={aboutImg} alt="" />
           </div>

            <div className="border-t-2 border-gray-200 mt-10 "></div>
            <h3 className="font-bold text-3xl py-3">Winter Closing Donation Camp</h3>
            <div className="pl-4">
                  <p className="pt-2 text-gray-500"><span className="font-bold text-black ">Mission:</span> {mission}</p>
            <p className="py-2 text-gray-500"><span className="font-bold text-black ">Goals:</span> {goals}</p>
            </div>
          </div>
          <div className="">
             <p className="pt-2 text-gray-500"><span className="font-bold text-black ">Donate Winter Clothing:</span> {donate_winter_clothing}</p>
            <p className="py-2 text-gray-500"><span className="font-bold text-black ">Monetary Contributions:</span> {monetary_contributions}</p>
            <p className="py-2 text-gray-500"><span className="font-bold text-black">Volunteer with Us:</span> {volunteer_with_us}</p>
            <p className="py-2 text-gray-500"><span className="font-bold text-black">How to contribute:</span> {how_to_contribute}</p>
          </div>
        </div>
    </div>
  
  );
};

export default AboutUs;
