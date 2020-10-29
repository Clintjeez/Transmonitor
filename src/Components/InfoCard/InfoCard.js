import React from "react";
import MiniChart from "../charts/MiniChart";
import "./InfoCard.css";

function Infocard() {
  return (
    <div className="infocard">
      <div className="infocard__content">
        <p className="infocard__title">Daily Transaction Volume</p>
        <h3 className="infocard__data">2,345</h3>
      </div>
      <div className="infocard__graph">
        <MiniChart />
      </div>
    </div>
  );
}

export default Infocard;
