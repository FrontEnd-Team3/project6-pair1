import { useNavigate, useParams } from "react-router";
import styled from "styled-components";
import { useOneIssue } from "../../contexts/one-issue";
const IssueDetailPage = () => {
  // const getData = async () => {
  //   await getIssues("angular", "angular-cli", 10);
  // };
  // console.log(getData());

  const navigate = useNavigate();
  const handlePageChange = () => {
    navigate("/");
  };

  const { oneIssue } = useOneIssue();
  const params = useParams();
  const issueId = params.id;
  console.log(params.id);

  console.log(oneIssue);
  const imageURL = oneIssue.profileURL;

  return (
    <>
      <Container>
        <ImgContainer>
          <ProfileImg alt="img" src={imageURL} />
        </ImgContainer>
        <UserID>{oneIssue.userName}</UserID>
        <IssueDetail>
          <div>
            <span>Create At: </span>
            {oneIssue.date}
            <span>Comment</span>
            {oneIssue.commentCount}
          </div>
          <DivisionLine />
          <div>
            <IssueNumber>#{issueId}</IssueNumber>
            <IssueTitle>{oneIssue.title}</IssueTitle>
          </div>
        </IssueDetail>
        <IssueContent>
          <span>{oneIssue.content}</span>
        </IssueContent>
      </Container>
      <div>
        <GoBackBtn onClick={() => handlePageChange()}>
          {"< 뒤로 돌아가기"}
        </GoBackBtn>
      </div>
    </>
  );
};

export default IssueDetailPage;

const Container = styled.div`
  background-color: lightgray;
  height: transparent;
  width: 900px;
  position: absolute;
  top: 100px;
  left: 550px;
  * {
    color: black;
  }
`;

const ImgContainer = styled.div`
  margin-top: 19px;
`;

const ProfileImg = styled.img`
  height: 90px;
  width: 90px;
  border-radius: 50%;
`;

const UserID = styled.div`
  text-align: right;
  text-align: center;
  margin-top: 15px;
  font-size: 20px;
  font-weight: bold;
`;

const IssueDetail = styled.div`
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 16px;
  span {
    font-weight: bold;
    margin: 10px;
  }
`;

const IssueNumber = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

const IssueTitle = styled.div`
  padding-left: 10px;
`;

const IssueContent = styled.div`
  background-color: white;
  width: 830px;
  height: transparent;
  margin-left: 35px;
  margin-bottom: 25px;
  padding: 20px;
  text-align: left;
  font-size: 12px;
  font-weight: 100;
  line-height: 20px;
  text-align: center;
`;

const GoBackBtn = styled.button`
  border: none;
  background-color: transparent;
  color: white;
  font-size: 20px;
  font-weight: 100;
  :hover {
    text-decoration: underline solid 1px white;
  }
  position: absolute;
  bottom: 5px;
  right: 450px;
`;

const DivisionLine = styled.hr`
  border: 1px solid black;
  width: 80%;
`;
