import React from "react";
import "./Navbar.css";

function Navbar({ logo, navItems }) {
  return (
    <nav className="navbar">
      <h1 className="logo">{logo}</h1>
      <ul className="nav-links">
        {navItems.map((item, index) => (
          <li key={index}>
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
