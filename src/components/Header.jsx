/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";

function Header({ title = "Feedback App", bgColor, textColor }) {

  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
    marginBottom: '1px',
  };

  return (
    <header style={headerStyles}>
      <div className="container" >
        <h2>Feedback App Header - {title}</h2>
      </div>
    </header>
  );
}


Header.propTypes = {
  title: PropTypes.string.isRequired,
  bgColor: PropTypes.string, 
  textColor: PropTypes.string
};


Header.defaultProps = {
  title: "Feedback App",
  bgColor: "lightblue", 
  textColor: "blue"
};


export default Header;
