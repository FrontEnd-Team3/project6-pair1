import { useNavigate, useParams } from "react-router";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useState } from "react";
const IssueDetailPage = () => {
  const navigate = useNavigate();
  const handlePageChange = () => {
    navigate("/");
  };

  const params = useParams();
  const issueId = params.id;
  console.log("targetId", params.id);

  // param의 id와 값 일치하는 데이터 받아오기
  const issueList = useSelector((state) => state.issue.issueList);
  const target = [...issueList].find((el) => el.id === parseInt(issueId));
  console.log("target", target);

  const imageURL = target.user.avatar_url;
  console.log("image", imageURL);

  // 게시물 내용 더보기
  const [isEveryContents, setIsEveryContents] = useState(false);
  const handleShowMoreContents = () => {
    setIsEveryContents((prev) => !prev);
  };

  return (
    <Box>
      <Container>
        <ImgContainer>
          <ProfileImg alt="img" src={imageURL} />
        </ImgContainer>
        <UserID>{target.user.login}</UserID>
        <IssueDetail>
          <div>
            <span>DATE: </span>
            {target.updated_at}
            <span>COMMENTS</span>
            {target.comments}
          </div>
          <DivisionLine />
          <div>
            <IssueTitle>{target.title}</IssueTitle>
          </div>
        </IssueDetail>
        <IssueContentContainer isEveryContents={isEveryContents}>
          <div>{target.body}</div>
          <button onClick={handleShowMoreContents}>
            {isEveryContents ? "줄이기" : "더보기"}
          </button>
        </IssueContentContainer>
        <BtnContainer>
          <GoBackBtn onClick={() => handlePageChange()}>
            {"Back to Main Page"}
          </GoBackBtn>
        </BtnContainer>
      </Container>
    </Box>
  );
};

export default IssueDetailPage;

const Box = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  flex-grow: 2;
  background-color: lightgray;
  width: 900px;
  margin-left: 500px;
  margin-top: 55px;
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

const IssueTitle = styled.div`
  padding-left: 10px;
`;

const IssueContentContainer = styled.div`
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
  div {
    display: block;
    text-overflow: ellipsis;
    white-space: ${({ isEveryContents }) =>
      isEveryContents ? "normal" : "nowrap"};
    overflow: ${({ isEveryContents }) =>
      isEveryContents ? "visible" : "hidden"};
  }
  button {
    margin-top: 10px;
  }
`;

const BtnContainer = styled.div`
  margin: 10px 100px;
  margin-bottom: 20px;
`;

const GoBackBtn = styled.button`
  border: none;
  background-color: white;
  color: black;
  border-radius: 6px;
  padding: 10px;
  font-size: 12px;
  font-weight: 100;
  :hover {
    text-decoration: underline solid 1px black;
  }
  position: relative;
  bottom: 0px;
`;

const DivisionLine = styled.hr`
  border: 1px solid black;
  width: 80%;
`;
