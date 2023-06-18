import styled from "styled-components";
import github from "./githubLogo.png";
function Header() {
  return (
    <Headeer>
      <Logo src={github} />
      <Headerlink>
        <MainText style={{ color: "white" }}>angular</MainText>/
        <MainText style={{ color: "white" }}>angular-cli</MainText>
      </Headerlink>
    </Headeer>
  );
}

export default Header;

const MainText = styled.p`
  font-size: 24px;
`;

const Logo = styled.img`
  width: 70px;
  height: 70px;

  top: 20px;
  left: 10px;
`;
const Headeer = styled.header`
  width: 100%;
  margin: 20px;
  margin-bottom: 20px;
`;
const Headerlink = styled.div`
  font-size: 30px;
  font-weight: 200;
  left: 350px;
  top: 20px;
  color: white;
  padding: 10px;
`;
