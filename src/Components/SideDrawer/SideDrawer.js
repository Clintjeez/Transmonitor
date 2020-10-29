import React from "react";

// Icons
import Overview_icon from "../../Assets/icons/overview.svg";
import All_payment_icon from "../../Assets/icons/all_payment.svg";
import Reconciled_icon from "../../Assets/icons/reconciled.svg";
import Unreconciled_icon from "../../Assets/icons/unreconciled.svg";
import Manual_icon from "../../Assets/icons/manual.svg";
import Orders_icon from "../../Assets/icons/orders.svg";
import Pending_icon from "../../Assets/icons/pending.svg";
import rec_order_icon from "../../Assets/icons/rec_order.svg";
import Profile_icon from "../../Assets/icons/profile.svg";

function SideDrawer({ onClose }) {
  return (
    <div>
      <div className="sidenav__mobile">
        <div className="sidenav__cta">
          <button className="sidenav__cta__btn">generate invoice</button>
        </div>
        <div className="sidenav__navs">
          <p className="sidenav__navs__title">Main</p>
          <ul>
            <li className="sidenav__navs__items" onClick={onClose}>
              <img src={Overview_icon} alt="icons" />
              <span>Overview</span>
            </li>
          </ul>
        </div>
        <div className="sidenav__navs">
          <p className="sidenav__navs__title">Payments</p>
          <ul>
            <li className="sidenav__navs__items" onClick={onClose}>
              <img src={All_payment_icon} alt="icons" />
              <span>All Payments</span>
            </li>
            <li className="sidenav__navs__items" onClick={onClose}>
              <img src={Reconciled_icon} alt="icons" />
              <span> Reconciled Payments</span>
            </li>
            <li className="sidenav__navs__items" onClick={onClose}>
              <img src={Unreconciled_icon} alt="icons" />
              <span>Un - Reconciled Payments</span>
            </li>
            <li className="sidenav__navs__items" onClick={onClose}>
              <img src={Manual_icon} alt="icons" />
              <span>Manual Settlement </span>
            </li>
          </ul>
        </div>
        <div className="sidenav__navs">
          <p className="sidenav__navs__title">Orders</p>
          <ul>
            <li className="sidenav__navs__items" onClick={onClose}>
              <img src={Orders_icon} alt="icons" />
              <span>All Orders</span>
            </li>
            <li className="sidenav__navs__items" onClick={onClose}>
              <img src={Pending_icon} alt="icons" />
              <span>Pending Orders</span>
            </li>
            <li className="sidenav__navs__items" onClick={onClose}>
              <img src={rec_order_icon} alt="icons" />
              <span>Reconciled Orders</span>
            </li>
          </ul>
        </div>
        <div className="sidenav__navs">
          <ul>
            <li className="sidenav__navs__items" onClick={onClose}>
              <img src={Profile_icon} />
              <span>Merchant Profile</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideDrawer;
