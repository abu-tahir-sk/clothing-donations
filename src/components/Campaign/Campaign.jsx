
import { LuArrowRightToLine } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Campaign = ({ campaign }) => {
  const { title,image,division, description,id } = campaign;
  return (
    <div className="card bg-base-100  shadow-md border-2 border-[#b9b9b9]">
     <div className="p-6">
       <figure>
        <img
          src={image}
          alt={title}
        />
      </figure>
     </div>
      <div className="card-body">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="font-bold text-[#7A7A7A]">
         {description}
        </p>
        <div className="flex justify-start items-center gap-2 py-3">
            <FaLocationDot className="text-2xl text-cyan-600"></FaLocationDot>
            <h3 className="font-bold text-[#7A7A7A]"> {division}</h3>
        </div>
        <div className="card-actions justify-start">
          <Link to={`/details/${campaign.id}`} className="btn bg-cyan-600 hover:bg-gray-700 text-white hover:border-4">
            Donate Now <LuArrowRightToLine></LuArrowRightToLine>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Campaign;
