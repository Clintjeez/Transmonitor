import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import MenuIcon from "@material-ui/icons/Menu";

import UserImage from "../../Assets/img/profile_img.png";

import "./Header.css";

const ITEM_HEIGHT = 58;

function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="header">
      {/* Side nav Drawer */}
      <IconButton
        color="inherit"
        aria-label="open drawer"
        // onClick={handleDrawerOpen}
        edge="start"
        // className={clsx(classes.menuButton, open && classes.hide)}
      >
        <MenuIcon />
      </IconButton>
      {/* Side nav Drawer */}
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
        {/* Mobile Nav */}
        <IconButton
          aria-label="more"
          aria-controls="long-menu"
          aria-haspopup="true"
          onClick={handleClick}
          className="menu__btn"
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: "20ch",
            },
          }}
        >
          <MenuItem onClick={handleClose}>
            <ul className="menu__container">
              <li className="menu__items">
                <a> Support</a>
              </li>
              <li className="menu__items">
                <a> FAQ</a>
              </li>
              <li className="menu__items">
                <Badge
                  // className="header__nav__item"
                  badgeContent={4}
                  color="primary"
                >
                  <NotificationsNoneIcon />
                </Badge>
              </li>
              <li className="menu__items user__item">
                <span>
                  <p className="header__user__greet">Hello</p>
                  <p className="header__user__username">Clinton James</p>
                </span>
                <img className="user__img" src={UserImage} alt="profile" />
              </li>
            </ul>
          </MenuItem>
        </Menu>
        {/* Mobile Nav */}
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
        <img className="user__img" src={UserImage} alt="profile" />
      </div>
    </div>
  );
}

export default Header;
