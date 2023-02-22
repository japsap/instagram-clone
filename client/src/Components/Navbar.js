import React from "react";
import { Link } from "react-router-dom";

import logo from "../Assets/Images/instagram-logo-white.png";
import logoSmall from '../Assets/Images/download.png'
import DummyData from "../DummyData";

import { RxHamburgerMenu } from "react-icons/rx";
import { getAuth } from "firebase/auth";




const Navbar = () => {
  const defaultImg =
    "https://msrealtors.org/wp-content/uploads/2018/11/no-user-image.gif";

  const { currentUser } = getAuth();

  return (
    <div className="narbar-container">
      <div className="large-navbar">
        <div className="navbar-logo">
          <img src={logo} className='img-big' />
          <img src={logoSmall} className='img-small' />
        </div>
        <div className="navbar-links">
          {DummyData.pcNavbar.map((link) => {
            const { name, icon, path, id } = link;
            return (
              <li key={id}>
                <i className="icon">{icon}</i>
                <Link to={path}>{name}</Link>
              </li>
            );
          })}
          <div className="user-container">
            <li >
              <img src={currentUser?.photoURL== null ? defaultImg : currentUser?.photoURL} />
              <Link to="/profile">
                {currentUser?.displayName == null ? currentUser?.email : currentUser?.displayName}
              </Link>
            </li>
          </div>
        </div>
        <div className="more">
          <li>
            <i>
              <RxHamburgerMenu />
            </i>
            <a>More</a>
          </li>
        </div>
      </div>
      <div className="mobile-navbar"></div>
    </div>
  );
};

export default Navbar;
