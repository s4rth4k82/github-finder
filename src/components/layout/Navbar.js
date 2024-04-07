import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom'

const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar bg-dark">
      <h1>
        <i className={icon} />
        {title}
      </h1>
      <ul>
        <li>
          <Link to='/'>HomePage</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <a href='https://www.github.com/Sarthak8822'>Github</a>
        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
