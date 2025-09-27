import { useEffect, useState } from "react";
import Campaign from "../Campaign/Campaign";

const Campaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  useEffect(() => {
    fetch("/campaigns.json")
      .then((res) => res.json())
      .then((data) => setCampaigns(data));
  }, []);
  return (
    <div className="my-10 w-11/12 mx-auto">
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {campaigns.map((campaign) => (
          <Campaign key={campaign.id} campaign={campaign}></Campaign>
        ))}
      </div>
    </div>
  );
};

export default Campaigns;
