// import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Reveal from "../../animation/Reveal";
import Campaign from "../Campaign/Campaign";
import { useLoaderData } from "react-router-dom";

const Campaigns = () => {
  // const [campaigns, setCampaigns] = useState([]);
  // useEffect(() => {
  //   fetch("/campaigns.json")
  //     .then((res) => res.json())
  //     .then((data) => setCampaigns(data));
  // }, []);
  const campaigns = useLoaderData();
  return (
    <Reveal>
      <div className="my-10 w-11/12 mx-auto">
      <Helmet>
        <title>Campaign || Cloth For All</title>
      </Helmet>
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {campaigns.map((campaign) => (
            <Campaign key={campaign.id} campaign={campaign}></Campaign>
          ))}
        </div>
      </div>
    </Reveal>
  );
};

export default Campaigns;
