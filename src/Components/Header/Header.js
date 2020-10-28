import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import Badge from "@material-ui/core/Badge";

import UserImage from "../../Assets/img/profile_img.png";

import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__brand">
        <p>TransMonitor</p>
      </div>
      <div className="header__search">
        <SearchIcon className="header__searchIcon" />
        <form className="header__searchForm">
          <input
            className="header__searchInput"
            type="text"
            placeholder="search"
          />
        </form>
      </div>
      <div className="header__nav">
        <a href="/" className="header__nav__item">
          Support
        </a>
        <a href="/" className="header__nav__item">
          FAQ
        </a>
        <Badge className="header__nav__item" badgeContent={4} color="primary">
          <NotificationsNoneIcon />
        </Badge>
      </div>
      <div className="header__user">
        <span>
          <p className="header__user__greet">Hello</p>
          <p className="header__user__username">Clinton James</p>
        </span>
        <img src={UserImage} alt="profile" />
      </div>
    </div>
  );
}

export default Header;
