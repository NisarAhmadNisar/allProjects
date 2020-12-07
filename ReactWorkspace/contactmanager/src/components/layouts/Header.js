import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

//rfc tab - is use to create functional component

//in function based components we use props as the argument of the component
const Header = props => {
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home">Home</i>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact/add" className="nav-link">
                <i className="fas fa-plus"></i> Add
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                <i className="fas fa-question"></i>About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    // <div>
    //   {/* <h1 style={{ color: "red", fontSize: "20px" }}>{branding}</h1> */}
    //   <h1>{branding}</h1>
    // </div>
  );
};

//default header
Header.defaultProps = {
  branding: "My App"
};

//validate the type of the input in the tag - it wont stop tags from working but it will give error in console
Header.propTypes = {
  branding: PropTypes.string.isRequired
};

//styles
// const headerStyle = {
//   color: "green",
//   fontSize: "20px"
// };

export default Header;
