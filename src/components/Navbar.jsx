import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const navBtnStyle = {
    display: "inline-block",
    margin: "0 10px",
    padding: "3px 8px",
    textDecoration: "none",
    backgroundColor: "rgba(0,0,0,0.4)",
    color: "white",
    fontSize: "1rem",
    borderRadius: "5px",
  };

  return (
    <div>
      <hr style={{margin: "20px auto"}}></hr>
      <p >
        <NavLink to="/" style={navBtnStyle} activeclassname="active-menuitem" >Home</NavLink>
        <NavLink to="/about" style={navBtnStyle} activeclassname="active-menuitem"  >About</NavLink>
        <NavLink to="/media" style={navBtnStyle} activeclassname="active-menuitem"  >Media</NavLink>
        <NavLink to="/select" style={navBtnStyle} activeclassname="active-menuitem"  >Select</NavLink>
        <NavLink to="/contact" style={navBtnStyle} activeclassname="active-menuitem"  >Contact</NavLink>
      </p>
    </div>
  );
}

export default Navbar;

