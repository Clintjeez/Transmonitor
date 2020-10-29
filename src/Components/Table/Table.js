import React, { useState, useEffect } from "react";
import TableControls from "./TableControls";
import TableBody from "./TableBody";
import PAYMENT_DATA from "../../payment.data";
import "./Table.css";

function Table() {
  const [status, setStatus] = useState("All");
  const [filtered_status, setFilteredStatus] = useState(PAYMENT_DATA);
  // Pagination
  const [offset, setOffset] = useState(0);
  const [perPage] = useState(10);
  const [pageCount, setPageCount] = useState(0);

  const slicedData = filtered_status.slice(offset, offset + perPage);

  useEffect(() => {
    setPageCount(Math.ceil(filtered_status.length / perPage));
  }, [offset]);

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1);
  };

  const handleSelect = (e) => {
    const { value } = e.target;

    setStatus(value);
    if (value === "All") {
      setFilteredStatus(PAYMENT_DATA);
    } else {
      setFilteredStatus(PAYMENT_DATA.filter((data) => data.status === value));
    }
  };

  return (
    <div className="table">
      <TableControls handleSelect={handleSelect} value={status} />
      <section className="table__data__Wrapper">
        <table className="table__data">
          <thead>
            <tr>
              <th className="table__data__title">Item Type</th>
              <th className="table__data__title">Price</th>
              <th className="table__data__title">Transaction No</th>
              <th className="table__data__title">Time</th>
              <th></th>
            </tr>
          </thead>
          <TableBody
            payment_data={slicedData}
            handlePageClick={handlePageClick}
            pageCount={pageCount}
          />
        </table>
      </section>
    </div>
  );
}

export default Table;
