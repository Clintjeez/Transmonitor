import React, { useState } from "react";
import LargeChart from "../charts/LargeChart";

import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

import "./DataGraph.css";

function Datagraph() {
  let currentDate = new Date();
  const [date, setDate] = useState(currentDate.toDateString());
  return (
    <div className="datagraph">
      <div className="datagraph__container">
        <div className="datagraph__box col__1">
          <div className="datagraph__box__top">
            <p className="date">Today: {date}</p>
            <div className="datagraph__date">
              <select className="datagraph__date__select">
                <option>Jan1 - Jun1</option>
              </select>
              <div className="datagraph__date__btn__wrapper">
                <button className="datagraph__date__btn btn__1">
                  <NavigateBeforeIcon className="dg__btn__icon" />
                </button>
                <button className="datagraph__date__btn btn__2">
                  <NavigateNextIcon className="dg__btn__icon" />
                </button>
              </div>
            </div>
          </div>
          <div className="chart__wrapper">
            <LargeChart />
          </div>
        </div>
        <div className="datagraph__box col__2">
          <p className="datagraph__box__title">Orders</p>
          <div className="datagraph__bar1">
            <div className="datagraph__bar2"></div>
          </div>
          <p className="bar__label">
            Pending Orders: <span className="txt__yellow">20</span>
          </p>
          <p className="bar__label">
            Reconciled Orders: <span className="txt__green">80</span>
          </p>
          <p className="bar__label">
            Total Orders: <span className="txt__blue">100</span>
          </p>
        </div>
        <div className="datagraph__box col__3">
          <p className="datagraph__box__title">Payment</p>
          <div className="datagraph__bar1">
            <div className="datagraph__bar2"></div>
          </div>
          <p className="bar__label">
            Un-reconciled Payments: <span className="txt__yellow">20</span>
          </p>
          <p className="bar__label">
            Reconciled Payments: <span className="txt__green">80</span>
          </p>
          <p className="bar__label">
            Total Payments: <span className="txt__blue">100</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Datagraph;
