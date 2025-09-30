import { Helmet } from "react-helmet-async";
import Profile from "../Profile/Profile";

const Dashboard = () => {
      return (
            <div>
                  <Helmet>
                        <title>
                              Profile || Cloth For All
                        </title>
                  </Helmet>
                  <Profile></Profile>
            </div>
      );
};

export default Dashboard;