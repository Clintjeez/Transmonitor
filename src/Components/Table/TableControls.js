import React from "react";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";

import "./TableControls.css";

function TableControls({ handleSelect, value }) {
  return (
    <header className="table__header">
      <h2 className="table__title">Payments</h2>
      <div className="table__controls">
        <div className="col table__sort">
          <p className="table__sort__label1">Showing</p>
          <select className="table__sort_select">
            <option>20</option>
          </select>
          <p className="table__sort__label2">out 500 payments</p>
        </div>
        <div className="col">
          <TextField
            id="input-with-icon-textfield"
            placeholder="Search"
            className="table__search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon className="table__search__icon" />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div className="col table__group">
          <p className="table__group__title">Show</p>
          <select
            onChange={handleSelect}
            value={value}
            className="table__group__select"
          >
            <option value="All">All</option>
            <option value="Reconciled">Reconciled</option>
            <option value="Un-reconciled">Un-reconciled</option>
            <option>Settled</option>
            <option>Unsettled</option>
          </select>
        </div>
      </div>
    </header>
  );
}

export default TableControls;
