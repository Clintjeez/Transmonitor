import React from "react";
// import MiniChart from "../charts/MiniChart";
import "./InfoCard.css";

function Infocard({ title, data }) {
  return (
    <div className="infocard">
      <div className="infocard__content">
        <p className="infocard__title">{title}</p>
        <h3 className="infocard__data">{data}</h3>
      </div>
      <div className="infocard__graph">{/* <MiniChart /> */}</div>
    </div>
  );
}

export default Infocard;
