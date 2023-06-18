import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <nav>
      <div className="search">
        <input type="text" />
        <button>검색</button>
      </div>
    </nav>
  );
}

export default Nav;
