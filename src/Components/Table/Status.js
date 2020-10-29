import React from "react";

import "./Status.css";

const ClassnameToggle = (status) => {
  if (status === "Reconciled") {
    return "dot__green";
  } else if (status === "Un-reconciled") {
    return "dot__grey";
  } else {
    return "dot__yellow";
  }
};

function Status({ status }) {
  return (
    <div className="status">
      <div className={`${ClassnameToggle(status)}  status__dot`}></div>
      <p className={`${ClassnameToggle(status)} status__label`}>{status}</p>
    </div>
  );
}

export default Status;
