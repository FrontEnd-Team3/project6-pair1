import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useLoading } from "../../contexts/loading";
import LoadingPage from "../loading";
import IssueList from "./list";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { getIssues } from "../../reducer/issue";
import { useIssueList } from "../../contexts/issueList";

const IssueMainPage = () => {
  // const { loading, setLoading } = useLoading();
  const { issueList, setIssueList } = useIssueList();
  const targetList = useSelector((state) => state.issue.issueList);

  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const pageNumberFromURL = searchParams.get("page");
  const filterFromURL = searchParams.get("filter");
  const itemsPerPageFromURL = searchParams.get("items");

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [sortOption, setSortOption] = useState("created");

  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.issue.getIssueState);

  useEffect(() => {
    const fetchIssueList = async () => {
      try {
        // setLoading(true);
        // setTimeout(async () => {
        //   const res = await AuthApi.getData("angular", "angular-cli").then(
        //     setLoading(false)
        //   );
        const res = dispatch(
          getIssues({ owner: "angular", repo: "angular-cli" })
        );
        console.log("res", res);
        // }, 3000);
      } catch (err) {
        console.error(err);
      }
    };
    fetchIssueList();
  }, []);

  useEffect(() => {
    const formattedIssueList = targetList.map((issue) => ({
      id: issue.id,
      userId: issue.twitter_username,
      number: issue.number,
      title: issue.title,
      date: issue.created_at,
      updateDate: issue.updated_at,
      commentCount: issue.comments,
      profileURL: issue.user.avatar_url,
      userName: issue.user.login,
      content: issue.body,
      taskDone: issue.taskDone,
    }));
    setIssueList(formattedIssueList);
    console.log("issueList", issueList);
  }, [targetList]);

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
    if (currentPage === newPage) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
    setCurrentPage(newPage);
    navigate(`?page=${newPage}&filter=${sortOption}&items=${itemsPerPage}`);
  };

  const paginateIssues = (issues) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return issues.slice(startIndex, endIndex);
  };

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(parseInt(event.target.value));
    setCurrentPage(1); // 현재 페이지를 1로 설정
    navigate(`?page=1&filter=${sortOption}&items=${event.target.value}`);
  };

  const handleSortOptionChange = (event) => {
    setSortOption(event.target.value);
    setCurrentPage(1);
    navigate(`?page=1&filter=${event.target.value}&items=${itemsPerPage}`);
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
        <Select>
          정렬:{" "}
          <select value={sortOption} onChange={handleSortOptionChange}>
            <option value="created">생성순</option>
            <option value="updated">업데이트순</option>
            <option value="comments">댓글순</option>
          </select>
        </Select>
        <Select>
          보기:{" "}
          <select value={itemsPerPage} onChange={handleItemsPerPageChange}>
            <option value={10}>10개 씩 보기</option>
            <option value={20}>20개 씩 보기</option>
            <option value={50}>50개 씩 보기</option>
          </select>
        </Select>
      </div>
      <div>
        {loading ? (
          <LoadingPage />
        ) : (
          <IssueList displayedIssues={displayedIssues} />
        )}
      </div>
      <div>
        <LastBtn
          onClick={() => handlePageClick(1)}
          disabled={currentPage === 1}
        >
          맨처음
        </LastBtn>
        <LastBtn
          onClick={() => handlePageClick(currentPage - 1)}
          disabled={currentPage === 1}
        >
          이전
        </LastBtn>
        {[...Array(totalPages)].map((_, index) => {
          const pageNumber = index + 1;
          return (
            <PageBtn
              key={index}
              onClick={() => handlePageClick(pageNumber)}
              isSelected={currentPage === pageNumber}
            >
              {pageNumber}
            </PageBtn>
          );
        })}
        <LastBtn
          onClick={() => handlePageClick(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          다음
        </LastBtn>
        <LastBtn
          onClick={() => handlePageClick(totalPages)}
          disabled={currentPage === totalPages}
        >
          맨끝
        </LastBtn>
      </div>
    </div>
  );
};

export default IssueMainPage;

const Select = styled.label`
  color: white;
  margin: 20px;
  select {
    color: black;
  }
`;

const LastBtn = styled.button`
  width: 50px;
  height: 20px;
`;

const PageBtn = styled.button`
  width: 50px;
  height: 20px;
  background-color: ${({ isSelected }) => (isSelected ? "blue" : "grey")};
`;
