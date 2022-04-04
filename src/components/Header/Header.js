import React from "react";
import CustomLink from "../CustomLink/CustomLink";
import './Header.css';

const Header = () => {
  return (
      <ul className="nav justify-content-center sticky-top pb-2">
        <li className="nav-item">
          <CustomLink className="nav-link" to="/">
            Home
          </CustomLink>
        </li>
        <li className="nav-item">
          <CustomLink className="nav-link" to="/reviews">
            Reviews
          </CustomLink>
        </li>
        <li className="nav-item">
          <CustomLink className="nav-link" to="/dashboard">
            Dashboard
          </CustomLink>
        </li>
        <li className="nav-item">
          <CustomLink className="nav-link" to="/blogs">
            Blogs
          </CustomLink>
        </li>
      </ul>
  );
};

export default Header;
