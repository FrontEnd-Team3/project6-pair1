import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h2>로고</h2>
      <div className="header-link">
        <Link>angular</Link>/<Link>angular-cli</Link>
      </div>
    </header>
  );
}

export default Header;
