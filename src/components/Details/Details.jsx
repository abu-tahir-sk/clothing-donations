import { useLoaderData } from "react-router-dom";

import Modal from "../Modal/Modal";
import { useState } from "react";

const Details = () => {
  const details = useLoaderData();
  const [isOpen, setIsOpen] = useState(false);

  const handleDonateSubmit = (e) => {
    
      e.preventDefault();
      const quantity = e.target.quantity.value;
      const selectItem = e.target.selectItem.value;
      const location = e.target.location.value;
      const additional = e.target.additional.value;

      if (!quantity || !selectItem || !location) {
        alert("Please fill required fields!");
         e.target.reset();
        return;
      }

      const info = {
        quantity,
        selectItem,
        location,
        additional,
      };
      let saveData = [];
      const localData = localStorage.getItem("donate");
      if (localData) {
        saveData = JSON.parse(localData);
      }
      saveData.push(info);
      localStorage.setItem("donate", JSON.stringify(saveData));
      setIsOpen(true);
       e.target.reset();
  };

  return (
    <div className="bg-gray-200 p-4">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-11/12  mx-auto my-6">
        <div className="card flex flex-col justify-center items-center bg-base-100 md:col-span-5 shadow-xl h-full">
          <figure>
            <img className="p-6" src={details.image} alt={details.title} />
          </figure>
          <div className="card-body font-extrabold">
            <h2 className="card-title text-3xl">{details.title}</h2>
            <p className="text-gray-500">{details.description}</p>
            <h4 className="font-bold card-title text-gray-500">
              <span className="text-gray-900">Status :</span>
              {details.status}
            </h4>
            <h4 className="text-gray-500 card-title font-bold">
              <span className=" text-gray-900">Division :</span>
              {details.division}
            </h4>
            <h4 className="font-bold card-title text-gray-500">
              <span className="text-gray-900">Contact:</span>
              {details.contact}
            </h4>
          </div>
        </div>
        <div className="md:col-span-7">
          <div className="card bg-base-100 h-full w-full  shrink-0 shadow-2xl py-4">
            <form onSubmit={handleDonateSubmit} className="card-body">
              <div className="form-control ">
                <label className="label">
                  <span className="label-text text-gray-900 text-xl py-3">
                    Quantity of items
                  </span>
                </label>
                <input
                  type="number"
                  name="quantity"
                  min="1"
                  max="auto"
                  defaultValue="0"
                  required
                  className="input input-bordered input-md w-full"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-900 text-xl pt-1 pb-4">
                    Item type
                  </span>
                </label>
                <select
                  name="selectItem"
                  required
                  className="select select-bordered w-full input input-bordered input-md"
                >
                  <option disabled selected>
                    Select an item Type
                  </option>
                  <option>blanket </option>
                  <option>jacket</option>
                  <option>sweater</option>
                </select>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text label-text text-gray-900 text-xl pb-4 pt-1">
                    Pickup location
                  </span>
                </label>
                <input
                  type="text"
                  name="location"
                  placeholder=" House 12, Road 5, Dhanmondi, Dhaka"
                  className="input input-bordered input-md w-full font-thin"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className=" label-text text-gray-900 text-xl pb-4 pt-1">
                    Additional notes (optional)
                  </span>
                </label>
                <input
                  type="text"
                  name="additional"
                  placeholder="Type here"
                  className="input input-bordered input-lg w-full"
                />
              </div>

              <div className="form-control mt-6 text-[#4ade80]">
                <button
                  type="submit" 
                  className="btn btn-lg bg-cyan-600 text-white text-xl w-full"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          {isOpen && <Modal setIsOpen={setIsOpen}></Modal>}
        </div>
      </div>
    </div>
  );
};

export default Details;
