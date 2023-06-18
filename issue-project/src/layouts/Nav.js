import React from "react";
import styled from "styled-components";
function Nav() {
  return (
    <Navbar>
      <Search>
        <Input />
        <LastBtn>검색</LastBtn>
      </Search>
    </Navbar>
  );
}

export default Nav;

const Navbar = styled.nav`
  width: 350px;
  position: absolute;
  top: 242px;
  left: 70px;
  height: 150px;
  border: 0.5px solid white;
  border-radius: 16px;
`;
const Search = styled.div`
  margin-top: 30px;
`;
const Input = styled.input`
  border: none;
  outline: none;
  background-color: white;
  padding: 5px 10px;
  border-radius: 10px;
`;
const LastBtn = styled.button`
  width: 100px;
  height: 30px;
  background-color: ${({ isSelected }) => (isSelected ? "white" : "black")};
  color: ${({ isSelected }) => (isSelected ? "black" : "white")};
  border-radius: 16px;
  border: 0.5px solid ${({ isSelected }) => (isSelected ? "black" : "white")};
  font-size: 13px;
  margin-left: 15px;
  :hover {
    background-color: rgb(90, 83, 83);
  }
`;
