import { useLoading } from "../contexts/loading";
import getIssues from "../apis/get-issue-api";
import { useIssueList } from "../contexts/issueList";

const useIssues = () => {
  const { setLoading } = useLoading();
  const { issueList, setIssueList } = useIssueList();

  const fetchIssueList = async () => {
    try {
      setLoading(true);
      setTimeout(async () => {
        const res = await getIssues("angular", "angular-cli").then(
          setLoading(false)
        );
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
      }, 3000);
    } catch (err) {
      console.error(err);
    }
  };
  fetchIssueList();

  return { fetchIssueList };
};

export default useIssues;
