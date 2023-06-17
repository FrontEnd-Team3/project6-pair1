import React from "react";
import "./Nav.css";
import styled from "styled-components";

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

// const NavContainer = styled.nav`
//   width: 350px;
//   position: absolute;
//   top: 100px;
//   left: 10px;

//   @media (max-width: 800px) {
//     * {
//       display: none;
//     }
//   }
// `;
