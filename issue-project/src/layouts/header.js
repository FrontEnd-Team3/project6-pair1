import React from "react";
import { Link } from "react-router-dom";
import github from "./githubLogo.png";
import styled from "styled-components";

function Header() {
  return (
    <Headeer>
      <Logo src={github} />
      <Headerlink>
        <Link style={{ color: "white" }}>angular</Link>/
        <Link style={{ color: "white" }}>angular-cli</Link>
      </Headerlink>
    </Headeer>
  );
}

export default Header;

const Logo = styled.img`
  width: 70px;
  height: 70px;
  position: absolute;
  top: 20px;
  left: 10px;
`;
const Headeer = styled.header`
  width: 100%;
  height: 10vh;
  position: relative;
`;
const Headerlink = styled.div`
  font-size: 30px;
  font-weight: 100;
  position: absolute;
  left: 350px;
  top: 20px;
  color: white;
  padding: 10px;
  border: 1px solid white;
`;
