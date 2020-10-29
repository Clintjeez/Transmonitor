import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Status from "./Status";
import ReactPaginate from "react-paginate";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import "./TableBody.css";

function TableBody({ payment_data, handlePageClick, pageCount }) {
  console.log(payment_data);

  return (
    <>
      {payment_data.map(
        ({ price, name, transactionNumber, time, status }, idx) => (
          <tbody key={idx} className="table__body">
            <td className="table__data__items types">
              <Avatar className="table__avatar">VW</Avatar>
              {name}
            </td>
            <td className="table__data__items"> {price}</td>
            <td className="table__data__items">{transactionNumber}</td>
            <td className="table__data__items">{time}</td>
            <td className="table__data__items">
              <div className="status__wrapper">
                <Status status={status} />
                <ExpandMoreIcon />
              </div>
            </td>
          </tbody>
        )
      )}
      <ReactPaginate
        previousLabel={"prev"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
    </>
  );
}

export default TableBody;
