import { useLoading } from "../contexts/loading";

import { useIssueList } from "../contexts/issueList";
import AuthApi from "../apis/auth.api";

const useIssues = () => {
  const { setLoading } = useLoading();
  const { issueList, setIssueList } = useIssueList();

  const fetchDataAndNavigate = async () => {
    try {
      const res = await AuthApi.getData("angular", "angular-cli");
      // 정상적으로 데이터를 받은 후에 navigation 함수를 호출할 수 있습니다.
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  fetchDataAndNavigate();

  const fetchIssueList = async () => {
    try {
      setLoading(true);
      setTimeout(async () => {
        const res = await AuthApi.getData("angular", "angular-cli").then(
          setLoading(false)
        );
        const formattedIssueList = res.data.map((issue) => ({
          id: issue.id,
          number: issue.number,
          title: issue.title,
          date: issue.created_at,
          updateDate: issue.updated_at,
          commentCount: issue.comments,
        }));
        setIssueList(formattedIssueList);
        console.log(issueList);
      }, 3000);
    } catch (err) {
      console.error(err);
    }
  };
  fetchIssueList();

  return { fetchIssueList };
};

export default useIssues;
