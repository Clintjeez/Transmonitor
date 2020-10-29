import React from "react";

// Components
import InfoCard from "../Components/InfoCard/InfoCard";

import "./Main.css";

function Main() {
  return (
    <div className="main">
      <div className="main__stats">
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
      </div>
      {/* <DataGraph />
  <Table /> */}
    </div>
  );
}

export default Main;
