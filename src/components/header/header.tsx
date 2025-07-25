import React from "react";
import "./header.css";
import logo from "../../assets/images/logo.PNG";
import search from '../../assets/images/search.svg'
import notification from '../../assets/images/notification.svg'
import user from '../../assets/images/user.svg'


const Header: React.FC = () => {
  return (
    <div className="header_outer_container">
      <div className="header_container">
        <div className="header_left">
          <ul>
            <li>
              <img src={logo} alt="logo of netFlix" className="logo" />
            </li>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>My List</li>
            <li>Browse by Language</li>
            <div className="icons_container">
               <li>
              <img src={search}  alt="search-icon" className="icons" />
            </li>
              <li>
              <img src={notification}  alt="notification-icon" className="icons" />
              </li>
              <li><img src={user} alt="user-icon"  className="icons"/></li>
           </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
