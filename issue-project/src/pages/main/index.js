import { Link } from "react-router-dom";

const IssueMainPage = () => {
  return (
    <div>
      <div>
        <div>
          <p>issue number: 1</p>
          <p>issue title: test1</p>
        </div>
        <div>
          <p>id: test1</p>
          <p>date: 0000/00/00</p>
          <p>comments: 0</p>
        </div>
      </div>
      <div>
        <Link to="/">맨처음</Link>
        <Link to="/">다음</Link>
        <Link to="/">1</Link>
        <Link to="/">2</Link>
        <Link to="/">3</Link>
        <Link to="/">4</Link>
        <Link to="/">5</Link>
        <Link to="/">이전</Link>
        <Link to="/">맨끝</Link>
      </div>
    </div>
  );
};

export default IssueMainPage;
