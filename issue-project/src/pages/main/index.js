import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import getIssues from "../../apis/issue.data";

const IssueMainPage = () => {
  const [issueList, setIssueList] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const pageNumberFromURL = searchParams.get("page");
  const filterFromURL = searchParams.get("filter");
  const itemsPerPageFromURL = searchParams.get("items");

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [sortOption, setSortOption] = useState("created");

  useEffect(() => {
    const fetchIssueList = async () => {
      try {
        const res = await getIssues("angular", "angular-cli");
        const formattedIssueList = res.map((issue) => ({
          id: issue.id,
          number: issue.number,
          title: issue.title,
          date: issue.created_at,
          updateDate: issue.updated_at,
          commentCount: issue.comments,
        }));
        setIssueList(formattedIssueList);
        console.log(issueList);
      } catch (err) {
        console.error(err);
      }
    };
    fetchIssueList();
  }, []);

  useEffect(() => {
    setCurrentPage(pageNumberFromURL ? parseInt(pageNumberFromURL) : 1);
  }, [pageNumberFromURL]);

  useEffect(() => {
    setSortOption(filterFromURL || "created");
  }, [filterFromURL]);

  useEffect(() => {
    setItemsPerPage(itemsPerPageFromURL ? parseInt(itemsPerPageFromURL) : 10);
  }, [itemsPerPageFromURL, location.search]);

  const handlePageClick = (newPage) => {
    setCurrentPage(newPage);
    navigate(`?page=${newPage}&filter=${sortOption}`);
  };

  const paginateIssues = (issues) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return issues.slice(startIndex, endIndex);
  };

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(parseInt(event.target.value));
    navigate(`?page=1&filter=${sortOption}`);
  };

  const handleSortOptionChange = (event) => {
    setSortOption(event.target.value);
    navigate(`?page=${currentPage}&filter=${event.target.value}`);
  };

  const sortIssues = (issues) => {
    if (sortOption === "created") {
      return issues.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortOption === "updated") {
      return issues.sort(
        (a, b) => new Date(b.updateDate) - new Date(a.updateDate)
      );
    } else if (sortOption === "comments") {
      return issues.sort((a, b) => b.commentCount - a.commentCount);
    }
    return issues;
  };

  const totalPages = Math.ceil(issueList.length / itemsPerPage);
  const sortedIssues = sortIssues(issueList);
  const displayedIssues = paginateIssues(sortedIssues);

  return (
    <div>
      <div>
        <label>
          정렬:{" "}
          <select value={sortOption} onChange={handleSortOptionChange}>
            <option value="created">생성순</option>
            <option value="updated">업데이트순</option>
            <option value="comments">댓글순</option>
          </select>
        </label>
        <label>
          보기:{" "}
          <select value={itemsPerPage} onChange={handleItemsPerPageChange}>
            <option value={10}>10개 씩 보기</option>
            <option value={20}>20개 씩 보기</option>
            <option value={50}>50개 씩 보기</option>
          </select>
        </label>
      </div>
      <div>
        {displayedIssues.map((issue) => (
          <li key={issue.id}>
            <div>번호: {issue.number}</div>
            <div>제목: {issue.title}</div>
            <div>ID: {issue.id}</div>
            <div>날짜: {issue.date}</div>
            <div>댓글 수: {issue.commentCount}</div>
          </li>
        ))}
      </div>
      <div>
        <button onClick={() => handlePageClick(1)} disabled={currentPage === 1}>
          맨처음
        </button>
        <button
          onClick={() => handlePageClick(currentPage - 1)}
          disabled={currentPage === 1}
        >
          이전
        </button>
        {[...Array(totalPages)].map((_, index) => {
          const pageNumber = index + 1;
          return (
            <button key={index} onClick={() => handlePageClick(pageNumber)}>
              {pageNumber}
            </button>
          );
        })}
        <button
          onClick={() => handlePageClick(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          다음
        </button>
        <button
          onClick={() => handlePageClick(totalPages)}
          disabled={currentPage === totalPages}
        >
          맨끝
        </button>
      </div>
    </div>
  );
};

export default IssueMainPage;
