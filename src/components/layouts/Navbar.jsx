import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ title, icon }) => {
  return (
    <Fragment>
      <nav className="navbar bg-primary">
        <h1>
          <Link to="/">
            <i className={icon} /> {title}
          </Link>
        </h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github"
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
