import React from "react";

// Components
import InfoCard from "../Components/InfoCard/InfoCard";
import DataGraph from "../Components/DataGraph/DataGraph";

import "./Main.css";

function Main() {
  return (
    <div className="main">
      <div className="main__stats">
        <InfoCard title="Daily Transaction Volume" data="2,342" />
        <InfoCard title="Daily Transaction Value" data="₦4,000,000" />
        <InfoCard title="Daily Transaction Volume" data="452,000" />
        <InfoCard title="Daily Transaction Value" data="₦4,000,000" />
      </div>
      <DataGraph />
      {/* <Table /> */}
    </div>
  );
}

export default Main;
