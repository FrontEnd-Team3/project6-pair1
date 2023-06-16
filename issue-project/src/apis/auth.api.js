import { axiosInstance } from "./core.api";

const AuthApi = {
  getData(owner, repo) {
    return axiosInstance.get(`/repos/${owner}/${repo}/issues`, {
      params: {
        per_page: 200,
        sort: "updated",
        direction: "asc",
      },
    });
  },
};

export default AuthApi;
