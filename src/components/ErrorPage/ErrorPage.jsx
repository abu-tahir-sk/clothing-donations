
import { Helmet } from "react-helmet-async";
import error from "../../assets/image/982.jpg"
const ErrorPage = () => {
  return (
    <div className="">
      <Helmet>
        <title>404 page not found</title>
      </Helmet>
      <img className="w-full" src={error} alt="" />
      <div className="">
        <div className="flex absolute top-16 flex-col justify-center items-center text-center py-28">
          <h1 className="text-7xl font-extrabold text-white">404</h1>
          <h2 className="text-5xl text-white py-6 font-bold">
            No Results Found
          </h2>
          <p className="text-white md:px-36">
            No Results Found The page you requested could not be found. Try
            refining your search, or use the navigation above to locate the
            post.
          </p>

          <div></div>
        </div>
      </div>
     
    </div>
  );
};

export default ErrorPage;
