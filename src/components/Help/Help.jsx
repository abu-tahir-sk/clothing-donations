import { Helmet } from "react-helmet-async";
import Works from "../Works/Works";


const Help = () => {
  return (
    <div className="w-11/12 mx-auto my-4">
      <Helmet>
        <title>How to helps || Cloth For All</title>
      </Helmet>
      <h2 className="text-center text-3xl font-bold">How to Help</h2>
     <Works></Works>
    </div>
  );
};

export default Help;
