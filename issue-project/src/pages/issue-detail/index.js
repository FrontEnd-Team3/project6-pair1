import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import getIssues from "../../apis/get-issue-api";
const IssueDetailPage = () => {
  const getData = async () => {
    await getIssues("angular", "angular-cli", 10);
  };

  console.log(getData());
  const navigate = useNavigate();
  const backToMainPage = () => {
    navigate("/");
  };

  return (
    <>
      <Container>
        <ImgContainer>
          <ProfileImg alt="img" src="FakeProfile.jpg" />
        </ImgContainer>
        <UserID>Clydin</UserID>
        <IssueDetail>
          <p>
            <IssueNumber>#16980</IssueNumber>:{" "}
            <span>Yarn Pnp Support Status</span>
          </p>
          <p>
            <span>작성일</span> / <span>코멘트 수</span>
          </p>
        </IssueDetail>
        <IssueContent>본문</IssueContent>
      </Container>
      <div>
        <GoBackBtn onClick={backToMainPage}>{"< 뒤로 돌아가기"}</GoBackBtn>
      </div>
    </>
  );
};

export default IssueDetailPage;

const Container = styled.div`
  background-color: lightgray;
  height: 520px;
  width: 900px;
  position: absolute;
  top: 100px;
  left: 550px;
`;

const ImgContainer = styled.div`
  margin-top: 19px;
  padding-left: 750px;
`;

const ProfileImg = styled.img`
  height: 90px;
  width: 90px;
  border-radius: 50%;
`;

const UserID = styled.div`
  text-align: right;
  margin-right: 32px;
  margin-top: 15px;
  font-size: 20px;
  font-weight: bold;
`;

const IssueDetail = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  margin: 15px 32px;
`;

const IssueNumber = styled.span`
  font-weight: bold;
`;

const IssueContent = styled.div`
  background-color: white;
  width: 830px;
  height: 300px;
  margin-left: 35px;
  margin-top: 10px;
  padding: 20px;
  text-align: left;
  font-size: 12px;
  font-weight: 100;
`;

const GoBackBtn = styled.button`
  color: white;
  border: none;
  background-color: transparent;
  font-size: 20px;
  font-weight: 100;
  :hover {
    text-decoration: underline solid 1px white;
  }
  position: absolute;
  bottom: 50px;
  right: 450px;
`;
