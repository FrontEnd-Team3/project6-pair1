import { useLocation, useNavigate } from "react-router";
import styled from "styled-components";
import { useOneIssue } from "../../contexts/one-issue";

const OneIssue = ({ issue }) => {
  const { setOneIssue } = useOneIssue();

  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const HandleDetailPage = (id) => {
    setOneIssue(issue);
    searchParams.delete("page");
    searchParams.delete("filter");
    navigate(`/detail/${id}`);
  };

  return (
    <Issue key={issue.id} onClick={() => HandleDetailPage(issue.id)}>
      <div>번호: {issue.number}</div>
      <div>제목: {issue.title}</div>
      <div>ID: {issue.id}</div>
      <div>날짜: {issue.date}</div>
      <div>댓글 수: {issue.commentCount}</div>
    </Issue>
  );
};

export default OneIssue;

const Issue = styled.li`
  height: 150px;
  width: 500px;
  background-color: white;
  border-radius: 16px;
  margin: 10px 0px;
  margin-left: 35%;
  font-weight: 100;
  line-height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10px;
`;
