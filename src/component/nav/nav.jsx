import React from "react";
import "../../index.css";
import "./nav.css";

const Nav = () => {
  return (
    <nav className="nav_pos">
      <div className="left_part">
        <div className="logo">PiggyVest</div>
        <ul>
          <li>Save</li>
          <li>Invest</li>
          <li>Story</li>
          <li>Faq</li>
          <li>Resources</li>
        </ul>
      </div>

      <div className="buttons_in">
        <button className="btn">Sign in</button>
        <button className="btn btn_primary">Create an Account</button>
      </div>
    </nav>
  );
};

export default Nav;
