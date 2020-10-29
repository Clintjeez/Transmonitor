import React from "react";
import ReactPaginate from "react-paginate";

function TableFooter({ handlePageClick, pageCount }) {
  return (
    <div className="table__footer">
      <p>Showing 1 to 10 of 500 entries</p>
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
    </div>
  );
}

export default TableFooter;
