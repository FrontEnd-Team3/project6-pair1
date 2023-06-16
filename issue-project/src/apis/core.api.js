import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api.github.com/",
  headers: {
    Authorization: `Token ${process.env.REACT_APP_GET_ISSUE_TOKEN}`, // 'Bearer'를 'Token'으로 변경
  },
});
